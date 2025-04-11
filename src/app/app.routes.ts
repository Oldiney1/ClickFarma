import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'carrinho', component: CarrinhoComponent}
];
    