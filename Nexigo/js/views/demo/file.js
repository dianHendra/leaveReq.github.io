xg.widget({
    views: [{
        name: 'panel1',
        text: 'Inline single or multiple file',
        fields: [{
            name: 'PK_Dokumen',
            required: true,
            type: 'file',
            filter: ["jpg", "png"],
            multiple: true,
            filterMessage: 'Hanya dokumen dengan tipe JPG dan PDF yang dapat diunggah',
            buttonText: 'Pilih',
            clearText: 'Hapus',
            maxSize: 2,
            maxSizeMessage: 'Ukuran lampiran maksimum ',
            cols: 6,
            tooltip: {
                showIcon: true,
                tooltip: 'Lampiran dalam format JPG dan PDF dengan ukuran maksimum 2MB'
            }
        }, ]
    }, {
        name: 'panel2',
        text: 'Table style',
        fields: [{
            type: 'button',
            text: 'Upload listed files',
            name: 'ButtonUploadFiles',
            action: 'uploadMultiFiles'
        }, {
            name: 'FileMultiTable',
            icon: 'fa-plus',
            text: 'Add Files',
            data: {
                url: 'http://localhost:2662/api/Hello/SavedAttachment',
                data: {
                    id: 'asdf'
                }
            },
            delete: 'http://localhost:2662/api/Hello/DeleteAttachment',
            cols: 4,
            filter: ['png'],
            filterMessage: 'Hanya dokumen dengan tipe JPG dan PDF yang dapat diunggah',
            filterNotify: function(files) {
                xg.message('Hanya dokumen dengan tipe JPG dan PDF yang dapat diunggah: ' + files.join(' '));
            },
            type: 'upload',
        }]
    }, {
        name: 'panel3',
        text: 'No GUI Uploader',
        fields: [{
            name: 'ButtonUpload',
            type: 'button',
            icon: 'fa-upload',
            cssClass: 'xg-btn-success',
            text: 'Upload',
            action: function() {
                xg.uploader.upload({
                    data: {
                        type: 'aaaaa'
                    },
                    url: 'http://localhost:2662/api/Hello/SaveAttachment'
                }, function(data) {
                    xg.message('File uploaded');
                    console.log(data);
                });
            }
        }]
    }],

    functions: {
        uploadMultiFiles: function() {
            var formData = new FormData();
            var params = {
                anotherParam: 'value',
                DeletedFiles: xg.upload.deletedFiles('FileMultiTable')
            };
            xg.appendToFormData(formData, params);
            xg.upload.appendToFormData('FileMultiTable', formData);

            xg.ajax({
                url: 'http://localhost:2662/api/Hello/SaveAttachment',
                data: formData,
                type: 'POST',
                contentType: false,
                processData: false,
                cache: false,
                success: function(data) {

                },
                complete: function() {
                    xg.uploader.files = new Array();
                }
            });

        }
    }
});
