const mongoose = require('mongoose');
const { Schema } = mongoose;

const FactorySchema = new Schema({
user:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
},

//  Adjuster_no : { type :Number, required : true},
//  Machine_no : { type :Number, required : true},
Category : {type : String},
Total_adjuster_busy_hours :{type : Number},
Time_span :{type : Number},
Avg_adjuster_utilization :{type : Number, default: function() {
    return (this.Total_adjuster_busy_hours /( this.Time_span* this.No_of_adjusters))*100
  }},

Total_running_hours :{type : Number},
No_of_machines :{type : Number},
No_of_adjusters:{type: Number},
Mttf :{type : Number,  default:  function() {
         return (this.Total_running_hours / this.No_of_machines)
    }},
Avg_machine_utilization :{type : Number, default: function() {
      return (this.Total_running_hours / (this.Time_span * this.No_of_machines))*100
    }},   
optimum_no_of_adjusters:{type: Number, default: function(){
      return Math.round(this.No_of_adjusters*(this.Avg_adjuster_utilization/this.Avg_machine_utilization));
    }}

});


 module.exports = mongoose.model('factoryInfo', FactorySchema);