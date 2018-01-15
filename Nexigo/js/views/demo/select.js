nexigo.widget({
    //name: 'menu1',
    text: 'Select',
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
                name: 'select_normal',
                text: 'Select Media (normal)',
                type: 'select',
                cols: 6,
                tooltip: 'Media list',
                data: 'api/select/media',
                onChange: function(val, text) {
                    xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                }
            }, {
                name: 'select_normal2',
                text: 'Select Media (normal) with Placeholder',
                type: 'select',
                cols: 6,
                required: true,
                placeholder: 'Please select media',
                data: [{
                    value: 'media1',
                    text: 'Newspapper',
                }, {
                    value: 'media2',
                    text: 'Radio',
                    disabled: true
                }, {
                    value: 'media3',
                    text: 'TV',
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
                }],
                onChange: function(val, text) {
                    xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                }
            }]
        }, {
            name: 'select_disabled',
            text: 'Select Media (disabled)',
            type: 'select',
            disabled: true,
            data: [{
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
            }],
            cols: 6
        }, {
            name: 'ListBox',
            text: 'List Media',
            type: 'select',
            multiSelect: true,
            displayRows: 7,
            data: [{
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
            }],
            cols: 6,
            onChange: function(val, text) {
                xg.call('Log', 'Value changed - ' + val + ' - ' + text);
            }
        }, {
            type: 'textarea',
            name: 'TextLog',
            readonly: true
        }]
    }],
    functions: {
        init: function() {},
        save: function() {},
        populate: function() {
            var model = {
                select_normal: 'media3',
                select_normal2: 'media3',
                select_disabled: 'media4',
                ListBox: ['media2', 'media4', 'media5'],
                TextLog: '-'
            };
            xg.populate(model);
        },
        Log: function(data) {
            $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + data + '\n');
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