function hideShowOperator(panel, len) {
    if (len === 0) {
        $('[data-name=' + panel + '] [xg-field=boolopr]').parent().parent().addClass('hide');
        $('[data-name=' + panel + '] [xg-field=boolopr]').val('');
    } else {
        $('[data-name=' + panel + '] [xg-field=boolopr]').parent().parent().removeClass('hide');
    }
};

var actid = 8704;
var actname = '';
var lineRules = [];
var provars = [{
    value: '101',
    text: 'Pv Manager (sim)'
}, {
    value: '102',
    text: 'On Behalf (sim)'
}]

xg.widget({
    text: 'Grid Local',
    views: [{
        name: 'dlgServerActAction',
        text: 'Server Activity Action',
        fields: [{
            name: 'lrdid',
            type: 'hidden'
        }, {
            row: [{
                name: 'actname',
                text: 'Line Rule Name',
                cols: 9
            }, {
                name: 'boolopr',
                text: 'Operator',
                type: 'select',
                data: ['and', 'or'],
                cols: 3
            }]
        }, {
            row: [{
                name: 'pvarid',
                text: 'Process Variable',
                type: 'select',
                cols: 6
            }, {
                name: 'operator',
                text: '&nbsp;',
                type: 'select',
                data: ['Pv Manager (sim)', 'On Behalf (sim)'],
                data: [
                    ['equals', 'Equals'],
                    ['notequals', 'Not Equals']
                ],
                cols: 3
            }, {
                name: 'value',
                text: '&nbsp;',
                type: 'numeric',
                cols: 3
            }]
        }, {
            type: 'buttons',
            buttons: [{
                name: 'save',
                text: 'Save',
                action: 'saveSvrLine',
                icon: 'fa-save'
            }, {
                name: 'clear',
                text: 'Cancel',
                action: 'clearSvrLine',
                icon: 'fa-undo'
            }]
        }, {
            name: 'grdSvrLine',
            type: 'grid',
            data: [],
            onDblClick: 'editSvrLine',
            fields: [{
                name: 'boolopr',
                text: '#',
                width: 100
            }, {
                name: 'pvarname',
                text: 'Process Name',
            }, {
                name: 'operator',
                text: 'Operator',
                width: 150
            }, {
                name: 'value',
                text: 'Value',
                width: 160,
                type: 'numeric'
            }]
        }, {
            type: 'buttons',
            buttons: [{
                name: 'add',
                text: 'Add',
                action: 'addSvrLine',
                icon: 'fa-file'
            }, {
                name: 'edit',
                text: 'Edit',
                action: 'editSvrLine',
                icon: 'fa-edit'
            }, {
                name: 'remove',
                text: 'Delete',
                action: 'deleteSvrLine',
                icon: 'fa-trash'
            }, {
                name: 'submit',
                text: 'Submit',
                action: 'saveProcVar',
                icon: 'fa-bolt',
                clas: 'right',
            }, {
                name: 'undo',
                text: 'Cancel',
                action: 'svrActCancel',
                icon: 'fa-undo',
                clas: 'right',
            }]
        }]
    }],
    init: function() {
        hideShowOperator('dlgServerActAction', lineRules.length);
        xg.select.refresh('dlgServerActAction', 'pvarid', provars);
    },
    addSvrLine: function() {
        xg.focus('dlgServerActAction', 'actname');
        xg.clear('dlgServerActAction');
        xg.populate({
            actname: actname
        });
    },
    clearSvrLine: function() {
        xg.clear('dlgServerActAction');
        xg.populate({
            actname: actname
        });
    },
    saveSvrLine: function() {
        var row = xg.serialize('dlgServerActAction');
        actname = row.actname;

        var filter = {
            lrdid: (row.lrdid) ? parseInt(row.lrdid) : ((xg.max(lineRules, function(r) {
                return r.lrdid;
            }).lrdid || 0) + 1)
        };

        lineRule = xg.where(lineRules, filter)[0];

        if (lineRule) {
            lineRule.boolopr = row.boolopr,
            lineRule.pvarid = row.pvarid,
            lineRule.pvarname = xg.where(provars, {
                value: row.pvarid
            })[0].text,
            lineRule.operator = row.operator,
            lineRule.value = row.value
        } else {
            lineRules.push({
                lrdid: filter.lrdid,
                boolopr: row.boolopr,
                pvarid: row.pvarid,
                pvarname: xg.where(provars, {
                    value: row.pvarid
                })[0].text,
                operator: row.operator,
                value: row.value
            });
        }

        hideShowOperator('dlgServerActAction', lineRules.length);

        xg.grid.refreshData('grdSvrLine', lineRules);
        xg.clear('dlgServerActAction');
        xg.populate({
            actname: actname
        });
    },
    editSvrLine: function() {
        var row = xg.grid.getSelectedRow('grdSvrLine');
        if (row) {
            xg.populate('dlgServerActAction', row)
        } else {
            xg.notify({
                text: 'Please select row on grid before edit...!',
                type: 'danger'
            })
        }
    },
    deleteSvrLine: function() {
        var row = xg.grid.getSelectedRow('grdSvrLine');
        if (row) {
            if (window.confirm('remove selected data?')) {
                lineRules = xg.filter(lineRules, function(line) {
                    return (line.lrdid != row.lrdid);
                });
                xg.grid.refreshData('grdSvrLine', lineRules);
            };
        } else {
            xg.notify({
                text: 'Please select row on grid before delete...!',
                type: 'danger'
            })
        }
    }

    // tbrNew: function() {
    //     var commit = $('[xg-field=grid1]').jqxGrid('addrow', null, {
    //         name: 'Name 05',
    //         bool: 'test'
    //     });
    // },
    // tbrDelete: function() {
    //     var selectedrowindex = $('[xg-field=grid1]').jqxGrid('getselectedrowindex');
    //     var rowscount = $('[xg-field=grid1]').jqxGrid('getdatainformation').rowscount;
    //     if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
    //         var id = $('[xg-field=grid1]').jqxGrid('getrowid', selectedrowindex);
    //         var commit = $('[xg-field=grid1]').jqxGrid('deleterow', id);

    //         console.log(id, commit);
    //     }
    // },
    // tbrRefresh: function() {
    //     // console.log('refresh');
    //     // var data = $('[xg-field=grid1]').jqxGrid('getRowData');
    //     // console.log(data);

    //     var griddata = $('[xg-field=grid1]').jqxGrid('getdatainformation');
    //     var rows = [];
    //     for (var i = 0; i < griddata.rowscount; i++) {
    //         rows.push($('[xg-field=grid1]').jqxGrid('getrowdata', i));
    //     }
    //     //     rows.push($('[xg-field=grid1]').jqxGrid('getrenderedrowdata', i));
    //     // console.log(JSON.parse(rows));


    //     console.log(griddata, rows);
    // }
});