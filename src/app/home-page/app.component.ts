import { Component} from '@angular/core';
import {
	RouterLink,
	RouterOutlet,
	NavigationEnd,
	Router,
} from '@angular/router';
import { RecordButtonComponent } from '../components/record-button/record-button.component';
import { HeaderComponent } from '../components/header/header.component';
import { OptionsComponent } from '../components/options/options.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		RouterLink,
		RecordButtonComponent,
		HeaderComponent,
		OptionsComponent
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	showLandingPage: boolean = true;
	constructor(private router: Router) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.showLandingPage = event.url !== '/';
			}
		});
	}
}
