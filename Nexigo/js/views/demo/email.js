nexigo.widget({
    text: 'Email',
    clas: 'email',
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
                text: 'Email',
                name: 'email_1_1',
                type: 'email',
                cols: 4
            }, {
                name: 'email_1_2',
                text: 'Email (readonly)',
                type: 'email',
                readonly: true,
                cols: 4
            }, {
                name: 'email_1_3',
                text: 'Email (readonly)',
                type: 'email',
                disabled: true,
                cols: 4
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'email_2_1',
                text: 'Email 2 1',
                type: 'email',
                cols: 4
            }, {
                name: 'email_2_2',
                type: 'email',
                text: 'Email 2 2',
                cssClass: 'kanan',
                cols: 4
            }, {
                name: 'email_2_3',
                text: 'Email 2 3',
                type: 'email',
                hide: true,
                cols: 4
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'email_3_1',
                text: 'Email 3 1',
                type: 'email',
                required: true,
                cols: 4
            }, {
                name: 'email_3_2',
                type: 'email',
                text: 'Email 3 2',
                placeholder: 'please input valid email',
                cols: 4
            }, {
                name: 'email_3_3',
                text: 'Email 3 3',
                type: 'email',
                cols: 4
            }]
        }, {
            type: 'panel',
            text: 'Event Listener',
            fields: [{
                name: 'TextEvent1',
                type: 'email',
                text: 'Email with event listener',
                cols: 6,
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
                type: 'textarea',
                readonly: true,
                text: 'Log',
                name: 'TextLog'
            }]
        }]
    }],
    functions: {
        populate: function() {
            var model = {
                email_1_1: 'mail_1_1@mail.com',
                email_1_2: 'mail_1_2@mail.com',
                email_1_3: 'mail_1_3@mail.com',
                email_2_1: 'mail_2_1@mail.com',
                email_2_2: 'mail_2_2@mail.com',
                email_2_3: 'mail_2_3@mail.com',
                email_3_1: 'mail_2_1@mail.com',
                email_3_2: 'mail_3_2@mail.com',
                email_3_3: 'mail_3_3@mail.com',
                TextEvent1: 'TextEvent1@mail.com',
                TextLog: 'Just Test'
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
            $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + data + '\n');
        }
    }
})