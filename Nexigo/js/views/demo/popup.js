xg.widget({
    text: 'Demo Popup',
    dialogs: [{}],
    views: [{
        text: 'Popup Form',
        name: 'PopupForm',
        fields: [{
            text: 'Sample popup with data input form',
            //     type: 'content',
        }, {
            type: 'buttons',
            buttons: [{
                text: 'Show Popup 1',
                icon: 'fa-search',
                action: 'showPopup1'
            }, {
                text: 'Show Popup 2',
                icon: 'fa-search',
                action: 'showPopup1'
            }]
        }]
    }, {
        name: 'panel2',
        text: 'Lookup Form',
        fields: [{
            type: 'content',
            content: '<strong>Just Content</strong>'
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'PosCode',
                text: 'Position',
                icon: 'fa-search',
                action: 'showPopup2',
                cols: 4
            }, {
                name: 'PosName',
                text: '&nbsp;',
                style: 'margin-left:-5px',
                cols: 8
            }],
        }, {
            name: 'PosDesc',
            type: 'textarea',
            text: 'Description'
        }]
    }, {
        name: 'popup1',
        type: 'modal',
        text: 'Sample Popup Login',
        fields: [{
                name: 'login',
                text: 'User Name',
                min: 5,
                required: true
            }, {
                text: 'Password',
                type: 'password',
                min: 5,
                required: true
            }, {
                // type: 'buttons',
                buttons: [{
                    text: 'Login',
                    icon: 'fa-sign-in',
                    action: 'popup1Login'
                }, {
                    text: 'Cancel',
                    icon: 'fa-sign-out',
                    action: 'popup1Cancel'
                }]
            }]
            // }, {
            //     name: 'popup2',
            //     // type: 'dialog',
            //     text: 'Position List',
            //     fields: [{
            //         name: 'grid1',
            //         type: 'grid',
            //         url: 'data/position',
            //         onDblClick: 'populateRow',
            //         option: {
            //             sortable: true,
            //         },
            //         fields: [{
            //             name: 'id',
            //             text: 'Position ID',
            //             width: 150
            //         }, {
            //             name: 'code',
            //             text: 'Position Code',
            //             width: 150
            //         }, {
            //             name: 'name',
            //             text: 'Position Name'
            //         }]
            //     }, {
            //         // type: 'buttons',
            //         buttons: [{
            //             text: 'Ok',
            //             icon: 'fa-check',
            //             action: 'popup2Select'
            //         }, {
            //             text: 'Cancel',
            //             icon: 'fa-undo',
            //             action: 'popup2Cancel'
            //         }]
            //     }]
    }],
    functions: {
        showPopup1: function() {
            xg.modal.show('popup1');
            xg.validate('popup1');
        },
        popup1Login: function() {
            var valid = xg.validate('popup1');
            if (valid) {
                xg.modal.hide('popup1');
                xg.notify({
                    type: 'success',
                    text: 'login validated'
                })
            };
        },
        popup1Cancel: function() {
            xg.modal.hide('popup1');
        },
        showPopup2: function() {
            xg.modal.show('popup1', {
                // style: {
                //     top: 100,
                //     left: 50,
                //     right: 50
                // }
            });
        },
        popup2Select: function() {
            var row = grid.getSelectedRow('grid1');
            if (row) {
                xg.call('populateRow', null, null, row);
            };
        },
        popup2Cancel: function() {
            xg.modal.hide('popup2');
        },
        populateRow: function(e, idx, row) {
            console.log(row);
            var record = {
                PosCode: row.code,
                PosName: row.name,
                PosDesc: row.code + ' - ' + row.name
            }
            xg.populate('panel2', record);
            xg.modal.hide('popup2');
            // console.log(row);
        }
    }
})