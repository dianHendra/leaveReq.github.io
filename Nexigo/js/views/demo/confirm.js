xg.widget({
    text: 'Confirm & Notification',
    views: [{
        text: 'Simple Confirm',
        fields: [{
            type: 'buttons',
            buttons: [{
                text: 'Confirm 1',
                name: 'confirm1',
                icon: 'fa-bolt',
                action: 'confirm1'
            }, {
                text: 'Confirm 2',
                name: 'confirm2',
                icon: 'fa-bolt',
                action: 'confirm2'
            }, {
                text: 'Confirm 3',
                name: 'confirm3',
                icon: 'fa-save',
                action: 'confirm3'
            }]
        }]
    }, {
        text: 'Simple Notify',
        fields: [{
            type: 'buttons',
            buttons: [{
                text: 'Notify (default)',
                icon: 'fa-bolt',
                action: 'notify1'
            }, {
                text: 'Notify (success)',
                name: 'notify2',
                icon: 'fa-bolt',
                action: 'notify2'
            }, {
                text: 'Notify (warning)',
                name: 'notify3',
                icon: 'fa-bolt',
                action: 'notify3'
            }, {
                text: 'Notify (danger)',
                name: 'notify3',
                icon: 'fa-bolt',
                action: 'notify3'
            }]
        }]
    }],
    functions: {
        confirm1: function() {
            xg.confirm({
                onConfirm: function() {
                    xg.confirm.close();
                }
            });
        },
        confirm2: function() {
            xg.confirm({
                title: 'Konfirmasi Penyimpanan',
                text: 'Apakah anda yakin?',
                onConfirm: function() {
                    xg.confirm.close();
                }
            });
        },
        confirm3: function() {
            xg.save({
                url: 'data/customers.txt',
                data: {}
            }, function(r) {
                console.log(r);
            });
        },
        notify1: function() {
            xg.notify('<strong>Well done!<strong> You successfully read this important alert message.');
        },
        notify2: function() {
            xg.notify({
                type: 'success',
                text: '<strong>Well done!<strong> You successfully read this important alert message.'
            });
        },
        notify3: function() {
            xg.notify({
                type: 'warning',
                text: '<strong>Well done!<strong> You successfully read this important alert message.',
                timeout: 5000,
            });
        },
        notify4: function() {
            xg.notify({
                type: 'danger',
                text: '<strong>Well done!<strong> You successfully read this important alert message.',
                timeout: 7000,
            });
        },
    }
})