import { Component, OnInit,ChangeDetectorRef,Output,EventEmitter  } from '@angular/core';
import {MediaMatcher,} from '@angular/cdk/layout';
import { Router, ActivatedRoute} from '@angular/router';
import {GetSetService} from '../../services/getset.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {LoginModel } from '../../models/loginmodel';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormBuilder, GetSetService,LoginModel]
})
export class RegisterComponent implements OnInit {
  checkemail:boolean = true;
  complexForm:FormGroup;
  registeredEmailForm:FormGroup;
  unregisteredEmailForm:FormGroup;
  //loginvalidation :LoginModel;
  emailnotavailable :boolean = false;
  emailavailable :boolean = false;
  mobileQuery: MediaQueryList;  
  private _mobileQueryListener: () => void;
  constructor(private loginModel:LoginModel, private router: Router,private addseService:GetSetService,
    media: MediaMatcher,changeDetectorRef: ChangeDetectorRef, private fb:FormBuilder) { 
    
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);

    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'eMail' : ['', Validators.compose([ Validators.required, Validators.minLength(5)])],
      //firstName:new FormControl()
     
    });
    this.registeredEmailForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'regEmail' : ['', Validators.compose([ Validators.required,Validators.minLength(5)])],
      'regPassword' :['', Validators.compose([ Validators.required])]
     
    });
    this.unregisteredEmailForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'unregEmail' : ['', Validators.compose([ Validators.required,Validators.minLength(5)])]
    });
  }

  signup(id){
    console.log(id);
  }

  checkEmail(val){ 
    /******* */
    this.checkemail = false;
    this.emailnotavailable =true;
    this.emailavailable =false
    this.unregisteredEmailForm.controls['unregEmail'].setValue(val.eMail);
    /***** */


    localStorage.removeItem('registringEmail');
    console.log(val.eMail);
    this.loginModel.eMail = val.eMail;
    this.loginModel.userName = val.eMail;
    console.log(this.loginModel);
    localStorage.setItem('registringEmail',val.eMail);
    if(val.eMail != ''){
      this.addseService.signup(this.loginModel).subscribe(
        data => {
            console.log("Login data");
            console.log(data);        
            if(data.key == "true"){              
            this.registeredEmailForm.controls['regEmail'].setValue(this.loginModel.eMail);
            this.checkemail = false;
            this.emailnotavailable =false;
            this.emailavailable =true;
            }else{
              this.unregisteredEmailForm.controls['unregEmail'].setValue(this.loginModel.eMail);
                  this.checkemail = false;
                  this.emailnotavailable =true;
                  this.emailavailable =false;
            }
        } , error =>{ if(error.status === 404){alert('NO Internet is avalale')} }
      );
    }
    
  }
  regwithemail(val){ 
    var resp ={
      'userName' : val.regEmail,
      'password' : val.regPassword,
      'userEmail': val.regEmail
    }
    /*********** */
    this.router.navigate(['/user/service']);
    //************/
    console.log(resp);
     this.addseService.login(resp).subscribe(
       data => {
      
           console.log("Login data");
           console.log(data);          

         if(data == true){
           alert(data.userName + "is Successfully Logged In.");
           this.router.navigate(['/user/service']);
         }
         else{
           alert(data.userName + "is Failed Logged In , Please Enter correct Username and Password.")
        }
       })

  
       
    
  } 
  unregwithemail(){
    this.router.navigate(['/user/userregistration']);
  }
  ngOnInit() {


  }
  
  validation_messages = {   
    'eMail': [
      { type: 'required', message: 'User Name or Email is required' },
      { type: 'minlength', message: 'Minimum 5 characters are required' }
    ],
   'regEmail':[
    { type: 'required', message: 'User Name or Email is required' },
    { type: 'minlength', message: 'Minimum 5 characters are required' }
   ],
   'regPassword' :[
     { type: 'required', message: 'Password is required' }
   ],
   'unregEmail':[
    { type: 'required', message: 'Email is required' },
    { type: 'minlength', message: 'Minimum 5 characters are required' }
   ]
  }
}