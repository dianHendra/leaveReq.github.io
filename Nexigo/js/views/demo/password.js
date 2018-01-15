nexigo.widget({
    name: 'test',
    text: 'Password',
    views: [{
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'password_1',
                text: 'Simple Password',
                type: 'password',
                cols: 6
            }, {
                name: 'password_2',
                text: 'Password with icon',
                type: 'password',
                icon: 'fa-key',
                cols: 6
            }]
        }]
    }],
    functions: {
        init: function() {
            xg.populate({
                password_1: 'password1',
                password_2: 'password2'
            });
        }
    }
})