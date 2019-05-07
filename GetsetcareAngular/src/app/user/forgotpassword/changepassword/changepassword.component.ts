import { Component, OnInit,ChangeDetectorRef, } from '@angular/core';
import {MediaMatcher,} from '@angular/cdk/layout';
import { Router, ActivatedRoute} from '@angular/router';
import{ Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
import {LoginModel} from '../../../models/loginmodel';
import { GetSetService } from '../../../services/getset.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  providers:[LoginModel,GetSetService]
})
export class ChangepasswordComponent implements OnInit {

  conformPassword:FormGroup;
  matching:boolean = true;
  useremail:any;
  userphone:any;
  nodata:any;
  mobileQuery: MediaQueryList;  
  private _mobileQueryListener: () => void;
  constructor(private changePasswordService: GetSetService,private loginmModel: LoginModel,media: MediaMatcher,changeDetectorRef: ChangeDetectorRef,
     private router: Router,private fb:FormBuilder) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.conformPassword = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
     
      //'email':new FormControl(),
      'npassword':['', Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9@_.+-]+$')])],
      'cpassword' :['', Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9_0-9@_.+-]+$')])],
      // 'dob':new FormControl()
    });
    
  }
  passwordConfirmation(value){
    this.changePasswordService.changePassword(this.loginmModel).subscribe(data =>{
      
            
            if(data.key == "true"){
              alert("Your Password has been changed Successfully.");
              this.router.navigate(['user/login']);
            }else{
              this.nodata = data.value;
            }
            
          })

  }
  onSearchChange(value){
  console.log("Coming Here"+ value);
  console.log(this.conformPassword.controls['npassword'].value);

  if(value === this.conformPassword.controls['npassword'].value ){
    console.log("True");
    this.matching = true;
    console.log(value,this.useremail);
    this.loginmModel.eMail = this.useremail;
    this.loginmModel.mobilenumber =this.userphone;
    this.loginmModel.password = this.conformPassword.controls['npassword'].value
    console.log(this.loginmModel);

   
  }else{
    
    console.log("false");
    this.matching = false;
  }
}
  ngOnInit() {

    this.useremail=localStorage.getItem("userEmail");
    this.userphone = localStorage.getItem("otptextValue");
  }
  validation_messages = {
   
    'npassword': [
      { type: 'required', message: 'Password is Required' },
      { type: 'pattern', message: 'Enter a valid password' }
    ],
    'cpassword':[
      { type: 'required', message: 'Password is Required' },
      { type: 'pattern', message: 'Enter a valid password' }
    ]
   
    }
}
