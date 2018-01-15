function categoryDropDownEditor(container, options) {
    $('<input required data-text-field="Negara" data-value-field="NegaraId" data-bind="value:' + options.field + '"/>')
        .appendTo(container)
        .kendoDropDownList({
            autoBind: false,
            dataSource: {
                type: "json",
                transport: {
                    read: "http://localhost:33235/api/hello/grideditdata"
                }
            }
        });
}

nexigo.widget({
    text: 'Grid',
    toolbars: [{
        name: 'selectRow',
        text: 'Select row',
        action: 'SelectRow'
    }, {
        name: 'refreshGrid',
        text: 'Refresh',
        action: 'RefreshGrid'
    }, {
        name: 'selectedRow',
        text: 'Get selected row',
        action: 'GetRow'
    }, {
        name: 'getAllRow',
        text: 'Get all row',
        action: 'GetAllRow'
    }, {
        name: 'addRow',
        text: 'Add new Row',
        action: 'AddRow'
    }, {
        name: 'removeRow',
        text: 'Remove row',
        action: 'RemoveRow'
    }, {
        name: 'editRow',
        text: 'Edit selected row',
        action: 'EditRow'
    }, {
        name: 'setData',
        text: 'Set row data',
        action: 'SetRow'
    }],
    views: [{
        type: 'panel',
        text: 'Basic Grid',
        name: 'SinglePanel',
        fields: [{
            type: 'button',
            text: 'Show More',
            action: function() {
                $(xg.grid.instance('sampleGrid').wrapper).toggleClass('expand');
            }
        }, {
            type: 'grid',
            name: 'sampleGrid',
            url: 'http://localhost:33235/api/Hello/KendoGridData',
            params: {
                Hello: 1,
                Hello2: 2
            },
            sourceOptions: {
                // pageSize: 10
            },
            
            options: {
                groupable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                selectable: 'single',
                sortable: true,
                filterable: true,
                editable: true,
                // // pageable: false,
                // // showAggregates: true,
                // selectionMode: 'singlerow',
                // // freezeColumn: ['ProductName'],
                // // autorowheight: true,
                // autoheight: true,
                // groupable: true,
                // altrows: true,
            },
            onDblClick: function(row, evt) {
                alert('Double Click');
                console.log(row, evt);
            },
            onChange: function(row, evt) {
                console.log(row, evt);
            },
            onError: function (){
                alert('aa');
            },
            fields: [{
                name: 'Code',
                text: 'Code',
                type: 'numeric',
                editable: false,
            }, {
                name: 'Negara',
                text: 'Negara',
                editable: false,
                editor: categoryDropDownEditor,
                template: '#=Negara.Negara#'
            }, {
                name: 'LastUpdate',
                text: 'Last Update',
                type: 'date',
                format: '{0:dd/MM/yyyy}',
                editable: false,
            }, {
                name: 'IsActive',
                text: 'Active',
                type: 'boolean',
                editable: false,
            }]
        }]
    }],
    functions: {
        SelectRow: function() {
            var idx = window.prompt("Row Index [Default/Blank = 0]", 0);
            xg.grid.selectRow('sampleGrid', idx);
        },
        RefreshGrid: function() {
            // xg.grid.refresh('sampleGrid');
            xg.grid.refresh('sampleGrid', {
                params: {
                    Hello3: 3
                }
            });
        },
        GetRow: function() {
            xg.message({
                text: JSON.stringify(xg.grid.getSelectedRow('sampleGrid')),
                width: 500
            });
        },
        AddRow: function() {
            var newRow = {
                Code: '000',
                Negara: 'New Country',
                LastUpdate: new Date(),
                IsActive: true
            }
            xg.grid.addRow('sampleGrid', newRow);
        },
        GetAllRow: function() {
            console.log(xg.grid.getAllRow('sampleGrid'));
            xg.message('See console');

        },
        RemoveRow: function() {
            // var idx = window.prompt("Row Index [Default/Blank = 0]", 0);
            // xg.grid.removeRow('sampleGrid', idx);
            xg.grid.removeRow('sampleGrid', {
                Negara: "Afghanistan"
            });
        },
        EditRow: function() {
            xg.grid.editRow('sampleGrid', xg.grid.getSelectedRowIndex('sampleGrid'));
        },
        SetRow: function() {
            var selected = xg.grid.getSelectedRow('sampleGrid');
            if (selected.length > 0) {
                xg.grid.setData('sampleGrid', selected[0], {
                    Code: 99999,
                    Negara: 'Unkown'
                });
            }
        }
    }
});