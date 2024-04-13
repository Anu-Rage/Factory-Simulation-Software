const express = require('express');
const router = express.Router();
const fetchuser = require('../middlewares/fetchUser');
const Factoryinfo = require('../models/FactoryInfo');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Factoryinfos using: GET "localhost:8000/api/info/fetchinfo". Login required
router.get('/fetchinfo', fetchuser, async (req, res) => {
    try {
        const factoryinfos = await Factoryinfo.find({ user: req.user.id });
        res.json(factoryinfos)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Factoryinfo using: POST "/api/info/addfactoryinfo". Login required
router.post('/addfactoryinfo', fetchuser, [
   body('Category', 'Enter the machine type -- Latte, Turing, Drilling, Soldering').isIn(['Latte', 'Turing', 'Drilling', 'Soldering']),
    body('Total_adjuster_busy_hours', 'Enter the no of hours adjuster was busy').isNumeric(),
    body('Time_span', 'Enter the no of hours adjuster was available').isNumeric(),
    body('Total_running_hours', 'Enter the no of hours machine was running').isNumeric(),
    body('No_of_adjusters', 'Enter the no of hours machine was available').isNumeric(),
    body('No_of_machines', 'Enter the no of hours machine was available').isNumeric()], async (req, res) => {
        try {
            const {Category, Total_adjuster_busy_hours,Time_span, Total_running_hours,No_of_adjusters, No_of_machines } = req.body;
             const au = (Total_adjuster_busy_hours / Time_span) * 100;
             const mu = (Total_running_hours / No_of_machines) * 100;
            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
           
            const factoryinfo = new Factoryinfo({
              Category, Total_adjuster_busy_hours ,Time_span, Total_running_hours, No_of_machines ,No_of_adjusters, user: req.user.id,  
            })
            const savedFactoryinfo = await factoryinfo.save()

            res.json(savedFactoryinfo)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Factoryinfo using: PUT "/api/info/updatefactoryinfo". Login required
router.put('/updatefactoryinfo/:id', fetchuser, async (req, res) => {
   const {Category, Total_adjuster_busy_hours,Time_span, Total_running_hours, No_of_machines, No_of_adjusters, Avg_adjuster_utilization, Avg_machine_utilization, optimum_no_of_adjusters} = req.body;
    try {
        // Create a newFactoryinfo object
        const newFactoryinfo = {};
        if (Category) { newFactoryinfo.Category = Category };

        if (Total_adjuster_busy_hours) { newFactoryinfo.Total_adjuster_busy_hours = Total_adjuster_busy_hours
        newFactoryinfo.Avg_adjuster_utilization = (Total_adjuster_busy_hours /  (Time_span*No_of_adjusters))*100 
        };

        if (Time_span) { newFactoryinfo.Time_span = Time_span 
            newFactoryinfo.Avg_adjuster_utilization = (Total_adjuster_busy_hours/ (Time_span*No_of_adjusters))*100
            newFactoryinfo.Avg_machine_utilization = (Total_running_hours / (Time_span*No_of_machines))*100 
           };

        if (Total_running_hours) { newFactoryinfo.Total_running_hours = Total_running_hours 
            newFactoryinfo.Mttf =  Total_running_hours / No_of_machines
            newFactoryinfo.Avg_machine_utilization = (Total_running_hours / (Time_span*No_of_machines))*100
            };

        if (No_of_machines) { newFactoryinfo.No_of_machines = No_of_machines 
            newFactoryinfo.Mttf =  Total_running_hours / No_of_machines };

            if(No_of_adjusters){
                newFactoryinfo.Avg_adjuster_utilization = (Total_adjuster_busy_hours /  (Time_span*No_of_adjusters))*100 
                
            }
        newFactoryinfo.optimum_no_of_adjusters =Math.round (No_of_adjusters*(newFactoryinfo.Avg_adjuster_utilization/newFactoryinfo.Avg_machine_utilization));
        // Find the factoryinfo to be updated and update it
        let factoryinfo = await Factoryinfo.findById(req.params.id);
        if (!factoryinfo) { return res.status(404).send("Not Found") }

        if (factoryinfo.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        factoryinfo = await Factoryinfo.findByIdAndUpdate(req.params.id, { $set: newFactoryinfo }, { new: true })
        res.json({ factoryinfo });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Factoryinfo using: DELETE "/api/factoryinfos/deletefactoryinfo". Login required
router.delete('/deletefactoryinfo/:id', fetchuser, async (req, res) => {
    try {
        // Find the factoryinfo to be delete and delete it
        let factoryinfo = await Factoryinfo.findById(req.params.id);
        if (!factoryinfo) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Factoryinfo
        if (factoryinfo.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        factoryinfo = await Factoryinfo.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Factoryinfo has been deleted", factoryinfo: factoryinfo });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router