import { Component, OnInit,ChangeDetectorRef,EventEmitter } from '@angular/core';
import {MediaMatcher,} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {GetSetService} from '../../../services/getset.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {orgRegistration } from '../../../models/orgRegistermodel';

@Component({
  selector: 'app-organizationregistration',
  templateUrl: './organizationregistration.component.html',
  styleUrls: ['./organizationregistration.component.css']
})
export class OrganizationregistrationComponent implements OnInit {
  orgRegistrationForm:FormGroup;
  image: any;
  availablecontent:any;
  check:any;
  matching:any;
  checkimage:any;
  heading:boolean = false;
  orgUrl:any;
  orgRegister: orgRegistration;
  mobileQuery: MediaQueryList;  
  private _mobileQueryListener: () => void;
  constructor(private fb:FormBuilder,  private orgservice :GetSetService,media: MediaMatcher,changeDetectorRef: ChangeDetectorRef) { 
    this.check=false;
    
   
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.orgRegistrationForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'phoneNumber' : [null,  Validators.compose([Validators.required,Validators.pattern('^[7|8|9][0-9]{9}')])],
      'organizationUserName' : [null,  Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z_.+-]+$')])],
      'organizationName' : [null,  Validators.compose([Validators.required])],
      'createPassword' : [null,  Validators.compose([Validators.required, Validators.minLength(6)])],
      'reEnterPassword': [null,  Validators.compose([Validators.required, Validators.minLength(6)])],
     
    });   
  }
  //check Password
  checkPassword(value){
    console.log("Coming Here"+ value);
    console.log(this.orgRegistrationForm.controls['createPassword'].value);
  
    if(value === this.orgRegistrationForm.controls['createPassword'].value ){
      console.log("True");
      this.matching = '';   
  
      
    }else{
      
      console.log("false");
      this.matching = "Password Is Not Matching";
    }
  }
  xxy(){
    this.heading = true;
    this.orgUrl = this.orgRegistrationForm.controls['organizationName'].value+'.getsetcare.com';
  }
  //Submit org RegistrationForm
  registerUser(data){
    console.log("org Registration");
    console.log(data);
    
     this.orgRegister.password = data.reEnterPassword;
     this.orgRegister.organizationName =data.organizationName+'.getsetcare.com';
     this.orgRegister.organizationUserName =data.organizationUserName;
     this.orgRegister.password = data.password;
         
    this.orgservice.registerOrganization(this.orgRegister).subscribe( data =>{
      console.log("Registered");
      console.log(data);
      this.orgRegistrationForm.reset()
  });

    //
  }
  //check box set
  orgCheckValue(value){
    if(value.length >2){
      this.check = true;
    }else{
      this.check = false;
    }
   
  }
  //check domain availablity
  checkDomain(){
    let orgName ={
      'organizatioonName' : this.orgRegistrationForm.controls['organizationName'].value+'.getsetcare.com'
    }
    console.log(orgName);
   
      //domain availa api
       this.orgservice.checkOrganization(orgName).subscribe(data =>{
         if(data ){
             
            if(data === true){
              this.orgUrl = this.orgRegistrationForm.controls['organizationName'].value+'.getsetcare.com';
              this.availablecontent="Available";
              this.image="available"
              this.checkimage =true;
              this.check = false;
            }else{
              this.availablecontent="Already Existing Try another One";
              this.image="close"
              this.checkimage =true;
              this.check = false;
            } 
          
         }

       },
       (error) => {console.log(error.status); if(error.status === 404){ this.check = false; alert("NO Network is available"); this.orgRegistrationForm.reset()}}
      )
      
  }
  
  ngOnInit() {
  }
  validation_messages = {
   
    'phoneNumber': [
      { type: 'required', message: 'Mobile Number is required' },
      { type: 'pattern', message: 'Enter a valid mobile Number' }
    ],
    'organizationUserName':[
      { type: 'required', message: 'User Name is required' },
      { type: 'pattern', message: 'Enter a valid User Name' }
    
    ],
    'organizationName':[
      { type: 'required', message: 'Organisation Name is required' },
    ],
    'reEnterPassword':[
      { type: 'required', message: 'Password  is required' },
      { type: 'minlength', message: 'Mnimum 6 characters length is requred' }
    ],
    'createPassword':[
      { type: 'required', message: 'Password  is required' },
      { type: 'minlength', message: 'Mnimum 6 characters length is requred' }
      
    ]
   
    }
}
