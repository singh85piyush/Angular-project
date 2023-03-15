import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { StudentComponentComponent } from './student-component/student-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FirstComponentComponent,
    StudentComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
}
