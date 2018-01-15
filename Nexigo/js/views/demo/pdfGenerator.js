nexigo.widget({
    text: 'PDF Generator',
    toolbars: [{
        text: 'Generate',
        icon: 'fa-file-pdf-o',
        action: 'GeneratePdf'
    }],
    views: [{
        name: 'panel1',
        text: 'Content',
        fields: [{
            type: 'textarea',
            name: 'Content'
        }]
    }],
    functions: {
        GeneratePdf: function() {
            var customContent = ['Lorem Ipsum de amet', {
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: ['*', 'auto', 100, '*'],
                    body: [
                        ['First', 'Second', 'Third', 'The last one'],
                        ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
                        [{
                            text: 'Bold value',
                            bold: true
                        }, 'Val 2', 'Val 3', 'Val 4']
                    ]
                }
            }];
            xg.pdf.download(customContent, 'file.pdf');
        }
    }
})