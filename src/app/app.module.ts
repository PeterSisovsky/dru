import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { CueboxComponent } from './cuebox/cuebox.component';
import { GithubComponent } from './github/github.component';
import { RightnavComponent } from './rightnav/rightnav.component';
import { ComponentMenuComponent } from './component-menu/component-menu.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { MenuComponent } from './menu/menu.component';
import { EpicFormComponent } from './epic-form/epic-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameComponent } from './game/game.component';



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
    EpicFormComponent,
    NotFoundComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '', component: ContentComponent
      },
      {
        path: 'Dashboard', component: ContentComponent
      },
      {
        path: 'Form', component: EpicFormComponent
      },
      {
        path: 'Game', component: GameComponent
      },
      {
        path: '**', component: NotFoundComponent
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
