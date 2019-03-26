import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

const firebaseConfig = {
  apiKey: 'AIzaSyDr4SJ8vrJbTxPoqQxSRmfeH6HdembJA-Q',
  authDomain: 'probacrud-25a75.firebaseapp.com',
  databaseURL: 'https://probacrud-25a75.firebaseio.com',
  projectId: 'probacrud-25a75',
  storageBucket: 'probacrud-25a75.appspot.com',
  messagingSenderId: '827990250701'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
