import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';


const commonComponents = [AppComponent];
const commonModules = [ComponentsModule];

@NgModule({
  declarations: [...commonComponents],
  imports: [
    BrowserModule,
    NgbModule,
    ...commonModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
