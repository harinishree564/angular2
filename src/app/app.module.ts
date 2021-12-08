import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HighlightDirective } from './highlight.directive';
import { NeeddataService } from './needdata.service';
/*import { LoginComponent } from './users/login/login.component';*/
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [NeeddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
