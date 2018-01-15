nexigo.widget({
    text: 'Numeric',
    toolbars: [{
        text: 'Populate',
        action: 'populate'
    }, {
        text: 'Serialize',
        action: 'serialize'
    }],
    views: [{
        type: 'panel',
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'numeric_11',
                text: 'Integer (1)',
                type: 'numeric',
                icon: 'fa-bolt',
                tooltip: 'Just Info',
                errorMessage: {
                    min: 'minimal diisi 20 '
                },
                min: 20,
                cols: 6
            }, {
                name: 'numeric_12',
                text: 'Integer (2)',
                type: 'numeric',
                icon: 'fa-save',
                action: 'btnAlert',
                placeholder: 'hanya boleh di isi angka',
                max: 100000,
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            text: 'Decimal (1)',
            fields: [{
                name: 'decimal_21',
                text: 'Decimal (2 digit) - old style',
                type: 'numeric',
                digit: 2,
                cols: 6
            }, {
                name: 'decimal_22',
                text: 'Decimal (3 digit) - old style',
                type: 'numeric',
                required: true,
                max: 100000,
                digit: 3,
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            text: 'Decimal (2)',
            fields: [{
                name: 'decimal_31',
                text: 'Decimal (2 digit) - new style',
                type: 'numeric',
                decimal: 2,
                cols: 6
            }, {
                name: 'decimal_32',
                text: 'Decimal (3 digit) - new style',
                type: 'numeric',
                decimal: 3,
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            text: 'Decimal (3) - nullable',
            fields: [{
                name: 'decimal_41',
                text: 'Decimal (2 digit) - nullable',
                type: 'numeric',
                nullable: true,
                decimal: 2,
                cols: 6,
                onFocus: function(e) {
                    xg.call('Log', 'Focus');
                },
                onBlur: function(e) {
                    xg.call('Log', 'Lost Focus');
                },
            }, {
                name: 'decimal_42',
                text: 'Decimal (3 digit) - nullable',
                type: 'numeric',
                nullable: true,
                decimal: 3,
                cols: 6,
                onFocus: function(e) {
                    xg.call('Log', 'Focus');
                },
                onBlur: function(e) {
                    xg.call('Log', 'Lost Focus');
                },
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'numeric_51',
                text: 'Numeric (readonly)',
                type: 'numeric',
                readonly: true,
                digit: 2,
                hide: true,
                cols: 6
            }, {
                name: 'numeric_52',
                text: 'Numeric (disabled)',
                type: 'numeric',
                disabled: true,
                style: 'padding-left: 40px',
                digit: 3,
                cols: 6
            }, {
                name: 'numeric_53',
                text: 'Numeric (readonly)',
                type: 'numeric',
                readonly: true,
                style: 'padding-left: 40px',
                digit: 3,
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'textarea_log',
                text: 'Textarea with icon right',
                type: 'textarea',
                icon: 'fa-comment',
                cssClass: 'right',
                readonly: true,
                cols: 4
            }]
        }]
    }],
    functions: {
        init: function() {
            console.log('init');
        },
        demo: function() {
            console.log('list init');
        },
        demo2: function() {
            console.log('demo');
        },
        populate: function() {
            var model = {
                numeric_11: xg.call('getRndNumber'),
                numeric_12: 12983.12038,
                decimal_21: xg.call('getRndNumber'),
                decimal_22: xg.call('getRndNumber'),
                decimal_31: xg.call('getRndNumber'),
                decimal_32: xg.call('getRndNumber'),
                decimal_41: xg.call('getRndNumber'),
                decimal_42: xg.call('getRndNumber'),
                numeric_51: xg.call('getRndNumber'),
                numeric_52: xg.call('getRndNumber'),
                numeric_53: xg.call('getRndNumber'),
                textarea_log: 'Just Test'
            };
            xg.populate(model);
            xg.field.show('Status');
            xg.validate();
        },
        getRndNumber() {
            var numbers = [
                129373.12983712,
                1293871923.12938123,
                1239812371.123981023,
                123123.319237123,
                129387264.3495845,
                3493712.120398923
            ];
            return numbers[parseInt(Math.random() * numbers.length)];
        },
        serialize: function() {
            var data = xg.serialize();
            var text = '';
            var style = 'height:250px;padding:2px;font-size:12px;text-align:left;border:1px solid #ccc;margin-top:-12px';
            for (key in data) {
                text += key + ' : ' + data[key] + ' (' + typeof(data[key]) + ')\n';
            }
            xg.message({
                text: '<pre style="' + style + '">' + text + '</pre>',
                width: 700,
                height: 310
            });
        },
        Log: function(data) {
            $('[xg-field="textarea_log"]').val($('[xg-field="textarea_log"]').val() + data + '\n');
        },
        btnAlert: function() {
            xg.notify('ajhgd ajhd kasdh kadhkaldsh');
        }
    },
})