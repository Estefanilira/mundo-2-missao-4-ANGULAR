// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroListaComponent } from './livro-lista/livro-lista.component';

const routes: Routes = [
    { path: 'lista', component: LivroListaComponent },
    { path: '', redirectTo: '/lista', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }