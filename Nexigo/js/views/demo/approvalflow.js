var data = [{
    ActivityName: 'Activity 1',
    Position: 'Posisi 1',
    ParticipantName: 'Jhon Doe',
    CompletedDate: '21 Maret 2016',
    Status: 'Approved',
    StatusName: 'Approved',
},
{
    ActivityName: 'Activity 2',
    Position: 'Posisi 2',
    ParticipantName: 'Jhon Doe 2',
    CompletedDate: '23 Maret 2016',
    Status: 'Approved',
    StatusName: 'Approved',
},
{
    ActivityName: 'Activity 3',
    Position: 'Posisi 3',
    ParticipantName: 'Jhon Doe 3',
    CompletedDate: '27 Maret 2016',
    Status: 'Approved',
    StatusName: 'Approved',
},
{
    ActivityName: 'Activity 4',
    Position: 'Posisi 4',
    ParticipantName: 'Jhon Doe 4',
    CompletedDate: '1 April 2016',
    Status: 'In Progress',
    StatusName: 'In Progress',
}];

nexigo.widget({
    text: 'Approval Flow',
    toolbars: [{
        text: 'Populate',
        action: 'populate'
    }, {
        text: 'Serialize',
        action: 'serialize'
    }, {
        text: 'Refresh with parameter',
        action: 'refreshParam'
    }],
    views: [{
        name: 'panel1',
        fields: [{
            type: 'approvalFlow',
            name: 'apv1',
            data: data,
        }, ]

    }]
});