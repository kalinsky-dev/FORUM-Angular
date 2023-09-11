import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../core/guards/auth.activate';


const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    // canActivate: [AuthActivate],
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    // canActivate: [AuthActivate],
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    // canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
