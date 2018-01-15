nexigo.widget({
    text: 'List Requests',
    toolbars: [

    ],
    views: [
        {
            type: 'row',
            panels: [{
                name: 'panel1',
                offset: 1,
                fields: [
                    {
                        type: 'fieldRow',
                        fields: [{
                            name: 'ID',
                            text: 'Leave Request ID',
                            cols: 6,
                            readonly: true,
                        }, {
                            name: 'Name',
                            text: 'Name',
                            cols: 6,
                            readonly: true,
                        }]
                    },
                    {
                        type: 'fieldRow',
                        fields: [{
                            name: 'StartDate',
                            text: 'StartDate',
                            cols: 6,
                            readonly: true,
                        }, {
                            name: 'EndDate',
                            text: 'EndDate',
                            cols: 6,
                            readonly: true,
                        }]
                    },
                    {
                        type: 'fieldRow',
                        fields: [{
                            name: 'Category',
                            text: 'LeaveType',
                            cols: 6,
                            readonly: true,
                        }, {
                            name: 'DaysLeave',
                            text: 'DaysLeave',
                            cols: 6,
                            readonly: true,
                        }]
                    },
                    
                    {
                        type: 'fieldRow',
                        fields: [{
                            name: 'Submission',
                            text: 'Submission Date',
                            cols: 6,
                            readonly: true,
                        }]
                    },
                    {
                        type: 'fieldRow',
                        fields: [{
                            name: 'TaskId',
                            text: 'Task Id',
                            cols: 6,
                            readonly: true,
                        }, {
                            name: 'ProcessId',
                            text: 'Process Id',
                            cols: 6,
                            readonly: true,
                        }]
                    },
                    {
                        type: 'buttons',
                        offset: 5,
                        buttons: [
                            { name: 'Approve', text: 'Approve', icon: 'fa-save', cssClass: 'xg-btn', action: 'Approve' },
                            { name: 'Disappove', text: 'Disappove', icon: 'fa-undo', offset: 2, cssClass: 'xg-btn-danger', action: 'Disapprove' },
                        ]
                    },
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
                                name: 'SubmitterName',
                                text: 'Submitter Name',
                                type: 'text'
                            },
                            {
                                name: 'Name',
                                text: 'Requester',
                                type: 'text'
                            },
                            {
                                name: 'ProcessId',
                                text: 'ProcessId',
                                type: 'text'
                            },
                            {
                                name: 'TaskId',
                                text: 'Task Id',
                                type: 'text'
                            },
                            {
                                name: 'CreateDate',
                                text: 'CreateDate',
                                type: 'text'
                            },
                            {
                                name: 'DocumentHolder',
                                text: 'Document Holder',
                                type: 'text'
                            },
                            {
                                name: 'Position',
                                text: 'Position',
                                type: 'text'
                            },
                            {
                                name: 'Category',
                                text: 'Category',
                                type: 'text'
                            },
                            {
                                name: 'Approve',
                                text: 'Approve',
                                type: 'fileLink',
                                width: 65,
                                template: '<a href="javascript:void(0);" onclick = "xg.call(\'Approve\',\'#: TaskId #\',\'#: ProcessId #\');" target="_blank">Approve</a>'
                                //template: '<button class="xg-btn has-icon xg-btn-default" onclick = "xg.call(\'All\',\'#: VendorId #\');">Edit</button>'
                            },
                            {
                                name: 'Disapproove',
                                text: 'Disapproove',
                                type: 'fileLink',
                                width: 65,
                                template: '<a href="javascript:void(0);" onclick = "xg.call(\'Disapprove\',\'#: TaskId #\',\'#: ProcessId #\');" target="_blank">Disapprove</a>'
                                //template: '<button class="xg-btn has-icon xg-btn-default" onclick = "xg.call(\'All\',\'#: VendorId #\');">Edit</button>'
                            },
                        ],
                        //data: 'http://localhost:31602/api/FormLeave/ReadAll',
                    }]
            }]
        }
    ],
    functions: {

        doubleClick: function (fieldRow) {
            //xg.loading.show();
            console.log(fieldRow);
            xg.populate(fieldRow);          
            //xg.loading.hide();
            window.ProcessId = fieldRow.ProcessId;
            window.TaskId = fieldRow.TaskId;
            
        },

        init: function (xg, callback) {
            $('.home').removeClass('hide');
            $('.Approver').removeClass('hide');
            $('.Report').removeClass('hide');
            $('.LogOut').removeClass('hide');
            if (window.ID) {
                $.get('http://localhost:31602/api/FormLeave/GetTaskList?ID=' + window.ID, function (result) {
                    console.log(result);
                    if (result.success) {
                        xg.each(result.data, function (item, index) {
                            xg.grid.addRow('tasklist-grid', item);
                        });
                    }
                })
            }
            else {
                xg.navigate("home/Login");
            }
            callback();
        },

        Approve: function (value) {
            xg.loading.show();
            var req = xg.serialize();
            req.Action = "Approve";
            req.ID = window.ID;
            //req.TaskId = value;
            req.TaskId = window.TaskId;
            req.ProcessId = window.ProcessId;
            xg.ajax({
                url: 'http://localhost:31602/api/FormLeave/SubmitTask',
                type: 'POST',
                data: JSON.stringify(req),
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    xg.loading.show();
                    console.log(data);
                    console.log('approve');
                    xg.loading.hide();
                },
                complete: function () {
                    console.log("complete");
                    xg.loading.hide();
                    xg.navigate("home/Login");
                }
            });
        },

        Disapprove: function (value) {
            xg.loading.show();
            var req = xg.serialize();
            req.Action = "Disapprove";
            req.ID = window.ID;
            //req.TaskId = value;
            req.TaskId = window.TaskId;
            req.ProcessId = window.ProcessId;
            xg.ajax({
                url: 'http://localhost:31602/api/FormLeave/SubmitTask',
                type: 'POST',
                data: JSON.stringify(req),
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    xg.loading.show();
                    console.log(data);
                    console.log('disapprove');
                    xg.loading.hide();
                },
                complete: function () {
                    console.log("complete");
                    xg.loading.hide();
                    xg.navigate("home/Login");
                }
            });
        }
    }
});