import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch:'full',   },
  { path: 'user', loadChildren:'src/app/user/user.module#UserModule'  },
  
]


export const routing = RouterModule.forRoot(routes,{ useHash: true });  