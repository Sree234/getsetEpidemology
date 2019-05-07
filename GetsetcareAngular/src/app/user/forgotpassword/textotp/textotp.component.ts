import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {GetSetService} from '../../../services/getset.service';

import{OtpModel } from '../../../models/otpmodel1';
import{Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-textotp',
  templateUrl: './textotp.component.html',
  styleUrls: ['./textotp.component.css'],
  providers:[GetSetService,FormBuilder,OtpModel]
})
export class TextotpComponent implements OnInit {
  
   complexForm:FormGroup;
   userOtpmobilenumber:string;
   nodata:any;
   loader:any;
  constructor(private optmodel: OtpModel,private router: Router,private otpService: GetSetService, private fb:FormBuilder) { 
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      //'eMail' : [null,  Validators.compose([Validators.required])],
      'mobileNumber' : [null, Validators.compose([Validators.required,Validators.pattern('^[7|8|9][0-9]{9}')])],
      'otp':[null,  Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])]
     
    });
  
  }
  submit(){
    this.router.navigate(['/changepassword']);
  }
  reSendOtp(){
    this.loader = true;
    this.optmodel.UserMobileNumber=localStorage.getItem('otptextValue');
    this.otpService.otpText(this.optmodel).subscribe(data => {
      console.log("Sent oTp");console.log(data);
        if(data.key == "true"){
          this.loader = false;
         
        }
      else{
        this.nodata = data.value;
        console.log(data.value);
      }
    }); 
  }
  ngOnInit() {
    this.userOtpmobilenumber= localStorage.getItem('otptextValue');
    this.userOtpmobilenumber=this.userOtpmobilenumber.slice(2,12);
    //assigning number to input
    this.complexForm.controls['mobileNumber'].setValue(this.userOtpmobilenumber);
  }

  textOtp(value){
    this.loader = true;
    console.log("213122");
    console.log(value);
    this.optmodel.UserMobileNumber = 91+value.mobileNumber;
    this.optmodel.otp = value.otp;
    console.log(this.optmodel)
    this.otpService.verifyemobileOtp(this.optmodel).subscribe(data =>{
      console.log(data);
      if(data.key == "true"){
        this.loader = false;
        alert("OTP Verified Successfully.");
        this.router.navigate(['user/changepassword']);
      }
      else{
        this.nodata = data.value;
      }

    }) ;
    
  }
 

  validation_messages = {
   
    'mobileNumber': [
      { type: 'required', message: 'Mobile Number is required' },
      { type: 'pattern', message: 'Enter a valid Mobile Number ' },
     
    ],
    'otp': [
      { type: 'required', message: 'OTP is required' },
      { type: 'pattern', message: 'OTP should contain digits only ' },
     
    ]
   
    }
}
