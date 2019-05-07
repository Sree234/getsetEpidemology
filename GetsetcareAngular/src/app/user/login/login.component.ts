import { Component, OnInit,ChangeDetectorRef,Output,EventEmitter } from '@angular/core';
import {MediaMatcher,} from '@angular/cdk/layout';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule, Http,Response} from '@angular/http';
import {GetSetService} from '../../services/getset.service';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {DataService } from '../../services/data.service';
import {LoginModel } from '../../models/loginmodel';
@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'],
  providers:[GetSetService,FormBuilder,DataService]
})
export class LoginComponent implements OnInit {
  complexForm:FormGroup;
  loginForm :LoginModel;
  mobileQuery: MediaQueryList;  
  emailnotavailable :boolean = false;
  emailavailable :boolean = false;
  setLogin:string;
  message: string ;
  private _mobileQueryListener: () => void;
    

  constructor(private mainService:GetSetService,private router:Router,private fb:FormBuilder,
              private dataService: DataService,media: MediaMatcher,changeDetectorRef: ChangeDetectorRef){
                this.mobileQuery = media.matchMedia('(max-width: 600px)');
                this._mobileQueryListener = () => changeDetectorRef.detectChanges();
                this.mobileQuery.addListener(this._mobileQueryListener);
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'email' : [null,   Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+@-]+$')])],
      'password' : [null,   Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-@#]+$')])],
     
     
    });
  
  }

  checkEmail(val){
    console.log(val)
    this.loginForm = val;
    console.log(this.loginForm);
    var resp ={
      'userName' : val.email,
      'password' : val.password,
      'userEmail': val.email
    }
    console.log(resp);
    this.mainService.login(resp).subscribe(
      data => {
      
          console.log("Login data");
          console.log(data);          

        if(data == true){
          alert(data.userName + "is Successfully Logged In.");
        }
        else{
          alert(data.userName + "is Failed Logged In , Please Enter correct Username and Password.")
        }

        //alert("successfully Logged in");
     });

  }
  forgotPassword(){
    this.dataService.changeMessage("Hello from Sibling")
    this.router.navigate(['/user/forgotpassword']);

  }
  ngOnInit() {

    this.dataService.currentMessage.subscribe(message => this.message = message)
  }
  validation_messages = {
   
    'email': [
      { type: 'required', message: 'Email is Required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password':[
      { type: 'required', message: 'Password is Required' },
      { type: 'pattern', message: 'Enter a valid password' }
    ]
   
    }
}

