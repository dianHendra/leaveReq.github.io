xg.widget({
    text: 'Message Dialog',
    views: [{
        fields: [{
            type: 'fieldRow',
            fields: [{
                type: 'button',
                text: 'Basic',
                name: 'basicMessage',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.message('Hello message!');
                }
            }, {
                type: 'button',
                text: 'Custom Message 1',
                name: 'customMessage1',
                cols: 2,
                stretch: true,
                action: function() {
                    xg.message({
                        text: 'Hello message!<br/>Lorem ipsum dolor de amet<br/>Lorem ipsum dolor de amet<br/>Lorem ipsum dolor de amet<br/>Lorem ipsum dolor de amet<br/>Lorem ipsum dolor de amet',
                        buttons: ['Okay', 'Close'],
                        showCloseButton: true,
                        stackedAction: true
                    });
                }
            }, {
                type: 'button',
                text: 'Custom Message 2',
                name: 'customMessage2',
                cols: 2,
                stretch: true,
                action: function() {
                    xg.message({
                        text: 'Close me please!',
                        buttons: [{
                            text: 'Close!',
                            cssClass: 'xg-btn-danger'
                        }, {
                            text: 'Ok',
                            cssClass: 'xg-btn-success'
                        }]
                    });
                }
            }, {
                type: 'button',
                text: 'Custom Message 3',
                name: 'customMessage3',
                cols: 2,
                stretch: true,
                action: function() {
                    xg.message({
                        width: 400,
                        text: 'Choose one of the following button!',

                        buttons: [{
                            text: 'Button 0',
                            cssClass: 'xg-btn-danger'
                        }, {
                            text: 'Button 1',
                            cssClass: 'xg-btn-success'
                        }, {
                            text: 'Button 2',
                            cssClass: 'xg-btn-info'
                        }, {
                            text: 'Button 3',
                            cssClass: 'xg-btn-warning'
                        }]
                    }, function(idx) {
                        alert('You choose Button ' + idx);
                    });
                }
            }, {
                type: 'button',
                text: 'Long Message',
                name: 'longMessage',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.message({
                        text: 'Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. <i>Nunc euismod odio id erat blandit</i> consectetur. Donec ligula nulla, pretium sit amet mattis sed, pulvinar a lorem. Integer eu interdum est. Sed tempus risus enim, a egestas nisi bibendum non. Maecenas eget mi et ex ultrices molestie. Quisque pretium metus eget vulputate molestie. Vestibulum faucibus nulla ex, in tempus orci tincidunt pellentesque.',
                        width: 400,
                        height: 200
                    });
                }
            }]
        }]
    }, {
        text: 'HTML Content',
        fields: [{
            type: 'content',
            content: ['Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. <i>Nunc euismod odio id erat blandit</i> consectetur. Donec ligula nulla, pretium sit amet mattis sed, pulvinar a lorem. Integer eu interdum est. Sed tempus risus enim, a egestas nisi bibendum non. Maecenas eget mi et ex ultrices molestie. Quisque pretium metus eget vulputate molestie. Vestibulum faucibus nulla ex, in tempus orci tincidunt pellentesque.',
                '<div style="width: 100px; height: 100px; border: 2px solid #f00; text-align: center; vertical-align: middle; line-height: 100px;">Box</div>'
            ]
        }, 
        {
            type: 'content',
            name: 'hello',
            content: ['<h2>REVIEW</h2> <hr style="border: 2px solid"/>']
        }]
    }, {
        text: 'Button',
        fields: [{
            type: 'fieldRow',
            fields: [{
                type: 'button',
                name: 'btn1',
                text: 'Default',
                stretch: true,
                cols: 1,
                action: function() {
                    alert('Action fired')
                }
            }, {
                type: 'button',
                name: 'btn2',
                text: 'Primary',
                cssClass: 'xg-btn-primary',
                stretch: true,
                cols: 1,
                action: function() {
                    alert('Action fired')
                }
            }, {
                type: 'button',
                name: 'btn3',
                text: 'Success',
                cssClass: 'xg-btn-success',
                stretch: true,
                cols: 1,
                action: function() {
                    alert('Action fired')
                }
            }, {
                type: 'button',
                name: 'btn4',
                text: 'Info',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 1,
                action: function() {
                    alert('Action fired')
                }
            }, {
                type: 'button',
                name: 'btn5',
                text: 'Warning',
                cssClass: 'xg-btn-warning',
                stretch: true,
                cols: 1,
                action: function() {
                    alert('Action fired')
                }
            }, {
                type: 'button',
                name: 'btn6',
                text: 'Danger',
                cssClass: 'xg-btn-danger',
                stretch: true,
                cols: 1,
                action: function() {
                    alert('Action fired')
                }
            }, ]
        }]
    }, {
        text: 'Button Group',
        fields: [{
            type: 'fieldRow',
            fields: [{
                type: 'buttons',
                display: '',
                align: 'center',
                cols: 4,
                buttons: [{
                    text: 'Left',
                    action: function() {
                        alert('Action fired')
                    }
                }, {
                    text: 'Middle',
                    action: function() {
                        alert('Action fired')
                    }
                }, {
                    text: 'Right',
                    action: function() {
                        alert('Action fired')
                    }
                } ]
            },{
                type: 'buttons',
                display: '',
                align: 'center',
                cols: 4,
                buttons: [{
                    text: 'Save',
                    icon: 'fa-save',
                    cssClass: 'xg-btn-success',
                    action: function() {
                        alert('Action fired')
                    }
                }, {
                    text: 'Delete',
                    icon: 'fa-trash',
                    cssClass: 'xg-btn-danger',
                    action: function() {
                        alert('Action fired')
                    }
                }, {
                    text: 'Cancel',
                    icon: 'fa-times',
                    cssClass: 'xg-btn-info',
                    action: function() {
                        alert('Action fired')
                    }
                } ]
            },
            {
                type: 'buttons',
                display: '',
                align: 'center',
                cols: 4,
                buttons: [{
                    text: 'G',
                    cssClass: 'xg-btn-danger',
                    action: function() {
                        alert('Action fired')
                    }
                }, {
                    text: 'O',
                    cssClass: 'xg-btn-warning',
                    action: function() {
                        alert('Action fired')
                    }
                }, {
                    text: 'O',
                    cssClass: 'xg-btn-info',
                    action: function() {
                        alert('Action fired')
                    }
                },{
                    text: 'O',
                    cssClass: 'xg-btn-primary',
                    action: function() {
                        alert('Action fired')
                    }
                },
                {
                    text: 'O',
                    cssClass: 'xg-btn-default',
                    action: function() {
                        alert('Action fired')
                    }
                },
                {
                    text: 'O',
                    cssClass: 'xg-btn-success',
                    action: function() {
                        alert('Action fired')
                    }
                },
                {
                    text: 'O',
                    cssClass: 'xg-btn-info',
                    action: function() {
                        alert('Action fired')
                    }
                },
                {
                    text: 'O',
                    cssClass: 'xg-btn-danger',
                    action: function() {
                        alert('Action fired')
                    }
                },
                {
                    text: 'G',
                    cssClass: 'xg-btn-success',
                    action: function() {
                        alert('Action fired')
                    }
                },
                {
                    text: 'L',
                    cssClass: 'xg-btn-primary',
                    action: function() {
                        alert('Action fired')
                    }
                },
                {
                    text: 'E',
                    cssClass: 'xg-btn-warning',
                    action: function() {
                        alert('Action fired')
                    }
                } ]
            }]
        }]
    }]
});
