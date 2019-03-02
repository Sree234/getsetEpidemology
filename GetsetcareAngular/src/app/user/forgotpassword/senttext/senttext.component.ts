import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {GetSetService} from '../../../services/getset.service';
import {OtpModel} from '../../../models/OtpModel';
import{Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-senttext',
  templateUrl: './senttext.component.html',
  styleUrls: ['./senttext.component.css'],
  providers:[GetSetService,FormBuilder]
})
export class SenttextComponent implements OnInit {
  otpModeldata = new OtpModel;
  complexForm:FormGroup;
  nodata:any;
  loader:boolean = false;
  @Input() tstatus:boolean = false;
  @Output() sendText: EventEmitter<boolean> =   new EventEmitter();
  
  constructor(private router: Router,private otpService: GetSetService, private fb:FormBuilder) { 
   
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
     
      //'email':new FormControl(),
      'mobileNumber':['', Validators.compose([ Validators.required, Validators.pattern('^[7|8|9][0-9]{9}')])],
      'dob':['', Validators.compose([ Validators.required])]
    });
  }
  // sendtext(){
  //   this.tstatus = true;
  //   this.sendText.emit(this.tstatus);
  // }
 

  ngOnInit() {


  }
  
  otptext(value){
    /** */
    this.tstatus = true;
    this.sendText.emit(this.tstatus);
    /** */
    console.log(value);
    this.loader = true;
    localStorage.removeItem('otptextValue');
    value.mobileNumber = '91'+ value.mobileNumber;
    this.otpModeldata.phoneNumber = value.mobileNumber;
    localStorage.setItem('otptextValue', this.otpModeldata.phoneNumber);
    // this.otpModeldata.textMessage=value.dob;
     console.log(this.otpModeldata);
    this.otpService.otpText(this.otpModeldata).subscribe(data => {
      console.log("Sent oTp");console.log(data);
        if(data.key == "true"){
          this.loader = false;
          console.log(value);
          this.tstatus = true;
          this.sendText.emit(this.tstatus);
        }
      else{
        this.nodata = data.value;
        console.log(data.value);
      }
    }); 
  
}
validation_messages = {
   
  'mobileNumber': [
    { type: 'required', message: 'Mobile Number is required' },
    { type: 'pattern', message: 'Enter a valid Mobile Number ' },
    //{ type: 'maxlength', message: 'Mobile Number cannot be more than 10 characters long'}
  ],
  'dob':[
        { type: 'required', message: 'Date Of Birth is required' },
      ]
 
  }
}
