// Core Items
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';

// Angular Firebase
// https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Material
// https://material.angular.io
import { MaterialModule } from './shared/material.module';

// Font Awesome
// https://github.com/FortAwesome/angular-fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';

// Extra functions
import { ClipboardModule } from './shared/clipboard.module';

// Components
import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { AboutComponent } from './components/about/about.component';
import { ExamplesComponent } from './components/examples/examples.component';


// Create Font Awesome library
library.add(fab, fal, far, fas);

@NgModule({
	declarations: [
		AppComponent,
		Error404Component,
		AboutComponent,
		ExamplesComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule,
		FontAwesomeModule,
		AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule, // imports firebase/storage only needed for storage features
		ClipboardModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'se-SV' } // Set default time
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
