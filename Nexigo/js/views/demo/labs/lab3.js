xg.widget({
	// text: 'Login Vendor',
	clas: 'login',
	views: [{
		text: 'Login Vendor',
		cols: 6,
		offset: 3,
		clasContent: 'login',
		fields: [
			{ text: 'User Name' },
			{ text: 'Password', type: 'password' },
		]
	}, {
		cols: 6,
		offset: 3,
		fields: [
			{ type: 'button', text: 'Login', offset: 8, stretch: true, cols: 4, action: 'loginVendor' },
			{ type: 'button', text: 'Change password', offset: 7, stretch: true, cols: 5 },
			{ 
				type: 'fieldRow',
				fields: [
					{ type: 'button', text: 'Forget your password?', cols: 6, stretch: true },
					{ type: 'button', text: 'Forget your password?', cols: 6, stretch: true },
				]
			}
		]
	}],
	methods: {
		loginVendor: function () {
			window.location.href = 'vendor.html';
		}
	}
})