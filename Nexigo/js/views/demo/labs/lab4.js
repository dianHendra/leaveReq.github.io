xg.widget({
    views: [{
        name: 'panel1',
        text: 'Registration Form',
        inline: {
            type: 'inline-2'
        },
        fields: [{
                name: 'FirstName',
                text: 'First Name',
                cols: 4
            }, {
                name: 'LastName',
                text: 'Last Name',
                cols: 4
            }, {
                name: 'BirthDate',
                text: 'Birth Date',
                type: 'picker',
                cols: 4,
                format: 'DD-MMM-YYYY'
            }, {
                name: 'Summary',
                text: 'Summary',
                cols: 4,
                type: 'textarea'
            }, {
                type: 'content',
                content: '<div id="captcha_container"></div>'
            }, {
                name: 'FormCaptcha',
                type: 'captcha',
                url: 'api/captcha/generate?length=5'
            }, {
                type: 'button',
                text: 'Register',
                cols: 4,
                style: 'text-align: right;',
                cssClass: 'xg-btn-success',
                action: function() {
                    // upload URL
var ups = 'api/file/upload'; //'http://posttestserver.com/post.php?dir=jsFiddle';

// StackOverflow Logo
// http://sstatic.net/stackexchange/img/logos/so/so-logo.png?v=71aa9dd4a5bb
var b64 = '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';

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
var guid = function() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
};

var uploadFile = function(uploadUrl, base64data, cb) {
    var boundary = '--' + guid();
    var data = '--' + boundary + '\r\n' +
               'Content-Disposition: form-data; name=\"INPUT_NAME\"; filename=\"stackoverflow.png\"\r\n' +
               'Content-Type: application/octet-stream\r\n' +
               'Content-Transfer-Encoding: base64\r\n\r\n' +
               base64data + '\r\n' +
               '--' + boundary + '--';

    var xhr = new XMLHttpRequest();
    // send credentials?
    // xhr.withCredentials = true;
    xhr.addEventListener('readystatechange', function (event) {
        if (this.readyState === this.DONE) {
            if (cb) cb(this.responseText);
        }
    });
    // We define what will happen if the data is successfully sent
  xhr.addEventListener('load', function(event) {
    console.log('Yeah! Data sent and response loaded.');
  });

  // We define what will happen in case of error
  xhr.addEventListener('error', function(event) {
    console.log('Oups! Something goes wrong.');
  });

    xhr.open('POST', uploadUrl, true);
    xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
    xhr.send(data);
};

  console.log('Uploading to ' + ups + '...');
    uploadFile(ups, b64, function(text) {
        console.log(text.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    });
                }
            }, {
                type: 'upload',
                name: 'uploader1',
                icon: 'fa-upload',
                cols: 4,
                data: { url: 'api/file/uploadeds' }
                //uploadUrl: 'http://localhost:53390/api/material/attachment/upload'
            }
        ]
    }],
    methods: {
        init: function() {

        }
    }
})
