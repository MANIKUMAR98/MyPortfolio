import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MaterialElevationDirective } from './material-elevation.directive';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AppServiceService } from './services/app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SkillsComponent,
    WorkExperienceComponent,
    MaterialElevationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
