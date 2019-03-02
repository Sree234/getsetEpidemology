import { Component, OnInit,ChangeDetectorRef,ViewChild,AfterViewInit } from '@angular/core';
import {MediaMatcher,} from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http,Response} from '@angular/http';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { LoginComponent} from './login/login.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers :[DataService]
})
export class UserComponent implements OnInit{
  loginsetupkey:boolean = false;
  regsetupkey:boolean = true;
  mobileQuery: MediaQueryList;
  public href: string = "";
  message:string;
  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;
  constructor(media: MediaMatcher,changeDetectorRef: ChangeDetectorRef,private router: Router,
  private datService:DataService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      
      
  }
  ngOnInit() {
    this.datService.currentMessage.subscribe(message => this.message = message)
    
    // this.href = this.router.url;
    //     console.log(this.router.url);
    //     if(this.router.url =="/user/register"){
    //       this.regsetupkey = false;
    //       this.loginsetupkey = true;
    //     }else if( this.router.url =="/user/login"){
    //       this.regsetupkey = true;
    //       this.loginsetupkey = false;
    //     }
  }
  
  loginsetup(){
    this.regsetupkey = false;
    this.loginsetupkey = true;
  }
  loginsetupback(){
    this.regsetupkey = true;
    this.loginsetupkey = false;
  }
}
