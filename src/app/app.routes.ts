import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { LogrosComponent } from './components/logros/logros.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component:  ContactoComponent},
    { path: 'lenguajes', component: LenguajesComponent },
    { path: 'logros', component: LogrosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true, relativeLinkResolution: 'legacy' });