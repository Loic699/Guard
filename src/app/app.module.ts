import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { UserService } from './user.service';
import { IsconnectedGuard } from './core/isconnected.guard';


const routes: Routes = [
  { path: 'secured', component: AdminpageComponent, canActivate: [AuthGuard] },
  { path: 'dashboardpage', component: DashboardpageComponent, canActivate: [IsconnectedGuard] },
  { path: 'home', component: HomepageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardpageComponent,
    AdminpageComponent,
    
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    
  ],
  exports:[RouterModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
