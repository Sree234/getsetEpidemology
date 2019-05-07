import { NgModule,ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {UserComponent } from './user.component';
import { SentemailComponent } from './forgotpassword/sentemail/sentemail.component';
import { SenttextComponent } from './forgotpassword/senttext/senttext.component';
import {userrouting } from './user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http'; 

import {
    
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';  
import { QrscanComponent } from './qrscan/qrscan.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EmailotpComponent } from './forgotpassword/emailotp/emailotp.component';
import { TextotpComponent } from './forgotpassword/textotp/textotp.component';
import { ChangepasswordComponent } from './forgotpassword/changepassword/changepassword.component';
import { RegisterComponent } from './register/register.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { ServiceComponent } from './service/service.component';
import { PaymentsuccessComponent } from './service/paymentsuccess/paymentsuccess.component';
import { OrganizationregistrationComponent } from './service/organizationregistration/organizationregistration.component';
import { PayumoneyprocessComponent } from './service/payumoneyprocess/payumoneyprocess.component';
import { PaymentfailureComponent } from './service/paymentfailure/paymentfailure.component';
@NgModule({
  imports: [
    ApplicationModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,userrouting,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule, 
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,  
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule, 
  ],
  declarations: [
    UserComponent,LoginComponent, QrscanComponent, ForgotpasswordComponent,
    SentemailComponent, SenttextComponent,EmailotpComponent, TextotpComponent, ChangepasswordComponent, 
    RegisterComponent, UserregistrationComponent, ServiceComponent, PaymentsuccessComponent, OrganizationregistrationComponent, PayumoneyprocessComponent, PaymentfailureComponent,
  ]
})
export class UserModule { }
