import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { BikesComponent } from './bikes/bikes.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegisrationComponent } from './employee-regisration/employee-regisration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GmailComponent } from './gmail/gmail.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostsComponent } from './posts/posts.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarsComponent } from './stars/stars.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VeiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],   children:[
    {path:'calculator',component:CalculatorComponent},
    {path:'interpolation',component:InterpolationComponent},
    {path:'event-binding',component:EventBindingComponent},
    {path:'two-way-binding',component:TwoWayBindingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'square',component:SquareComponent},
    {path:'power',component:PowerComponent},
    {path:'event-registration',component:EventRegistrationComponent,},
    {path:'employee-registration',component:EmployeeRegisrationComponent,canDeactivate:[NotifyGuard]},
    {path:'cart',component:CartComponent,canDeactivate:[NotifyGuard]},
    {path:'pipes',component:PipesComponent},
    {path:'cars',component:CarsComponent},
    {path:'stars',component:StarsComponent},
    {path:'gpay',component:GpayComponent},
    {path:'bank',component:BankComponent},
    {path:'vehicles',component:VeiclesComponent},
    {path:'posts',component:PostsComponent},
    {path:'gmail',component:GmailComponent},
    {path:'bankdetails/:id',component:BankDetailsComponent},
    {path:'bikes',component:BikesComponent},
    {path:'create-account',component:CreateAccountComponent,canDeactivate:[NotifyGuard]},
    {path:'create-user',component:CreateUserComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
