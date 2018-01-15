nexigo.widget({
    text: 'Multi Select',
    views: [{
        fields: [{
            name: 'checkbox1',
            text: 'Select Media (1)',
            type: 'checkbox',
            data: [{
                name: 'media1',
                text: 'Newspapper',
            }, {
                name: 'media2',
                text: 'Radio',
            }, {
                name: 'media3',
                text: 'TV',
            }]
        }, {
            text: 'Select Media (2)',
            type: 'multiselect',
            data: [{
                name: 'media1',
                text: 'Newspapper',
            }, {
                name: 'media2',
                text: 'Radio',
            }, {
                name: 'media3',
                text: 'TV',
            }, {
                name: 'media4',
                text: 'Internet',
            }, {
                name: 'media5',
                text: 'Email',
            }, {
                name: 'media6',
                text: 'Social Media',
            }],
            cols: 6
        }]
    }],
})