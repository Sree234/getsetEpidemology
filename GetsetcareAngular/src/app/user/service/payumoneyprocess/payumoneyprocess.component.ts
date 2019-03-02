import { Component, OnInit,ApplicationRef,ElementRef, ViewChild, } from '@angular/core';
import { PaymentModel} from '../../../models/payuMoneyModel';
import { HttpClient } from '@angular/common/http';
import { GetSetService} from '../../../services/getset.service';
import{ Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { paymodel} from '../../../models/payModel';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-payumoneyprocess',
  templateUrl: './payumoneyprocess.component.html',
  styleUrls: ['./payumoneyprocess.component.css'],
  providers:[GetSetService,FormBuilder,HttpClient,]
})
export class PayumoneyprocessComponent implements OnInit {
  
  public payuform: any = {};
  disablePaymentButton: boolean = true;
  paymentUrl: string;
  model: paymodel;
  RequestData:any={}
  constructor(private http: HttpClient,private fb:FormBuilder,private paymentService:GetSetService,private appRef: ApplicationRef,private _router :ActivatedRoute) {
    //this.paymentUrl="https://secure.payu.in/_payment";
   }
   
  confirmPayment() {
    const paymentPayload = {
     
      firstname: "srikanth",
      phone: "9032838159",
      productinfo: "yr",
      amount: "1",
      udf1 : "kumar",
      udf2 : "kumar",
     udf3 : "kumar",
     udf4 : "kumar",
     udf5 : "kumar",
     udf6 : "kumar",
     udf7 : "kumar",
     udf8 : "kumar",
     udf9 : "kumar",
     udf10 : "kumar",
     email:this.payuform.email,
    }

  
    
    this.disablePaymentButton = false;
    console.log(paymentPayload);


    
    this.paymentService.payUMoneyProcess(paymentPayload).subscribe(data =>
      {      
       console.log("paymentprocessdetails");
       console.log(data);
      
       this.paymentUrl="https://secure.payu.in/_payment";
      //this.payuform.txnid=data.txnid;
     
        this.payuform.key=data.key.replace( /\s/g,"");
        this.payuform.surl=data.surl.replace( /\s/g,"");
        this.payuform.furl=data.furl.replace( /\s/g,"");
        this.payuform.salt="prKUhO2xDG";
        this.payuform.hash=data.hash.replace( /\s/g,"");
        this.payuform.email=data.email.replace( /\s/g,"");
        this.payuform.firstname=data.firstname.replace( /\s/g,"");
        this.payuform.productinfo=data.productinfo.replace( /\s/g,"");
        this.payuform.service_provider="payu_paisa";
        this.payuform.txnid=data.txnid.replace( /\s/g,"");
        this.payuform.amount=data.amount.replace( /\s/g,"");
        this.payuform.phone = data.phone;
        this.payuform.lastname = "kumar";
        this.payuform.hashString = data.hashString;        
        this.payuform.curl = "kumar";
        this.payuform.address1 = "kumar";
        this.payuform.address2 = "kumar";
        this.payuform.city = "kumar";
        this.payuform.state = "kumar";
        this.payuform.country = "kumar";
        this.payuform.zipcode = "kumar";
        this.payuform.udf1 = "kumar";
        this.payuform.udf2 = "kumar";
        this.payuform.udf3 = "kumar";
        this.payuform.udf4 = "kumar";
        this.payuform.udf5 = "kumar";
        this.payuform.udf6 = "kumar";
        this.payuform.udf7 = "kumar";
        this.payuform.udf8 = "kumar";
        this.payuform.udf9 = "kumar";
        this.payuform.udf10 = "kumar";
        this.payuform.pg = "kumar";
        this.payuform.amount=data.amount;
    
        this.appRef.tick(); // to immediately force html value fill
       console.log(this.payuform);
       console.log(this.payuform.key);

      // this.paymentService.postingData(this.payuform).subscribe(data =>{

      //   console.log("PRocessing Data");
      //   console.log(data);
      // });



      this._router.queryParams.subscribe(params => {
        var transactionState =  params['transactionState'] || 'None';
        console.log("transactionState");console.log(params);
     });




      
    //    this.RequestData = {
    //     key: data.key,
    //     txnid: data.txnid,
    //     hash: data.hash,
    //     amount: data.amount,
    //     firstname: data.firstname,
    //     email: data.email,
    //     phone: data.phone,
    //     productinfo: data.productinfo,
    //     surl :data.surl,
    //     furl: data.furl,
    //     mode:'dropout'// non-mandatory for Customized Response Handling
    // }
       
    },err => {
      console.log('getProcessing Error')
  },
     () => {
      
      document.getElementById('payuform')
      if(this.payuform.amount == "1"){
        let form: HTMLFormElement = <HTMLFormElement>document.getElementById('payuform');
      console.log("Submitting");
      console.log(this.payuform);
      
console.log(form);
      setTimeout(_ => form.submit(),1500);
      
      }
              //     console.log("RequestData") ;
              //    console.log(this.RequestData) ;
              //    var Handler = {

              //     responseHandler: function(BOLT){

              //       // your payment response Code goes here, BOLT is the response object

              //     },
              //     catchException: function(BOLT){

              //       // the code you use to handle the integration errors goes here

              //     }
              // }
              // bolt.launch( data , handler );
     }

    
  );
  

  
    
  }
   
  
  ngOnInit() {
    
   console.log(localStorage.getItem('hostingType')) ;
  // localStorage.sgetItem('registringEmail');
     
  }

  submitfunction(){
    console.log("submitting"); console.log(this.payuform);
  }
}