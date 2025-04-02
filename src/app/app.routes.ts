import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'carrinho', component: CarrinhoComponent}
];
    