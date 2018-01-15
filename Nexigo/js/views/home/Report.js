nexigo.widget({
    text: 'Report',
    views: [{
        type: 'fieldRow',
        offset: 5,
        fields: [{
            name: 'Select_normal2',
            text: 'Name',
            type: 'select',
            cols: 4,
            required: true,
            placeholder: 'Select Name',
            data: [{
                value: 'media1',
                text: 'a',
            }, {
                value: 'media2',
                text: 'b',
            }, {
                value: 'media3',
                text: 'c',
            }, {
                value: 'media4',
                text: 'd',
            }, {
                value: 'media5',
                text: 'e',
            }, {
                value: 'media6',
                text: 'f',
            }],

            onChange: function (val, text) {
                xg.call('Log', 'Value changed -' + val + '-' + text);
            }
        }, {
            type: 'fieldRow',
            fields: [
                { name: 'StartDate', text: 'Start Date', type: 'picker', cols: 2, required: true },
                { name: 'EndDate', text: 'End Date', type: 'picker', cols: 2 },
            ]

        }],

    }, {
        offset: 4,
        fields: [
            { type: 'button', text: 'Generate Report', cssClass: 'xg-btn', offset: 2, cols: 2, action: 'submit' },
        ]
    }, {
        type: 'row',
        panels: [{
            name: 'panel1',
            offset: 1,
            fields: [
                {
                    type: 'grid',
                    text: 'Table',
                    name: 'tasklist-grid',
                    onDblClick: 'doubleClick',
                    options: {
                        sortable: false,
                        editable: false,
                        filterable: false,
                        pageable: true,
                        selectable: 'single',
                    },
                    fields: [
                        {
                            name: 'Name',
                            text: 'Name',
                            type: 'text'
                        },
                        {
                            name: 'Email',
                            text: 'Email',
                            type: 'text'
                        },
                        {
                            name: 'LeaveType',
                            text: 'Leave Type',
                            type: 'text'
                        },
                        {
                            name: 'StartDate',
                            text: 'Start Date',
                            type: 'text'
                        },
                        {
                            name: 'EndDate',
                            text: 'End Date',
                            type: 'text'
                        },
                        {
                            name: 'DaysLeave',
                            text: 'Jumlah Cuti',
                            type: 'text'
                        },
                        {
                            name: 'Submission',
                            text: 'Submission',
                            type: 'text'
                        },
                        {
                            name: 'status',
                            text: 'Status',
                            type: 'text'
                        },
                    ],
                    data: 'http://localhost:31602/api/FormLeave/ReportGrid',
                }]
        }]
    }],

    init: function (xg, callback) {
        var filter = {
            field: 'status',
            operator: 'neq',
            value: ''
        };
        xg.grid.instance('tasklist-grid').dataSource.filter(filter)
    },

    Submit: function () {
        xg.loading.show();
        var res = xg.serialize();
        xg.ajax({
            url: '',
            data: JSON.stringify(res),
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                console.log(data);
            },
            complete: function () {
                console.log('complete');
                xg.notify({ type: 'success', text: 'Berhasil' });
                xg.loading.hide();
                xg.navigate('home/Report');
            }
        });
    },
});