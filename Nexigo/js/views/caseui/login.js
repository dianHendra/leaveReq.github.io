xg.widget({
	text: 'Login Form',
	rows: [{
		fields: [{
			name: 'UserName',
			text: 'User Name',
			required: true
		}, {
			name: 'Password',
			text: 'Password',
			required: true,
			type: 'password'
		}]
	}, {
		fields: [{
			type: 'buttons',
			buttons: [{
				text: 'Login',
				icon: 'fa-sign-in',
				action: 'login'
			}]
		}]
	}],
	login: function () {
		console.log('aleft');
	}
});