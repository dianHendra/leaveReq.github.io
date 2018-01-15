nexigo.widget({
    text: 'Form Input Leave Request',
    views: [{
        type: 'panel',
        inline: true,
        name: 'SinglePanel',
        text: 'Employee Information',
        collapsible: true,
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'Name',
                text: 'Name',
                cols: 6,
                readonly: true,
            }, {
                name: 'Staff_id',
                text: 'Staff Id',
                cols: 6,
                readonly: true,
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'Supervisor',
                text: 'Supervisor',
                readonly: true,
                cols: 6
            }, {
                name: 'Email',
                text: 'Email',
                cols: 6,
                readonly: true,
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'Location_Code',
                text: 'Location',
                cols: 6,
                readonly: true,
            }, {
                name: 'Joined_date',
                text: 'Joined Date',
                cols: 6,
                 readonly: true,
            }]
        }]
    }, {
        type: 'panel',
        inline: true,
        name: 'SinglePanel',
        text: 'Leave Details',
        collapsible: true,
        fields: [
            {
                type: 'fieldRow',
                fields: [
                    {
                        name: 'LeaveType',
                        text: 'Leave Type',
                        readonly: true,
                        cols: 5,
                        //data: 
                    },
                    {
                        name: 'Balance', text: 'Balance', cols: 2, readonly: true,
                    },
                ]
            },
            //ROW 2
            {
                type: 'fieldRow',
                fields: [
                    { name: 'StartDate', text: 'Start Date', cols: 5,readonly: true },
                    { name: 'EndDate', text: 'End Date', cols: 5,readonly: true },
                ]
            },
            //ROW 3
           
            ////////////////////////-------------------------- ROW 4 --------------------------////////////////////////
            { name: 'DaysLeave', text: 'Number Of Days Leave', cols: 3, disabled: true },
            ////////////////////////-------------------------- ROW 5 --------------------------////////////////////////
            { name: 'RemarksDarisana', text: 'Remarks', type: 'textarea', readonly: true },
            ////////////////////////-------------------------- ROW 5 --------------------------////////////////////////
            { name: 'SubmissionDate', text: 'Submission Date', cols: 4, disabled: true },
            ////////////////////////-------------------------- Button--------------------------////////////////////////
            {
                type: 'panel',
                inline: true,
                name: 'SinglePanel',
                text: 'Leave Approval',
                collapsible: true,
                fields: [
                    { name: 'ProccessID', text: 'Proccess ID', cols: 4, disabled: true },
                    {
                        name: 'Status',
                        text: 'Action',
                        type: 'select',
                        cols: 4,
                        tooltip: 'Media list',
                        data: [{
                            value: 'Approved',
                            text: 'Approve',
                        }, {
                            value: 'Reject',
                            text: 'Reject',
                        }
                        ],
                        onChange: function (val, text) {
                            xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                        }
                    },
                    { name: 'Remarks', text: 'Approval Remarks', type: 'textarea' },
                    { name: 'DateNow', text: 'Approval Date', cols: 4, disabled: true},
                    {
                        type: 'buttons',
                        buttons: [
                            { name: 'Submit', text: 'Submit', icon: 'fa-save', cssClass: 'xg-btn-info', action: 'Submit' },
                            { name: 'Reset', text: 'Reset', icon: 'fa-undo', cssClass: 'xg-btn-danger' },
                        ]
                    }
                ]
            }
        ]

        }],
    functions: {
        init: function (xg, callback) {
            xg.loading.hide();
            alert(window.PID);
            xg.ajax({
                url: 'http://localhost:31602/api/User/GetEmployeInformation?ID=' + window.PID,
                data: window.PID,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    //if (res === null) {
                    //    xg.navigate('PR/Login');
                    //}
                
                    console.log("Ini udah masuk getemployeinfo " + result);
                    var temp = JSON.parse(result);
                    xg.populate({
                        Name: temp.User.Name,
                        Supervisor: temp.SPV.Name,
                        Location_Code: temp.LOC,
                        Staff_id: temp.User.ID,
                        Email: temp.User.Email,
                        Joined_date: temp.JOIN,
                        LeaveType : temp.LR.LeaveType,
                        DaysLeave: temp.LR.DaysLeave,
                        EndDate: temp.End,
                        StartDate: temp.Start,
                        RemarksDarisana : temp.LR.Remarks,
                        SubmissionDate: temp.SubmissionDate,
                        DateNow: temp.DateNow,
                        ProccessID: temp.LR.ProccessID
                    });
                },
                complete: function () {
                    console.log("Complete GetemployeeName");
                    xg.loading.hide();
                }
            });
        },

        Submit: function () {
            xg.loading.show();
            var res = xg.serialize();
            xg.ajax({
                url: 'http://localhost:31602/api/User/ApproveRequest',
                data: JSON.stringify(res),
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log(data);
                },
                complete: function () {
                    console.log("complete");
                    xg.notify({ type: 'success', text: 'Submit success' });
                    xg.loading.hide();
                    xg.navigate('makers/home');
                }
            });
        },
    }
}); 