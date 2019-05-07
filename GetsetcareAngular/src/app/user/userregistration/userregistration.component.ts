import { Component, OnInit } from '@angular/core';
import {GetSetService} from '../../services/getset.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {registerModel} from '../../models/registerModel';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
  providers: [FormBuilder, GetSetService]
  
})
export class UserregistrationComponent implements OnInit {
Countries: registerModel;
userRegistration:registerModel;
userRegistrationForm:FormGroup;
checked = false;
unregEmail:any;
matching:any;
message:String;
  constructor(private router: Router,private addseService:GetSetService, private fb:FormBuilder) {
    this.userRegistrationForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
     
     
     
      'firstName'      : ['',  Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+')])],
      'lastName'       : ['',  Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+')])],
      'dateOfBirth'    : ['',  Validators.compose([Validators.required])],
      'gender'         : ['',  Validators.compose([Validators.required])],
      'mobileNumber'   : ['',  Validators.compose([Validators.required,Validators.pattern('^[0-9]{10}')])],
      'eMail'          : ['',  Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]+$')])],
      'country'        : ['', Validators.compose([Validators.required])],
      'userName'       : ['',  Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_-]+'), Validators.minLength(5)])],
      'createPassword' : ['',  Validators.compose([Validators.required])],
      'reEnterPassword': ['',  Validators.compose([Validators.required])],
      'checked'       : ['',  Validators.compose([Validators.required])],
     
    });   
    this.addseService.countryList().subscribe(
      data => { 
        
       this.Countries =data;
        console.log("countries"); console.log(this.Countries)});
        
   }

   selectCountry(value){
     console.log("Selected Country");
     console.log(value.country);

   }

   registerUser(value){
     console.log(value);
    this.userRegistration=value;
    this.userRegistration.mobileNumber = 91 + value.mobileNumber;
    console.log(this.userRegistration);

   
     this.addseService.registerUser(this.userRegistration).subscribe(data =>
      {
       console.log (data)
       if(data.success == true){
        this. message=data.message;
         alert("Registered successfully");
         this.router.navigate(['user/service']);
       }
       else{
        this.router.navigate(['user/register']);

        alert("Failed To Register");
       }
      })

   }

   onSearchChange(value){
    console.log("Coming Here"+ value);
    console.log(this.userRegistrationForm.controls['createPassword'].value);
  
    if(value === this.userRegistrationForm.controls['createPassword'].value ){
      console.log("True");
      this.matching = '';   
  
      
    }else{
      
      console.log("false");
      this.matching = "Password Is Not Matching";
    }
  }

  ngOnInit() {
    this.unregEmail = localStorage.getItem('registringEmail')
    if(this.unregEmail.includes('@')){
      this.userRegistrationForm.controls['eMail'].setValue(this.unregEmail);
    }else{
      this.userRegistrationForm.controls['userName'].setValue(this.unregEmail);
    }
    
    
  }
  validation_messages = { 
   
    'firstName': [
      { type: 'required', message: 'First Name is required' },
      { type: 'pattern', message: 'Enter a valid First Name' }
    ],
    'lastName':[
      { type: 'required', message: 'Last Name is required' },
      { type: 'pattern', message: 'Enter a valid Last Name' }
    ],
    'dateOfBirth':[
      { type: 'required', message: 'Date Of Birth is required' },
    ],
    'gender':[
      { type: 'required', message: 'Gender is required' },
    ],
    'mobileNumber':[
      { type: 'required', message: 'Mobile Number is required' },
      { type: 'pattern', message: 'Enter a valid Mobile Number' }
    ],
    'eMail':[
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid Email' }
    ],
    'country':[
      { type: 'required', message: 'Country is required' },
    ],
    'userName':[
      { type: 'required', message: 'User Name is required' },
      { type: 'pattern', message: 'Enter a valid User Name' },
      { type: 'minlength', message: 'Minimum 5 characters length is required' }
    ],
    'createPassword':[
      { type: 'required', message: 'Password is required' },
    ],
    'reEnterPassword':[
      { type: 'required', message: 'Password is required' },
    ],
    'checked':[
      { type: 'required', message: 'Terms is required' },
    ]
   
   
    }
}
