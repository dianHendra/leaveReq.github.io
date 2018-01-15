// var data = [{
//     Objective: 'Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs ',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value\n jasldkjfl sdlfjas dlfjalsd fasdf \n lasjkdf',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, {
//     Objective: 'Volume Target',
//     KPI: '1 Billion',
//     Target: 'Due',
//     Weight: 50,
//     Activity: 'Activity Value',
//     Timing: new Date()
// }, ]

var data = [{
    Objective: 'Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs Multi line value \nline 2 here lakdjf lasjdf asdfj asldf jas dfs ',
    KPI: '1 Billion',
    Target: 'Due',
    Weight: 50,
    Activity: 'Activity Value\n jasldkjfl sdlfjas dlfjalsd fasdf \n lasjkdf',
    Timing: new Date()
} ]


nexigo.widget({
    text: 'Table Template',
    views: [{
        name: 'panelTable',
        type: 'panel',
        fields: [{
            type: 'button',
            text: 'Show More',
            action: function() {
                xg.table.instance('table1').toggleClass('singleline');
                //$('textarea').autogrow();
            }
        }, {
            type: 'table',
            name: 'table1',
            cssClass: 'custom-table singleline',
            fields: [{
                    type: 'text',
                    name: 'Objective',
                    text: 'Objective',
                    renderer: function(col, value) {
                        return '<textarea>' + value + '</textarea> '
                    },
                    serializer: function(el) {
                        return $(el).find('textarea').html()
                    }
                }, {
                    type: 'text',
                    name: 'KPI',
                    text: 'KPI',
                    renderer: function(col, value) {
                        return '<textarea>' + value + '</textarea> '
                    },
                    serializer: function(el) {
                        return $(el).find('textarea').html()
                    }
                }, {
                    type: 'text',
                    name: 'Target',
                    text: 'Target',
                    renderer: function(col, value) {
                        return '<textarea>' + value + '</textarea> '
                    },
                    serializer: function(el) {
                        return $(el).find('textarea').html()
                    }
                }, {
                    type: 'text',
                    name: 'Activity',
                    text: 'Activity',
                    renderer: function(col, value) {
                        return '<textarea>' + value + '</textarea> '
                    },
                    serializer: function(el) {
                        return $(el).find('textarea').html();
                    }
                }, {
                    type: 'numeric',
                    name: 'Weight',
                    text: 'Weight',
                    width: 50,
                    renderer: function(col, value) {
                        return '<input type="text"  value="' + value + '"/>'
                    },
                    serializer: function(el) {
                        return parseInt($(el).find('input').val());
                    }
                }, {
                    type: 'date',
                    name: 'Timing',
                    text: 'Timing',
                    width: 120,
                    format: 'YYYY-MM-DD',
                    renderer: function(col, value, options) {
                        return '<input class="datetime" value="' + value + '" type="text"/>'
                    },
                    serializer: function(el) {
                        return (new moment($(el).find('input').val())).toDate();
                    }
                }, {
                    type: 'button',
                    name: 'ActionEdit',
                    text: '',
                    cssClass: 'action edit',
                    align: 'center',
                    width: 24,
                    icon: 'fa-edit',
                    buttonType: 'success'
                }, {
                    type: 'button',
                    name: 'ActionRemove',
                    text: '',
                    cssClass: 'action delete',
                    align: 'center',
                    width: 24,
                    icon: 'fa-trash',
                    buttonType: 'danger'
                },

            ],
            data: data,
            onDataBound: function() {
                $('textarea').autogrow();
                var format = xg.page.fields['table1'].fields[5].format;
                $('.datetime').datetimepicker({
                    format: format
                });
            }
        }]
    }],
    functions: {
        init: function(xg, callback) {
            var table = xg.table.instance('table1');
            table.on('click', '.action.edit', function() {
                debugger;
                xg.message('Edit Action');
            });
            table.on('click', '.action.delete', function() {
                $(this).parents('tr').hide(300, function() {
                    $(this).remove();
                });
            });

            table.on('focus', 'textarea,input[type="text"]', function() {
                $(this).parent().toggleClass('focus', true);
            });
            table.on('blur', 'textarea,input[type="text"]', function() {
                $(this).parent().toggleClass('focus', false);
                $(this).scrollTop(0);
            });
            callback();
        }
    }
});