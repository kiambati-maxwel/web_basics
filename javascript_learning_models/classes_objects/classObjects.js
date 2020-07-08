
function makeClass(){
     class Thermostat{
         constructor(temp) {
             this._temp = 5/9 * (temp-32);
         }
         get temperature(){
             return this._temp;
         }
         set temperature(updatedTemp){
             this._temp = updatedTemp;
}
     }   

     return Thermostat;
 }

 const Thermostat = makeClass();
 
 const Thermostat1 = new Thermostat(76);

 let tempp = Thermostat1.temperature;

 Thermostat1.temperature = 26;

 tempp = Thermostat1.temperature;
 console.log(tempp);

//  import {capString} from "./test";

//  console.log(capString("web bad ass"));