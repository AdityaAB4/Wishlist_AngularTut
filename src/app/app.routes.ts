import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {'path': '', component: WishComponent},
    {'path': 'contact', component: ContactComponent},
    {'path': '**', component: PageNotFoundComponent},
];
