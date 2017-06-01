// angular
import { Routes } from '@angular/router';

// libs
import { MetaGuard } from '@ngx-meta/core';

// components
import { ChangeLanguageComponent } from './change-language.component';
import { HomepageComponent } from "./homepage/homepage.component";
import { ContactpageComponent } from "./contactpage/contactpage.component";
import { CategoryShowComponent } from "./category/category-show.component";
import { SearchComponent } from "./search/search.component";

export const routes: Routes = [
  {
    path: 'change-language/:languageCode',
    component: ChangeLanguageComponent
  },
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'category/:id', component: CategoryShowComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
