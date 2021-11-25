import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
