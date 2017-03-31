import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'user-registration',
	templateUrl: 'templates/registration.html'
})
export class UserRegistrationComponent {
	userName = '';
	socket = null;

	constructor(
		private _router: Router) {}

	ngOnInit() {
		this.socket = io('http://localhost:8000');
	}

	login () {
		if (this.userName !== null) {
			sessionStorage.setItem("userName", this.userName);
			this._router.navigate(['Chat']);
			this.socket.emit('newUser', this.userName);
		}
	}

	keypressHandler(event) {
		if (event.keyCode === 13) {
			this.login();
		}
	}
}