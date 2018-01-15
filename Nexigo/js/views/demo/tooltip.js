nexigo.widget({
    name: 'test',
    text: 'Tooltip',
    views: [{
        type: 'row',
        panels: [{
            name: 'defaultPanel',
            cols: 6,
            fields: [{
                text: 'Basic Tooltip',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }]
            }, {
                text: 'Basic Info',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    info: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    info: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    info: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    info: 'Textarea',
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    info: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }]
            }, {
                text: 'Tooltip with Icon',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }]
            }, {
                text: 'Tooltip without Icon',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }]
            }, {
                text: 'Tooltip with Icon and Info',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }]
            }]
        }, {
            name: 'inlinePanel',
            inline: true,
            cols: 6,
            fields: [{
                text: 'Basic Tooltip',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    tooltip: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }]
            }, {
                text: 'Basic Info',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    info: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    info: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    info: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    info: 'Textarea',
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    info: 'Lorem ipsum dolor sit amet.',
                    cols: 8
                }]
            }, {
                text: 'Tooltip with Icon',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }]
            }, {
                text: 'Tooltip without Icon',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    tooltip: {
                        showIcon: false,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }]
            }, {
                text: 'Tooltip with Icon and Info',
                type: 'panel',
                fields: [{
                    name: 'text_1',
                    text: 'Text',
                    type: 'text',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'password_1',
                    text: 'Password',
                    type: 'password',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'email_1',
                    text: 'Email',
                    type: 'email',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'textarea_1',
                    text: 'Textarea',
                    type: 'textarea',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }, {
                    name: 'numeric_1',
                    text: 'Numeric',
                    type: 'numeric',
                    info: 'Lorem ipsum dolor sit amet.',
                    tooltip: {
                        showIcon: true,
                        tooltip: 'Lorem ipsum dolor sit amet.'
                    },
                    cols: 8
                }]
            }]
        }]
    }],
    functions: {
        init: function() {}
    }
})