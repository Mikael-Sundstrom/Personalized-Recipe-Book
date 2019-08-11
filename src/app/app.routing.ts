import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Error404Component } from './components/error404/error404.component';
import { AboutComponent } from './components/about/about.component';
import { ExamplesComponent } from './components/examples/examples.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'about',
		pathMatch: 'full'
	},
	{
		path: 'about',
		children: [{
			path: '**',
			children: [],
			component: Error404Component
		}],
		component: AboutComponent
	},
	{
		path: 'examples',
		children: [{
			path: '**',
			children: [],
			component: Error404Component
		}],
		component: ExamplesComponent
	},
	{
		path: '**',
		children: [],
		component: Error404Component
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
