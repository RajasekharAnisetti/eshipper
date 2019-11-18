import { NgModule } from '@angular/core';
import { EshiperSharedLibsModule } from './shared-libs.module';
import { JhiAlertComponent } from './alert/alert.component';
import { JhiAlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [EshiperSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent, HasAnyAuthorityDirective],
  exports: [EshiperSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent, HasAnyAuthorityDirective]
})
export class EshiperSharedModule {}
