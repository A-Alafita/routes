import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { AboutComponent } from './components/about/about.component'; 
import { VisualizarClienteComponent } from './visualizar-cliente/visualizar-cliente.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'cliente', component: VisualizarClienteComponent }, 
  { path: '', pathMatch: 'full', redirectTo: 'home' }, 
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
