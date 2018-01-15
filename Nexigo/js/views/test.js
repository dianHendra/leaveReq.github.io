xg('[data-name="content"]').widget({
	text: 'Just Test',
	rows: [{
		name: 'panel1',
		content:[
			'Just Info 01'
		],
	}, {
		name: 'panel2',
		content:[
			'Just Info 02'
		]
	}, {
		name: 'panel3',
		fields: [{
			name: 'field01',
			text: 'Field 01'
		}, {
			name: 'field02',
			text: 'Field 02'
		}]
	}],
	init: function () {
		$('[xg-field=panel2]').html('Just Test');
	}
});