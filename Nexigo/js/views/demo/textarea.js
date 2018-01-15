nexigo.widget({
    text: 'Text Area',
    toolbars: [{
        text: 'Populate',
        action: 'populate'
    }, {
        text: 'Serialize',
        action: 'serialize'
    }],
    views: [{
        text: 'Basic Text Area',
        fields: [{
            name: 'textarea_simple',
            text: 'Simple Textarea',
            type: 'textarea',
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'textarea_with_icon_left',
                text: 'Textarea with icon left',
                type: 'textarea',
                icon: 'fa-comment',
                cols: 4,
                hide: true
            }, {
                name: 'textarea_with_icon_center',
                text: 'Textarea with icon center',
                type: 'textarea',
                icon: 'fa-comment',
                tooltip: 'Info saja',
                minLength: 10,
                cols: 4
                    // hide: true
            }, {
                name: 'textarea_with_icon_right',
                text: 'Textarea with icon right',
                type: 'textarea',
                icon: 'fa-comment',
                style: 'margin-left:50px',
                maxLength: 30,
                placeholder: 'demo qwekqwe',
                cols: 4
            }]
        }]
    }, {
        text: 'Text Area readonly & disabled',
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'textarea_with_icon_readonly',
                text: 'Textarea with icon readonly',
                type: 'textarea',
                readonly: true,
                icon: 'fa-comment',
                cols: 6
            }, {
                name: 'textarea_with_icon_disabled',
                text: 'Textarea with icon disabled',
                type: 'textarea',
                disabled: true,
                icon: 'fa-comment',
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'textarea_with_icon_left_2',
                text: 'Textarea with icon left',
                type: 'textarea',
                icon: 'fa-comment',
                tooltip: 'Info saja',
                required: true,
                errorMessage: {
                    required: 'tidak boleh kosong'
                },
                cols: 4
                    // hide: true
            }, {
                name: 'textarea_with_icon_right_2',
                text: 'Textarea with icon right',
                type: 'textarea',
                icon: 'fa-comment',
                cssClass: 'right',
                placeholder: 'demo qwekqwe',
                cols: 4,
                onChange: function(e) {
                    xg.call('Log', 'Value Changed');
                },
                onFocus: function(e) {
                    xg.call('Log', 'Focus');
                },
                onBlur: function(e) {
                    xg.call('Log', 'Lost Focus');
                },
            }, {
                name: 'textarea_log',
                text: 'Textarea with icon right',
                type: 'textarea',
                icon: 'fa-comment',
                cssClass: 'right',
                readonly: true,
                cols: 4
            }]
        }]
    }, {
        text: 'Auto Grow',
        fields: [{
            type: 'textarea',
            name: 'grow',
            autogrow: true
        }]
    }],
    functions: {
        populate: function() {
            var model = {
                textarea_simple: 'textarea_simple',
                textarea_with_icon_left: 'textarea_with_icon 1',
                textarea_with_icon_center: 'textarea_with_icon 2',
                textarea_with_icon_right: 'textarea_with_icon 3',
                textarea_with_icon_readonly: 'textarea_with_icon_readonly',
                textarea_with_icon_disabled: 'textarea_with_icon_disabled',
                textarea_with_icon_left_2: 'textarea_with_icon_left_2',
                textarea_with_icon_right_2: 'textarea_with_icon_right_2',
                textarea_log: 'textarea_log'
            };
            xg.populate(model);
            xg.field.show('Status');
            xg.validate();
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
        }
    }
})