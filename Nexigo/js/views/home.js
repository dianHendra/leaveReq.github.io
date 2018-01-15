nexigo.widget('[data-name="content"]', {
	text: 'Home',
	rows: [{
		text: 'Demo Simple Text',
		fields: [{
			text: 'Text input'
		}, {
			text: 'Input with autocomplete',
			display: 'autocomplete',
			datakey: 'list1',
			note: ' works in Chrome, Firefox, Opera and IE10.',
			data: db.list_demo,
		}]
	}, {
		text: 'Demo Collection',
		fields: [{
			text: 'Input name (auto complete)',
			data: db.list_demo,
			display: 'autocomplete',
			datakey: 'list1',
		},{
			row: [{
				text: 'Gender',
				type: 'select',
				data: [{
					value: 'M',
					text: 'Male'
				}, {
					value: 'F',
					text: 'Female'
				}],
				cols: 6
			}, {
				text: 'Status',
				type: 'select',
				data: [{
					value: 'S',
					text: 'Single'
				}, {
					value: 'M',
					text: 'Married'
				}],
				cols: 6
			}]
		}]
	}],
	init: function() {
		// console.log('init call');
	}
})