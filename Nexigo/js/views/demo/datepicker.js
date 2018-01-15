nexigo.widget({
    text: 'Datepicker',
    toolbars: [{
        text: 'Populate',
        action: 'populate'
    }, {
        text: 'Serialize',
        action: 'serialize'
    }],
    views: [{
        fields: [{
            type: 'fieldRow',
            fields: [{
                type: 'picker',
                cols: 3,
                name: 'basicPicker',
                text: 'Basic Picker',
                required: true,
            }, {
                type: 'picker',
                cols: 3,
                min: moment().subtract(3, 'days'),
                max: moment().add(1, 'weeks'),
                name: 'minMaxPicker',
                text: 'Picker with Min & Max Value'
            }, {
                type: 'picker',
                cols: 3,
                placeholder: 'Pick a date...',
                name: 'minMaxRelativePicker',
                text: 'Placeholder'
            }, {
                type: 'picker',
                cols: 3,
                min: moment(),
                name: 'minMaxRelative2Picker',
                text: 'Picker with Min & Max Value (Combined)'
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                type: 'picker',
                cols: 3,
                name: 'formatPicker',
                text: 'Date Format',
                format: 'DD MMMM YYYY'
            }, {
                type: 'picker',
                cols: 3,
                name: 'eventPicker',
                text: 'Events',
                onChange: function(val) {
                    $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + 'Changed: ' + val + '\n');
                },
                onFocus: function() {
                    $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + 'Focus\n');
                },
                onBlur: function() {
                    $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + 'Blur\n');
                }
            }, {
                type: 'picker',
                cols: 3,
                format: 'MMMM',
                name: 'monthPicker',
                text: 'Month Picker'
            }, {
                type: 'picker',
                cols: 3,
                format: 'YYYY',
                name: 'yearPicker',
                text: 'Year Picker'
            }, ]
        }, {
            type: 'picker',
            name: 'dateTimePicker',
            text: 'Date Time Picker',
            cols: 6,
            sideBySide: true,
            disabledTimeIntervals: [moment({h:7}), moment({h:17})],
            format: 'DD-MM-YYYY HH:mm'
        }, {
            type: 'textarea',
            readonly: true,
            name: 'TextLog'
        }]
    }],
    functions: {
        populate: function() {
            var model = {
                basicPicker: new Date('2015-07-22'),
                // minMaxPicker: new Date('2015-07-22'),
                // minMaxPicker: new Date(),
                minMaxPicker: moment().subtract(3, 'days'),
                minMaxRelativePicker: new Date('2015-07-22'),
                minMaxRelative2Picker: new Date('2015-07-22'),
                eventPicker: new Date('2015-07-22'),
                formatPicker: new Date('2015-07-22'),
                monthPicker: new Date('2015-07-22'),
                yearPicker: new Date('2015-07-22'),
            };
            xg.populate(model);
            xg.field.show('Status');
        },
        serialize: function() {
            var data = xg.serialize();
            var text = '';
            var style = 'height:200px;padding:2px;font-size:12px;text-align:left;border:1px solid #ccc;margin-top:-12px';
            for (key in data) {
                text += key + ' : ' + data[key] + ' (' + typeof(data[key]) + ')\n';
            }
            xg.message({
                text: '<pre style="' + style + '">' + text + '</pre>',
                width: 700,
                height: 260
            });
        }
    }
})