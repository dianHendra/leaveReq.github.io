nexigo.widget({
    text: 'Layout & Basic Textbox',
    toolbars: [{
        text: 'Alert',
        icon: 'fa-bolt',
        name: 'tAlert',
        action: 'Alert'
    }, {
        text: 'Refresh',
        icon: 'fa-refresh',
        name: 'tRefresh',
        action: 'Refresh'
    }, {
        name: 'tSave',
        icon: 'fa-save',
        action: 'Save'
    }],
    views: [{
        type: 'panel',
        inline: true,
        name: 'SinglePanel',
        text: 'Text Input',
        collapsible: true,
        fields: [{
            name: 'BasicText1',
            text: 'Basic Text Box ',
            type: 'text',
            placeholder: 'Max length: 50',
            inputKey: '',
            prefix: 'Rp.',
            suffix: '/month',
            icon: 'fa-bolt',
            required: true,
            maxLength: 50,
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'BasicText2',
                text: 'Only Text',
                inputKey: '[a-z]',
                cols: 6,
                required: true,
            }, {
                name: 'BasicText3',
                text: 'Only Number',
                inputKey: '[0-9]',
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'BasicText2_2',
                text: 'Text Cols (2)',
                format: '[\w]{3}-[\d]{3}',
                cols: 6
            }, {
                name: 'BasicText3_2',
                text: 'Text Cols (2)',
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'BasicText4',
                text: 'Text Cols (3)',
                cols: 4
            }, {
                name: 'BasicText5',
                text: 'Text Cols (3)',
                cols: 4
            }, {
                name: 'BasicText6',
                text: 'Text Cols (3)',
                cols: 4
            }]
        }, {
            type: 'fieldRow',

            fields: [{
                name: 'BasicText7_1',
                text: 'Text Required',
                required: true,
                cols: 4,
                errorMessage: {
                    required: 'data ini harus diisi'
                }
            }, {
                name: 'BasicText7_2',
                text: 'Text Min',
                minLength: 5,
                cols: 4,
                errorMessage: {
                    minLength: 'minimal diisi 5 karakter'
                }
            }, {
                name: 'BasicText7_3',
                text: 'Text Max',
                maxLength: 5,
                cols: 4,
                errorMessage: {
                    maxLength: 'maksimal diisi 15 karakter'
                }
            }]
        }]
    }, {
        type: 'row',
        panels: [{
            name: 'LeftPanel',
            text: 'Left Panel',
            cols: 6,
            fields: [{
                name: 'BasicTextAction1',
                text: 'Text with action',
                action: function() {
                    alert('Hello')
                }
            }, {
                name: 'BasicTextAction4',
                text: 'Text with action',
                icon: 'fa-envelope',
                action: function() {
                    alert('Hello')
                }
            }]
        }, {
            type: 'panel',
            text: 'Right Panel',
            name: 'RightPanel',
            cols: 6,
            fields: [{
                type: 'fieldRow',
                fields: [{
                    name: 'BasicTextAction2',
                    text: 'Text short',
                    cols: 6,
                    required: true,
                    action: 'Action1'
                }, {
                    name: 'BasicTextAction3',
                    text: 'Text short',
                    cols: 6,
                    action: 'Action1'
                }]
            }, {
                type: 'fieldRow',
                fields: [{
                    name: 'BasicTextAction5',
                    text: 'Text short',
                    cols: 4,
                    action: 'Action1'
                }, {
                    name: 'BasicTextAction6',
                    text: 'Text short',
                    cols: 8,
                    action: 'Action1'
                }]
            }]
        }, ]
    }, {
        type: 'panel',
        text: 'Validation',
        name: 'Validation',
        fields: [{
            name: 'TextValidation1',
            text: 'Required Text',
            type: 'email',
            required: true
        }]
    }, {
        type: 'panel',
        text: 'Event Listener',
        name: 'EventListener',
        fields: [{
            name: 'TextEvent1',
            text: 'Text with event listener',
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
    }],
    functions: {
        init: function(xg, callback){
            callback();
        },
        Action1: function() {
            alert('Action called');
        },
        Refresh: function() {
            alert('Refresh action');
        },
        Alert: function() {
            alert('Alert');
        },
        Save: function() {
            alert('Save action');
        },
        Log: function(data) {
            $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + data + '\n');
        }
    }
});