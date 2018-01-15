var data = [{
    value: 'media1',
    text: 'Newspapper',
}, {
    value: 'media2',
    text: 'Radio',
}, {
    value: 'media3',
    text: 'TV',
}, {
    value: 'media4',
    text: 'Internet',
}, {
    value: 'media5',
    text: 'Email',
}, {
    value: 'media6',
    text: 'Social Media',
}];
var dataWithDisabledItem = [{
    value: 'media1',
    text: 'Newspapper',
}, {
    value: 'media2',
    text: 'Radio',
}, {
    value: 'media3',
    text: 'TV',
    disabled: true
}, {
    value: 'media4',
    text: 'Internet',
}, {
    value: 'media5',
    text: 'Email',
    disabled: true
}, {
    value: 'media6',
    text: 'Social Media',
}];
var longData = [{
    value: 'value1',
    text: 'Dummy Text 1'
}, {
    value: 'value2',
    text: 'Dummy Text 2'
}, {
    value: 'value3',
    text: 'Dummy Text 3'
}, {
    value: 'value4',
    text: 'Dummy Text 4'
}, {
    value: 'value5',
    text: 'Dummy Text 5'
}, {
    value: 'value6',
    text: 'Dummy Text 6'
}, {
    value: 'value7',
    text: 'Dummy Text 7'
}, {
    value: 'value8',
    text: 'Dummy Text 8'
}, {
    value: 'value9',
    text: 'Dummy Text 9'
}, {
    value: 'value10',
    text: 'Dummy Text 10'
}, {
    value: 'value11',
    text: 'Dummy Text 11'
}, {
    value: 'value12',
    text: 'Dummy Text 12'
}, {
    value: 'value13',
    text: 'Dummy Text 13'
}, {
    value: 'value14',
    text: 'Dummy Text 14'
}, {
    value: 'value15',
    text: 'Dummy Text 15'
}, {
    value: 'value16',
    text: 'Dummy Text 16'
}, {
    value: 'value17',
    text: 'Dummy Text 17'
}, {
    value: 'value18',
    text: 'Dummy Text 18'
}, {
    value: 'value19',
    text: 'Dummy Text 19'
}, {
    value: 'value20',
    text: 'Dummy Text 20'
}, {
    value: 'value21',
    text: 'Dummy Text 21'
}, {
    value: 'value22',
    text: 'Dummy Text 22'
}, {
    value: 'value23',
    text: 'Dummy Text 23'
}, {
    value: 'value24',
    text: 'Dummy Text 24'
}, {
    value: 'value25',
    text: 'Dummy Text 25'
}, {
    value: 'value26',
    text: 'Dummy Text 26'
}, {
    value: 'value27',
    text: 'Dummy Text 27'
}, {
    value: 'value28',
    text: 'Dummy Text 28'
}, {
    value: 'value29',
    text: 'Dummy Text 29'
}, {
    value: 'value30',
    text: 'Dummy Text 30'
}, {
    value: 'value31',
    text: 'Dummy Text 31'
}, {
    value: 'value32',
    text: 'Dummy Text 32'
}, {
    value: 'value33',
    text: 'Dummy Text 33'
}, {
    value: 'value34',
    text: 'Dummy Text 34'
}, {
    value: 'value35',
    text: 'Dummy Text 35'
}, {
    value: 'value36',
    text: 'Dummy Text 36'
}, {
    value: 'value37',
    text: 'Dummy Text 37'
}, {
    value: 'value38',
    text: 'Dummy Text 38'
}, {
    value: 'value39',
    text: 'Dummy Text 39'
}, {
    value: 'value40',
    text: 'Dummy Text 40'
}, {
    value: 'value41',
    text: 'Dummy Text 41'
}, {
    value: 'value42',
    text: 'Dummy Text 42'
}, {
    value: 'value43',
    text: 'Dummy Text 43'
}, {
    value: 'value44',
    text: 'Dummy Text 44'
}, {
    value: 'value45',
    text: 'Dummy Text 45'
}, {
    value: 'value46',
    text: 'Dummy Text 46'
}, {
    value: 'value47',
    text: 'Dummy Text 47'
}, {
    value: 'value48',
    text: 'Dummy Text 48'
}, {
    value: 'value49',
    text: 'Dummy Text 49'
}, {
    value: 'value50',
    text: 'Dummy Text 50'
}]
nexigo.widget({
    text: 'Checkbox',
    toolbars: [{
        text: 'Populate',
        action: 'populate'
    }, {
        text: 'Serialize',
        action: 'serialize'
    }],
    views: [{
        inline: 'inline-3',
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'checkbox1',
                text: 'Basic Checkbox',
                type: 'checkbox',
                cols: 4,
                data: data,
                style: 'margin-bottom:40px;',
                cssClass: 'demo-aja',
                onChange: function(val) {
                    console.log(val);
                }
            }, {
                name: 'checkbox1_2',
                text: 'Basic Checkbox Disabled',
                type: 'checkbox',
                cols: 4,
                disabled: true,
                hide: true,
                data: data,
            }, {
                name: 'checkbox1_3',
                text: 'Basic Checkbox Disabled Item',
                type: 'checkbox',
                cols: 4,
                data: dataWithDisabledItem,
            }]
        }, {
            name: 'checkbox2',
            text: 'Checkbox Inline',
            type: 'checkbox',
            style: 'margin-bottom:40px;',
            display: 'inline',
            data: data
        }, {
            name: 'checkbox3',
            text: 'Checkbox Column',
            type: 'checkbox',
            style: 'margin-bottom:40px;',
            display: 'column',
            data: data
        }, {
            name: 'checkbox4',
            text: 'Checkbox Multi Column',
            type: 'checkbox',
            display: 'column',
            colCount: 5,
            data: longData
        }]
    }, {
        text: 'Another Check',
        fields: [{
            type: 'checkbox',
            name: 'validationCheckbox',
            text: 'Required',
            style: 'margin-bottom:40px;',
            cols: 6,
            display: 'inline',
            data: data,
            required: 3
        }, {
            type: 'button',
            text: 'Validate',
            icon: 'fa-check',
            action: function() {
                xg.validate();
            }
        }]
    }, {
        text: 'Remote Data',
        fields: [{
            type: 'checkbox',
            name: 'remoteCheckbox',
            text: 'Required',
            data: '/api/select/media'
        }]
    }],
    functions: {
        populate: function() {
            var model = {
                checkbox1: ['media1', 'media2', 'media4', 'media5'],
                // checkbox1_2: ['media1', 'media2', 'media4', 'media5'],
                checkbox1_3: ['media1', 'media2', 'media3', 'media5'],
                checkbox2: ['media1', 'media3', 'media4', 'media5'],
                checkbox3: ['media1', 'media2', 'media4', 'media5'],
                checkbox4: ['value1', 'value10', 'value11', 'value12', 'value13', 'value17', 'value18', 'value19', 'value22', 'value23', 'value27', 'value30', 'value39'],
                validationCheckbox: ['media1', 'media2', 'media4', 'media5'],
                remoteCheckbox: ['media1', 'media2', 'media4', 'media5'],
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