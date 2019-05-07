import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';
import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';

import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http'; 
import { HttpParams } from '@angular/common/http';

@Injectable()
export class GetSetService {  

    private headers = new Headers({'Content-Type': 'application/json'});

  config = { headers:{
    'Accept': 'application/json'
}

  }
    
    constructor(public _http: Http) {
        this._http = _http;
    }
    
    

    //get Courses from json
    login(user) {
        //console.log("HIkk");
        //var user: any = {};
        return  this._http.post("/getsetschool/login", user)  
        .pipe( map((res) => res.json()));
    }
    signup(signUpModel) {
      console.log("signUpModel");
      console.log(signUpModel);
        return  this._http.post("/getsetschool/signup", signUpModel)  
        .pipe( map((res) => res.json()));
    }

    //get Country list
    countryList(){
        return  this._http.get("/getsetschool/countryList")  
        .pipe( map((res) => res.json()));

    }

    //user registration 
    registerUser(userData){
        return  this._http.post("/getsetschool/register",userData)  
        .pipe( map((res) => res.json()));

    } 
     //Send mobileNumberOtp TO MobileNumber
    otpText(userMobile){
        console.log("userMobile");
        console.log(userMobile);
        return  this._http.post("/getsetschool/otptext",userMobile)  
        .pipe( map((res) => res.json()));

    }
    //Send EmailOtp TO EmailAddress
    otpEmail(userMobile){
     return  this._http.post("/getsetschool/otpemail",userMobile)  
        .pipe( map((res) => res.json()));

    }
    //verify otp
    verifyemobileOtp(userMobile){
        return  this._http.post("/getsetschool/verifymobileOtp",userMobile)  
        .pipe( map((res) => res.json()));

    }

 //changepassword
 changePassword(password){
    return  this._http.post("/getsetschool/changepassword",password)  
    .pipe( map((res) => res.json()));

    }
    //orgregistration
    orgRegistration(password){
     return  this._http.post("/getsetschool/isAvailableorg",password)  
        .pipe( map((res) => res.json()));
    }
    //payumoney
    payUMoneyProcess(payumoney){
     return  this._http.post("/getsetschool/payment",payumoney )  
        .pipe( map((res) => res.json()));
    }

    //payumoneyparams reading
    // postingData(payumoney){
        
    //     return  this._http.post("https://secure.payu.in/_payment",payumoney )  
    //        .pipe( map((res) => res.json()));
    //  }
     //organisation Registration
     registerOrganization(payumoney){
        return  this._http.post("/getsetschool/registerOrganization",payumoney )  
           .pipe( map((res) => res.json()));
       }

       /*check Organization  **/
       
       checkOrganization(payumoney){
        return  this._http.post("/getsetschool/checkOrganization",payumoney )  
           .pipe( map((res) => res.json()));
       }
        /** Get Sponser Data */
        getSponserList(){
            return  this._http.get("/getsetschool/sponserList")  
               .pipe( map((res) => res.json()));
           }
}