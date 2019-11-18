import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { EshiperSharedModule } from 'app/shared/shared.module';
import { EshiperCoreModule } from 'app/core/core.module';
import { EshiperAppRoutingModule } from './app-routing.module';
import { EshiperHomeModule } from './home/home.module';
import { EshiperEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    EshiperSharedModule,
    EshiperCoreModule,
    EshiperHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EshiperEntityModule,
    EshiperAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class EshiperAppModule {}
