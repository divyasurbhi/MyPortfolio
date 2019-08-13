import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { PortfolioComponent } from  './portfolio/portfolio.component';
import { AboutComponent } from  './about/about.component';
import { ContactComponent } from  './contact/contact.component';

=======
import { PortfolioComponent } from  './header/portfolio/portfolio.component';
import { AboutComponent } from  './about/about.component';
import { ContactComponent } from  './contact/contact.component';
import {HeaderComponent} from './header/header.component'
>>>>>>> f98963d5c258e596db5714e14cbc1a90bdd19e66


const routes: Routes = [
  {
    path:  'portfolio',
    component:  PortfolioComponent
    },
 
    {
    path:  'about',
    component:  AboutComponent
    },
    {
    path:  'contact',
    component:  ContactComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
