import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadenosotrosComponent } from './pages/acercadenosotros/acercadenosotros.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acerca', component: AcercadenosotrosComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
