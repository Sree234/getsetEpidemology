import { Component, OnInit,ChangeDetectorRef,Output,EventEmitter  } from '@angular/core';
import {MediaMatcher,} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GetSetService } from 'src/app/services/getset.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {

  chooseProductForm:FormGroup;
  hostingcost: boolean = false;
  chosenProduct: boolean =false;
  managementService: boolean = true;
  domainhostingtype: any;
  duratonSelected:boolean =false
  imgNo:any;
  amount:any;
  mobileQuery: MediaQueryList;  
  private _mobileQueryListener: () => void;
  constructor(private router: Router,private fb:FormBuilder,  private orgservice :GetSetService,
    media: MediaMatcher,changeDetectorRef: ChangeDetectorRef, ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.amount= 0.00;
    this.chooseProductForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
     
      'sponser' : [null,  Validators.compose([Validators.required])],
      'accessCode': [null,  Validators.compose([Validators.required])],
     
    }); 
   }
  subDomain(){
    this.managementService = false;    this.domainhostingtype ="Get Set Care Sub Domain"; localStorage.setItem('hostingType', this.domainhostingtype); this.hostingcost = true;
    this.imgNo = 1;
  }
  dedicatedDomain(){
    this.managementService = false;  this.domainhostingtype ="Independent Domain with Dedicated Hosting"; localStorage.setItem('hostingType', this.domainhostingtype); this.hostingcost = true;
    this.imgNo = 2;
  }
  independentbDomain(){
    this.managementService = false; this.domainhostingtype ="Independent Domain with Self Hosting"; localStorage.setItem('hostingType', this.domainhostingtype); this.hostingcost = true;
    this.imgNo = 3;
  }
  choosenProduct(){
    this.chosenProduct = false;
    this.hostingcost = true;
  }
  chooseProduct(val){
    console.log(val);  
    
    this.router.navigate(['/user/orgregistration']);
  }
  noSponsers(){
    this.chosenProduct = false;
    this.hostingcost = true;
  }
  cancelPayment(){
    this.managementService = true;    this.hostingcost = false; this.domainhostingtype =" ";
  }
  durationmethod(duration){
    console.log("duration.value");
    console.log(duration.value)
    this.amount =10000;
    this.amount = this.amount*duration.value;
    localStorage.setItem('hostingAmonunt', this.amount);
    localStorage.setItem('hostingDuration',duration.value)
    this.duratonSelected = true;

  }
  makePayment(){
    localStorage.setItem('hostingType', this.domainhostingtype);
    this.router.navigate(['/user/orgregistration']);
  }
  ngOnInit() {
    this.orgservice.getSponserList().subscribe( data =>{

      this.ddropduwn.push(data);
        }
      
    )
  }
  ddropduwn=[
    {'key':1,'value':1},
    {'key':2,'value':2},
    {'key':3,'value':3},
    {'key':4,'value':4},
  ]
   

  validation_messages = {
    
     'sponser': [
       { type: 'required', message: 'Sponser is required' }
     ],
     'accessCode':[
       { type: 'required', message: 'AccessdCode is required' }
     
     ]
    
     }

}
