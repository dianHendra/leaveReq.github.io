nexigo.widget({
    text: 'Employee Page',
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
        text: 'Employee Information',
        collapsible: true,
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'BasicText2',
                text: 'Name',
                cols: 6,
                disabled: true,
            }, {
                name: 'BasicText3',
                text: 'Staff Id',
                cols: 6,
                disabled: true,
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'BasicText2_2',
                text: 'Supervisor',
                disabled: true,
                cols: 6
            }, {
                name: 'BasicText3_2',
                text: 'Email',
                cols: 6,
                disabled: true,
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'BasicText4',
                text: 'Location',
                cols: 6,
                disabled: true,
            }, {
                name: 'BasicText5',
                text: 'Joined Date',
                cols: 6,
                disabled: true,
            }]
        }]
    }, {
        type: 'panel',
        inline: true,
        name: 'SinglePanel',
        text: 'Employee Leave History',
        fields: [
            ////////////////////////--------------------------TaskList--------------------------////////////////////////
            {
                type: 'grid',
                text: 'Grid',
                name: 'gridCustomer',
                dblClick: 'doubleClick',
                fields: [
                    {
                        name: 'StaffId',
                        text: 'Staff Id',
                        type: 'text',
                    },
                    {
                        name: 'Name',
                        text: 'Nama',
                        type: 'text',
                    },
                    {
                        name: 'LeaveType',
                        text: 'Leave Type',
                        type: 'text',
                    },
                    {
                        name: 'StartDate',
                        text: 'Start Date',
                        type: 'text',
                    },
                    {
                        name: 'EndDate',
                        text: 'End Date',
                        type: 'text',
                    },
                    {
                        name: 'NumberLeave',
                        text: 'Number Leave',
                        type: 'text',
                    },
                    {
                        name: 'SubmissionDate',
                        text: 'Submission Date',
                        type: 'text',
                    },
                    {
                        name: 'Status',
                        text: 'Status',
                        type: 'text',
                    },
                    {
                        name: 'ApprovalDate',
                        text: 'Approval Date',
                        type: 'text',
                    }
                ],

                data: [
                    {
                        StaffId: '1',
                        Name: 'Razak',
                        LeaveType: 'Annual Leave',
                        StartDate: '15-07-2017',
                        EndDate: '17-07-2017',
                        NumberLeave:'3',
                        SubmissionDate: '10-07-2017',
                        Status: 'Approve',
                        ApprovalDate :'12-07-2017'
                    },
                    {
                        StaffId: '1',
                        Name: 'Razak',
                        LeaveType: 'Annual Leave',
                        StartDate: '21-11-2017',
                        EndDate: '23-11-2017',
                        NumberLeave: '3',
                        SubmissionDate: '15-11-2017',
                        Status: 'Reject',
                        ApprovalDate :'16-11-2017'
                    }
                ]
            }
        ]

    }],
    functions: {
        init: function () {
            xg.ajax({
                url: [],
                type: 'GET',
                data: 'text'
            }).done(function (resp, status, xhr) {
                //console.log('resp', resp, 'status', status, 'xhr', xhr);
                xg.populate({
                    undefined: resp
                })
            }).fail(function (err) {
                console.error(err);
            });
        },
        goToProfile: function () {

        },
        signOut: function () {

        },
        doubleClick: function (row) {
            alert(row);
        },
        hideGrid: function () {
            $('[xg-field="gridCustomer"]').hide();
        },
        showGrid: function () {
            $('[xg-field="gridCustomer"]').show();
        },
        hideRow: function () {
            xg.hideRow('undefinedRow');
        },
        showRow: function () {
            xg.showRow('undefinedRow');
        }
    }
});