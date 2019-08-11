// https://stackblitz.com/edit/angular-labs-copy-clipboard?file=src%2Fapp%2Fapp.module.ts

import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
	selector: 'app-examples',
	templateUrl: './examples.component.html',
	styles: []
})

export class ExamplesComponent implements OnInit {
	copyFontAwesome = '<fa-icon [icon]="[\'fab\', \'angular\']"></fa-icon>';

	constructor(private _snackBar: MatSnackBar) { }

	public ngOnInit() { }


	openSnackBar() {
		// https://stackblitz.com/edit/angular-snackbar?file=app%2Fapp.component.ts
		// this._snackBar.open('Copied!', true ? 'Retry' : undefined, config);
		this._snackBar.open('Copied!', null, {
			duration: 1500,
			verticalPosition: 'top',
			horizontalPosition: 'right',
			panelClass: 'copied'
		});
	}
}