import {Routes, RouterModule} from '@angular/router';
import { NgModule }             from '@angular/core';
import { BlogComponent }             from './component/blog/blog.component';
import { HomeComponent }             from './component/home/home.component';
const routes:Routes = [
    {path: 'blog', component: BlogComponent},
      {path: 'home', component: HomeComponent},
    {path: '**', redirectTo: '/home'}
]

export const routing = RouterModule.forRoot(routes);