import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('../app/pages/home/home').then(m => m.Home) },
    { path: 'about', loadComponent: () => import('../app/pages/about/about').then(m => m.About) },
    { path: 'contact', loadComponent: () => import('../app/pages/contact/contact').then(m => m.Contact) },
    { path: 'ui', loadComponent: () => import('../app/app/ui/ui').then(m => m.Ui) },
    { path: '**', redirectTo: '' }
];
