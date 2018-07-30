import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'teacher',      component: TeacherComponent },
  { path: 'parent',      component: ParentComponent },
  {
    path: 'student',
    component: StudentComponent
  },
  // { path: '',
  //   redirectTo: '/user',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: Component },
  { path: 'user', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    UserComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
