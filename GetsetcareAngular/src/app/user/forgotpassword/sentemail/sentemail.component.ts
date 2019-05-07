import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {GetSetService} from '../../../services/getset.service';
import {emailOtpModel} from '../../../models/emailOtpModel';
import{ Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-sentemail',
  templateUrl: './sentemail.component.html',
  styleUrls: ['./sentemail.component.css'],
  providers:[GetSetService,FormBuilder]
})
export class SentemailComponent implements OnInit {
 @Input() estatus:boolean = false;
 successfullysent : boolean =false;
 complexForm:FormGroup;
 emailOtpModelData= new emailOtpModel;
 nodata: string;
 loader:boolean = false;
  @Output() sendEmail: EventEmitter<boolean> =   new EventEmitter();
  constructor(private router: Router,private otpService: GetSetService, private fb:FormBuilder) { 


   
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
     
      //'email':new FormControl(),
      'email':['', Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
     'dob':['', Validators.compose([ Validators.required])]
    });  
  }
  semdemail(value){
    this.loader= true;
    localStorage.removeItem('userEmail');
    console.log("Email Value");
    console.log(value);
    this.emailOtpModelData.email= value.email ;
    console.log(this.emailOtpModelData);
    this.otpService.otpEmail(this.emailOtpModelData).subscribe(data => {
      
      console.log("sent email"); console.log(data.key)
    if(data.key == "true"){
      localStorage.setItem('userEmail',this.emailOtpModelData.email);
      this.loader= false;
      this.estatus = true;
      this.sendEmail.emit(this.estatus);
    }else{ 
    this.nodata = data.value;
    }
    
    } );
  
    //this.successfullysent = true;


  }
  ngOnInit() {
  }
  validation_messages = {
   
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],

    'dob':[
      { type: 'required', message: 'Date Of Birth is required' },
    ]
   
    }
}  
