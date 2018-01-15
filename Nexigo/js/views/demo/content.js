xg.widget({
    text: 'Vendor Purchase Order',
    toolbars: [{
        text: 'Populate',
        action: 'populate'
    }, {
        text: 'Serialize',
        action: 'serialize'
    }, {
        text: 'Test 1',
        action: 'test1'
    }, {
        text: 'Test 2',
        action: 'test2'
    }],
    views: [{
        name: 'panel1',
        text: 'PO Information',
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'PONo',
                text: 'PO No.',
                cols: 4
            }, {
                name: 'Status',
                text: 'Status',
                readonly: true,
                hide: true,
                cols: 2,
            }, {
                name: 'IssuedDate',
                text: 'Issued Date',
                type: 'picker',
                cols: 2
            }, {
                name: 'InWHDate',
                text: 'In-Warehouse (Cancel)',
                format: 'DD-MMM-YYYY',
                type: 'picker',
                cols: 2
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                text: 'Customer',
                icon: 'fa-search',
                action: 'searchCust',
                readonly: true,
                name: 'CustCode',
                cols: 2
            }, {
                name: 'CustName',
                text: '&nbsp;',
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            hide: true,
            fields: [{
                text: 'Vendor',
                icon: 'fa-search',
                action: 'searchVend',
                readonly: true,
                cols: 2
            }, {
                text: '&nbsp;',
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'select1',
                text: 'Type',
                type: 'select',
                data: 'api/select/media',
                cols: 4
            }, {
                name: 'select2',
                text: 'Division',
                type: 'select',
                data: 'api/select/media',
                cols: 4
            }]
        }]
    }, {
        name: 'panel2',
        text: 'Additional Info',
        hide: true,
        fields: []
    }, {
        name: 'panel3',
        text: 'Field (Hide - Show)',
        fields: [{
            type: 'fieldRow',
            fields: [{
                type: 'button',
                text: 'Hide Field (1)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.field.hide('PONo')
                }
            }, {
                type: 'button',
                text: 'Hide Field (2)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.field.hide('Status');
                }
            }, {
                type: 'button',
                text: 'Hide Field (1, 2)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.field.hide(['PONo', 'Status'])
                }
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                type: 'button',
                text: 'Show Field (1)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.field.show('PONo')
                }
            }, {
                type: 'button',
                text: 'Show Field (2)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.field.show('Status')
                }
            }, {
                type: 'button',
                text: 'Show Field (1, 2)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.field.show(['PONo', 'Status'])
                }
            }]
        }]
    }, {
        name: 'panel4',
        text: 'Row (Hide - Show)',
        fields: [{
            type: 'fieldRow',
            fields: [{
                type: 'button',
                text: 'Hide Row (1)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.row.hide('panel1', 1)
                }
            }, {
                type: 'button',
                text: 'Hide Row (2)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.row.hide('panel1', 2)
                }
            }, {
                type: 'button',
                text: 'Hide Row (1, 2)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.row.hide('panel1', [1, 2])
                }
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                type: 'button',
                text: 'Show Row (1)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.row.show('panel1', 1)
                }
            }, {
                type: 'button',
                text: 'Show Row (2)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.row.show('panel1', 2)
                }
            }, {
                type: 'button',
                text: 'Show Row (1, 2)',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.row.show('panel1', [1, 2])
                }
            }]
        }]
    }, {
        name: 'panel5',
        text: 'Panel (Hide - Show)',
        fields: [{
            type: 'fieldRow',
            fields: [{
                type: 'button',
                text: 'Hide Panel1',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.panel.hide('panel1')
                }
            }, {
                type: 'button',
                text: 'Hide Panel2',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.panel.hide('panel2')
                }
            }, {
                type: 'button',
                text: 'Hide Panel1 & Panel2',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.panel.hide(['panel1', 'panel2'])
                }
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                type: 'button',
                text: 'Show Panel1',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.panel.show('panel1')
                }
            }, {
                type: 'button',
                text: 'Show Panel2',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.panel.show('panel2')
                }
            }, {
                type: 'button',
                text: 'Show Panel1 & Panel2',
                cssClass: 'xg-btn-info',
                stretch: true,
                cols: 2,
                action: function() {
                    xg.panel.show(['panel1', 'panel2'])
                }
            }]
        }]
    }],
    functions: {
      populate: function() {
          var model = {
              PONo: 'PO 001',
              Status: 'POSTED',
              IssuedDate: new Date('2015-07-22'),
              CustCode: 'CUST001',
              CustName: 'CUSTOMER 001',
              InWHDate: new Date('2015-08-22'),
          };

          xg.populate(model);
          xg.field.show('Status');
      },
      test1 : function() {
        alert('Test 1');
      }
    },
    populate: function() {
      alert('old populate');
    },
    serialize: function () {
      var data = xg.serialize('panel1');
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
    },
    test2 : function() {
      alert('Test 2');
    }
})
