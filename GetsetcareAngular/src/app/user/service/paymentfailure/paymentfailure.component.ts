import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-paymentfailure',
  templateUrl: './paymentfailure.component.html',
  styleUrls: ['./paymentfailure.component.css']
})
export class PaymentfailureComponent implements OnInit {

  constructor(private _router :ActivatedRoute) { }

  ngOnInit() {

    this._router.queryParams.subscribe(params => {
      var transactionState =  params['transactionState'] || 'None';
      console.log("transactionState");console.log(transactionState);
   });
  }

}
