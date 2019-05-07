
import { RouterModule, Routes } from '@angular/router';
import {UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { QrscanComponent} from './qrscan/qrscan.component';
import {ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {ChangepasswordComponent } from './forgotpassword/changepassword/changepassword.component';
import { RegisterComponent} from './register/register.component';
import {UserregistrationComponent } from './userregistration/userregistration.component';
import {ServiceComponent } from './service/service.component';
import {PaymentsuccessComponent } from './service/paymentsuccess/paymentsuccess.component';
import { OrganizationregistrationComponent} from './service/organizationregistration/organizationregistration.component';
import { PayumoneyprocessComponent} from './service/payumoneyprocess/payumoneyprocess.component';
import {PaymentfailureComponent } from './service/paymentfailure/paymentfailure.component';
const USER_ROUTES:Routes = [
  { path: 'user', component: UserComponent, children:[
        
        { path: '', redirectTo: "login", pathMatch : "full" , },
        { path: 'login', component:  LoginComponent, },
        { path: 'scanqr', component:  QrscanComponent, },
        { path: 'forgotpassword', component:  ForgotpasswordComponent, },
        { path: 'changepassword', component:  ChangepasswordComponent, },
        { path: 'register', component:  RegisterComponent, },
        { path: 'userregistration', component:  UserregistrationComponent, },
        { path: 'service', component:  ServiceComponent, },
        { path: 'makepayment', component:  PayumoneyprocessComponent, },
        { path: 'paymentsuccess', component:  PaymentsuccessComponent, },
        { path: 'orgregistration', component:  OrganizationregistrationComponent, },
        { path: 'paymentfailure', component:  PaymentfailureComponent, },


        
    ] 
    
  },
    

];


export const userrouting = RouterModule.forChild(USER_ROUTES);