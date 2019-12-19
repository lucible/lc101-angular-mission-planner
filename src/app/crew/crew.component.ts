import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  selected : boolean[] = [false, false, false, false, false, false, false]
  full : string = ''
  showAstro : boolean = false
  astroShown : object

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember (candidate : object) {
    if (this.crew.includes(candidate)) {
      this.inCrew = true
    }
    if (this.crew.includes(candidate)) {
      this.crew.indexOf(candidate)
      this.crew.splice(this.crew.indexOf(candidate), 1)
      this.selected[this.candidates.indexOf(candidate)] = false
      if (this.crew.length !== 3) {
        this.full = ''
      }
    } else if (this.candidates.includes(candidate) && this.crew.length < 3) {
      this.crew.push(candidate)
      this.selected[this.candidates.indexOf(candidate)] = true
      if (this.crew.length === 3) {
        this.full = 'Full'
      }
    }
  }

  hoverCrew (member : object, bool : boolean) {
    if (bool === true) {
      this.astroShown = member
      this.showAstro = true
    } else {
      this.astroShown = {}
      this.showAstro = false
    }
  }

}
