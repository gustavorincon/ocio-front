import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';


export const routes: Routes = [
    { path: '', redirectTo: '/tienda', pathMatch: 'full' },
    {
      path: 'tienda',
      children: [
        {
          path: '',
          component: BodyComponent,
        }
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
  export class AppRoutingModule {}