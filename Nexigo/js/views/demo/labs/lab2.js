xg.widget({
	views: [
		{
			name: 'panel1',
			text: 'Contact Form',
			inline: true,
			fields: [
				{ 
					type: 'fieldRow',
					fields: [
						{ name: 'FirstName', text: 'First Name', cols: 6 },
						{ name: 'LastName', text: 'Last Name', cols: 6 },
					]
				},
				{ name: 'BirthDate', text: 'Birth Date', type: 'picker', cols: 3, format: 'DD-MMM-YYYY' },
				{ name: 'Summary', text: 'Summary', type: 'textarea' },
				{
					type: 'buttons',
					buttons: [
						{ name: 'save', text: 'Save', icon: 'fa-save', cssClass: 'xg-btn-info' },
						{ name: 'undo', text: 'Cancel', icon: 'fa-undo', cssClass: 'xg-btn-danger' },					
					]
				}
			]
		}
	]	
})