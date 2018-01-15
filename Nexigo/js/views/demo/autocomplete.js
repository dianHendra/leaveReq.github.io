nexigo.widget({
    text: 'Auto Complete',
    toolbars: [{
        text: 'Populate',
        action: 'populate'
    }, {
        text: 'Serialize',
        action: 'serialize'
    },
    {
        text: 'Refresh with parameter',
        action: 'refreshParam'
    }],
    views: [{
        name: 'panel1',
        fields: [{
            type: 'fieldRow',
            fields: [

            {
                name: 'autoComplete_basic',
                text: 'Basic',
                type: 'text',
                placeholder: 'Pick a media...',
                noResultInfo: true,
                noResultText: 'Vendor tidak ditemukan',
                data: {
                    url: 'http://localhost:33235/api/hello/selectdata',
                    method: 'POST',
                },
                onChange: function(val) {
                    xg.call('Log', 'Value changed - ' + val);
                },
                cols: 6
            }, {
                name: 'autoComplete_template',
                text: 'Item Template',
                type: 'autoComplete',
                valueField: 'value',
                labelField: 'name',
                create: true,
                required: true,
                searchField: 'name',
                placeholder: 'Pick a media...',
                render: {
                    option: function(item, escape) {
                        return '<div><span style="font-weight: bold;"><i class="fa ' + (item.icon || 'fa-archive') + '"></i> ' + item.name + '</span><br/>' + '<span style="font-weight: italic; font-size: smaller; color: #d3d3d3">' + item.description + '</span></div>';
                    }
                },
                data: [{
                    value: 'media1',
                    name: 'Newspapper',
                    icon: 'fa-newspaper-o',
                    description: 'A newspaper is a periodical publication containing news, other informative articles (listed below), and usually advertising.'
                }, {
                    value: 'media2',
                    name: 'Radio',
                    icon: 'fa-music',
                    description: 'Radio is the radiation (wireless transmission) of electromagnetic energy through space.'
                }, {
                    value: 'media3',
                    name: 'TV',
                    icon: 'fa-image',
                    description: 'A Television, commonly referred to as TV or Tele is a telecommunication medium used for transmitting sound with moving images in monochrome (black-and-white), colour, or in three dimensions.'
                }, {
                    value: 'media4',
                    name: 'Internet',
                    icon: 'fa-cloud',
                    description: 'The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite (TCP/IP) to link several billion devices worldwide.'
                }, {
                    value: 'media5',
                    name: 'Email',
                    icon: 'fa-envelope-o',
                    description: 'Electronic mail, most commonly referred to as email or e-mail since c 1993,[2] is a method of exchanging digital messages from an author to one or more recipients.'
                }, {
                    value: 'media6',
                    name: 'Social Media',
                    icon: 'fa-twitter',
                    description: 'Social media are computer-mediated tools that allow people to create, share or exchange information, ideas, and pictures/videos in virtual communities and networks.'
                }],
                onChange: function(val) {
                    xg.call('Log', 'Value changed - ' + val);
                },
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'autoComplete_basic2',
                text: 'Disabled',
                type: 'autoComplete',
                disabled: true,
                data: [{
                    value: 'media1',
                    text: 'Newspapper',
                }, {
                    value: 'media2',
                    text: 'Radio',
                }, {
                    value: 'media3',
                    text: 'TV',
                }, {
                    value: 'media4',
                    text: 'Internet',
                }, {
                    value: 'media5',
                    text: 'Email',
                }, {
                    value: 'media6',
                    text: 'Social Media',
                }],
                onChange: function(val) {
                    xg.call('Log', 'Value changed - ' + val);
                },
                cols: 6
            }, {
                name: 'autoComplete_remote',
                text: 'Remote Data',
                type: 'autoComplete',
                url: '/api/select/media?q=',
                placeholder: 'Three words to search...',
                sortField: 'text',
                minLength: 1,
                onChange: function(val) {
                    xg.call('Log', 'Value changed - ' + val);
                },
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                type: 'autoComplete',
                text: 'Multiple value',
                name: 'multi',
                multiple: true,
                persist: true,
                cols: 6,
                data: [{
                    value: 'media1',
                    text: 'Newspapper',
                }, {
                    value: 'media2',
                    text: 'Radio',
                }, {
                    value: 'media3',
                    text: 'TV',
                }, {
                    value: 'media4',
                    text: 'Internet',
                }, {
                    value: 'media5',
                    text: 'Email',
                }, {
                    value: 'media6',
                    text: 'Social Media',
                }],
            }, {
                type: 'autoComplete',
                name: 'multiRemote',
                text: 'Multiple with remote value',
                multiple: true,
                cols: 6,
                url: '/api/select/media?q='
            }]
        }, {
            type: 'textarea',
            name: 'TextLog',
            readonly: true
        }]
    }],
    functions: {
        init: function() {},
        save: function() {},
        populate: function() {
            var model = {
                autoComplete_basic: 'media3',
                autoComplete_basic2: 'media4',
                autoComplete_template: 'media2',
                autoComplete_remote: 'media1',
                TextLog: '-'
            };
            xg.populate(model);
        },
        serialize: function() {
            var data = xg.serialize();
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
        refreshParam: function (){

        },
        Log: function(data) {
            $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + data + '\n');
        },
    },
})