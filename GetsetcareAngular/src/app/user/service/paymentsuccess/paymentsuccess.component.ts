import { Component, OnInit,ChangeDetectorRef,EventEmitter } from '@angular/core';
import {MediaMatcher,} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent implements OnInit {
  yearNo:number; 
  mobileQuery: MediaQueryList;  
  domainHosting: any;
  hostingAmount:any;
  date = new Date();
  cdate: any;
  dduration:any;
  private _mobileQueryListener: () => void;
  constructor(private router :Router,private _router :ActivatedRoute,media: MediaMatcher,changeDetectorRef: ChangeDetectorRef) {
    this.yearNo = 1;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() {
    console.log(this.date.toLocaleString());
    this.cdate =this.date.toDateString();
    this.domainHosting = localStorage.getItem('hostingType');
    this.dduration =localStorage.getItem('hostingDuration');
    this.hostingAmount =localStorage.getItem('hostingAmonunt');
    this._router.queryParams.subscribe(params => {
      var transactionState =  params['transactionState'] || 'None';
      console.log("transactionState");console.log(transactionState);
   });
  }
  goToRegistration(){
    console.log("COMing Here");
    this.router.navigate(['/user/orgregistration']);
  }
 

}
