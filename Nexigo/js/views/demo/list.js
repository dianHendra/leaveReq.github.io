nexigo.widget({
    text: 'List',
    views: [{
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'list_left',
                text: 'Sample List 1_left',
                type: 'list',
                cols: 6,
                template: [
                    '<label style="width:40px">{{field1}}</label>',
                    '<input type="text" value="test demo" style="width:60px"/>',
                    '<i class="fa fa-check"></i>',
                    '<input type="text" value="test"/>',
                ],
                data: [{
                    field1: '1001'
                }, {
                    field1: '1002'
                }, {
                    field1: '1003'
                }, {
                    field1: '1004'
                }, {
                    field1: '1005'
                }, {
                    field1: '1006'
                }]
            }, {
                name: 'list_right',
                text: 'Sample List 1_right',
                type: 'list',
                cols: 6,
                template: [
                    '<label style="width:40px">{{field1}}</label>',
                    '<label style="width:50px">{{field2}}</label>',
                    '<label style="width:80px">{{field3}}</label>',
                    '<input type="text" value="test"/>',
                ],
                data: [{
                    field1: '2001',
                    field2: '2010',
                    field3: '2015',
                }, {
                    field1: '2002',
                    field2: '',
                    field3: '',
                }, {
                    field1: '2003',
                    field2: '',
                    field3: '',
                }, {
                    field1: '2004',
                    field2: '',
                    field3: '',
                }, {
                    field1: '2005',
                    field2: '',
                    field3: '',
                }, {
                    field1: '2006',
                    field2: '',
                    field3: '',
                }]
            }]
        }, {
            type: 'textarea',
            name: 'TextLog',
            readonly: true
        }]
    }],
})
