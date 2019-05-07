import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import{OtpModel } from '../../../models/otpmodel1';
import{ Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { GetSetService } from '../../../services/getset.service';
//import { THIS_EXPR } from '../../../../../node_modules/@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-emailotp',
  templateUrl: './emailotp.component.html',
  styleUrls: ['./emailotp.component.css'],
  providers:[GetSetService,FormBuilder,OtpModel]
})
export class EmailotpComponent implements OnInit {
  userEmailvalue: string;
  verifyEmail:FormGroup;
  nodata:any;
  constructor(private optmodel: OtpModel, private otpService:GetSetService,private router: Router,private fb:FormBuilder) {
    this.verifyEmail = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
     
      //'email':new FormControl(),
      'vemail':['', Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      'votp' :['', Validators.compose([ Validators.required, Validators.pattern('^[0-9_.+-]+$')])],
      // 'dob':new FormControl()
    });
    
  }
   
  semdemail(value){
    
    console.log("Yes Coming Here");
    console.log(value);
    this.optmodel.UserMailId = value.vemail;
    this.optmodel.otp = value.votp;
    console.log(this.optmodel);
    this.otpService.verifyemobileOtp(this.optmodel).subscribe(data =>
       {
        localStorage.removeItem("changepemail");
         console.log("Verified otp"); console.log(data);
         if(data.key == "true"){
           localStorage.setItem("changepemail",this.optmodel.UserMailId);
             this.router.navigate(['/user/changepassword']);
         }else{
           this.nodata = data.value;
         }
        
        })
  
  }
  ngOnInit( ) { 
    this.userEmailvalue=localStorage.getItem('userEmail');
    this.verifyEmail.controls['vemail'].setValue(this.userEmailvalue);



    console.log(  this.userEmailvalue);
  }
  resendOtp(){
    
  }

  validation_messages = {
   
    'vemail': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'votp':[
      { type: 'required', message: 'OTP is required' },
      { type: 'pattern', message: 'Enter a valid OTP' }
    ]
   
    }
}