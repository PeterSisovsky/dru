import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { CueboxComponent } from './cuebox/cuebox.component';
import { GithubComponent } from './github/github.component';
import { RightnavComponent } from './rightnav/rightnav.component';
import { ComponentMenuComponent } from './component-menu/component-menu.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CueboxComponent,
    GithubComponent,
    RightnavComponent,
    ComponentMenuComponent,
    LeftnavComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
