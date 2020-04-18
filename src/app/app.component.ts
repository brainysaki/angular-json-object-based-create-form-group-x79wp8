import { Component,OnInit } from '@angular/core';

import { FormGroup } from "@angular/forms"

import {RxFormBuilder } from "@rxweb/reactive-form-validators"

import {IData,BasicSetup } from "./app.interface"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  nestedFormGroup:FormGroup;

  constructor(private formBuilder:RxFormBuilder){}

  ngOnInit(){
    let basicSetup :BasicSetup = {
      dateOfBirth:"10/10/2015",
      experienceLevel:{
        id:1,
        jobSeekerGuid:"XYZ",
        value:"abc"
      },
      gender:"Male",
      id:1,permanentAddress:"Delhi",
      presentAddress:"Delhi",
      skillsHobbies:{
        id:1,
        jobSeekerGuid:"XYZ Hobby",
        value:"Chess"
      }
    }

    this.nestedFormGroup = this.formBuilder.group(basicSetup);
  }
}
