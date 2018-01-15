xg.widget({
    text: 'Toolbar',
    toolbars: [{
        name: 'new',
        text: 'New',
        icon: 'fa-file',
        action: 'tbrNew'
    }, {
        name: 'edit',
        text: 'Edit',
        icon: 'fa-edit',
        action: 'tbrEdit'
    }, {
        name: 'delete',
        text: 'Delete',
        icon: 'fa-trash',
        action: 'tbrDelete'
    }, {
        name: 'save',
        text: 'Save',
        icon: 'fa-save',
        hide: true,
    }, {
        name: 'cancel',
        text: 'Cancel',
        icon: 'fa-undo',
        action: 'tbrCancel',
        hide: true,
    }],
    functions: {
        tbrNew: function() {
            xg.toolbar.show(['save', 'cancel']);
        },
        tbrEdit: function() {
            xg.toolbar.hide('new');
            xg.toolbar.hide('edit');
            xg.toolbar.hide('delete');
            xg.toolbar.show('save');
            xg.toolbar.show('cancel');
        },
        tbrDelete: function() {
            xg.toolbar.hide('new', 'edit', 'delete');
            xg.toolbar.show('save', 'cancel');
        },
        tbrCancel: function() {
            xg.toolbar.hide(['save', 'cancel']);
        }
    }
})