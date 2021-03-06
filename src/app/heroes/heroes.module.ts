import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http} from '@angular/http';
import {TranslateLoader, TranslateModule} from 'ng2-translate';
import {TranslateLoaderFactory} from '../app.translate.factory';

import {HeroRoutingModule} from './heroes-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {HeroListComponent, RemoveHeroDialogComponent} from './hero-list/hero-list.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';

import {HeroService} from './shared/hero.service';
import {MaterialModule} from '../core/material.module';
import {HeroTopComponent} from './hero-top/hero-top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateLoaderFactory,
      deps: [Http]
    }),
    SharedModule,
    HeroRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    HeroListComponent,
    HeroSearchComponent,
    HeroTopComponent,
    RemoveHeroDialogComponent
  ],
  entryComponents: [
    RemoveHeroDialogComponent
  ],
  providers: [
    HeroService
  ],
  exports: [
    HeroSearchComponent
  ]
})

export class HeroesModule {
}
