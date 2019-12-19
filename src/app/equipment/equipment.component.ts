import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   inactive: boolean[] = [false, false, false, false, false, false, false, false, false]
   nearMaxMass: boolean = false
   massRemaining: number = this.maximumAllowedMass - this.cargoMass

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem (item : object) : boolean {
    if (this.cargoHold.length === this.maxItems) {
      this.inactive[this.equipmentItems.indexOf(item)] = true
    } else if (item["mass"] + this.cargoMass > this.maximumAllowedMass) {
      this.inactive[this.equipmentItems.indexOf(item)] = true
    } else {
      this.cargoHold.push(item)
      this.cargoMass = this.cargoMass + item["mass"]
      this.massRemaining = this.maximumAllowedMass - this.cargoMass
    }
     
    if (this.cargoMass > this.maximumAllowedMass + 200 || this.cargoMass < this.maximumAllowedMass - 200) {
      return false
    } else {
      this.nearMaxMass = true
      return true
    }
   }

   emptyHold() {
     this.cargoHold = []
     this.cargoMass = 0
     this.nearMaxMass = false
     this.inactive = [false, false, false, false, false, false, false, false, false]
   }
   
}
