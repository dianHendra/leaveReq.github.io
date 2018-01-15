nexigo.widget({
    text: 'Month Picker',
    views: [{
        fields: [{
            type: 'fieldRow',
            fields: [{
                type: 'picker',
                cols: 3,
                display: 'month',
                name: 'basicPicker',
                text: 'Basic Picker',
                required: true
            }]
        }]
    }]
})
