import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedmoduleComponent } from './sharedmodule/sharedmodule.component';
import { RouterModule } from '@angular/router'; 
import { HttpModule,} from '@angular/http';
import { routing} from './app-routing/app.routing';
import {UserModule } from './user/user.module';
import {GetSetService} from './services/getset.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    AppComponent,    
    SharedmoduleComponent, 
  ], 
  imports: [  
    BrowserModule,routing,UserModule,HttpModule,
    BrowserAnimationsModule,FormsModule, ReactiveFormsModule ,
    RouterModule.forRoot([]),  
  ],
  providers: [GetSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 