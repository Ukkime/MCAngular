import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  declarations: [NavbarComponent, HomeComponent, FooterComponent, TestComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [NavbarComponent, FooterComponent]
})
export class CoreModule {}
