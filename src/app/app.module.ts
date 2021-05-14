import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyB_p5dw9bHnUfmDzbKJBZ17Ny9iSYIfNW4",
  authDomain: "assignment-af776.firebaseapp.com",
  projectId: "assignment-af776",
  storageBucket: "assignment-af776.appspot.com",
  messagingSenderId: "713279804309",
  appId: "1:713279804309:web:200dd9cf3a000513c59c9c",
  measurementId: "G-8XTPQY36Z6"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
