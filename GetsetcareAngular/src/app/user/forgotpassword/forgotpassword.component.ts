import { Component, OnInit,ChangeDetectorRef,Output,EventEmitter } from '@angular/core';
import {MediaMatcher,} from '@angular/cdk/layout';
import {GetSetService} from '../../services/getset.service';
import {OtpModel} from '../../models/OtpModel';
import { Router, ActivatedRoute} from '@angular/router';
import{FormBuilder,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  providers:[GetSetService,FormBuilder]
})
export class ForgotpasswordComponent implements OnInit {
  semail:boolean = true;
  sendpswd:boolean = true;
  successfullysent:boolean = false;
  EmailStatus:boolean =false;
  TextStatus:boolean = false;
  stext:boolean = false;
  forgettext:string;
  otpModel:OtpModel;
  formGroup:FormGroup;
  mobileQuery: MediaQueryList;  
  private _mobileQueryListener: () => void;
  constructor(private otpService:GetSetService, private fb:FormBuilder,media: MediaMatcher,changeDetectorRef: ChangeDetectorRef)
     {
       this.forgettext = "we will send you an email with instructions on how to reset your password";
       this.mobileQuery = media.matchMedia('(max-width: 600px)');
       this._mobileQueryListener = () => changeDetectorRef.detectChanges();
       this.mobileQuery.addListener(this._mobileQueryListener);
     }
  sendemail(){this.semail = true; this.stext = false; this.forgettext = "we will send you an email with instructions on how to reset your password"}
  sendtext(){ this.semail = false;this.stext = true; this.forgettext = " we will text you a verification code to reset your password "}
  sendEmailHandler(Estatus){
   this.EmailStatus = Estatus;
   this.sendpswd = false;
   this.successfullysent = true;
   console.log("Getting Email");
   console.log( this.EmailStatus);
  }
  sendTextHandler(Tstatus){
    this.TextStatus = Tstatus;
    this.sendpswd = false;
    console.log("Getting Text");
     this.successfullysent = true;;
     
    console.log( this.TextStatus);
  }
  ngOnInit() {
  }

  otptext(value){
    console.log(value);
    this.otpModel=value;
    console.log(this.otpModel);



  }

}
