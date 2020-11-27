import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';

export const SHOPPING_CART_ROUTES: Routes = [
    {
      path: '',
      component: ShoppingCartComponent,
      children: [
         {
          path: '**',
          redirectTo: '',
        },
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(SHOPPING_CART_ROUTES)],
    exports: [RouterModule],
    providers: [],
  })
  export class ShoppingCartRoutingModule {}