var string = "url('http://ak6.picdn.net/shutterstock/videos/4805756/thumb/1.jpg')"

xg.widget({
    // text: 'Login Vendor',
    clas: 'login',
    views: [
        {
        text: 'Login Employee',
        icon: 'fa-',
        cols: 4,
        offset: 9,
        clasContent: 'login',
        fields: [
            { name: 'ID', text: 'Employee ID', required: true },
            { name: 'Password', text: 'Password', type: 'password', required: true }
        ]
        },
        {
        cols: 6,
        offset: 10,
       
        fields: [
            { name: 'Login', type: 'button', text: 'Login',  cssClass: 'xg-btn', offset: 2, stretch: true, cols: 4, action: 'login' },
            { type: 'button', text: 'Change password', offset: 2, stretch: true, cols: 4 }
        ]

        }
    ],


    functions: {
        init: function (xg, callback) {
            $('.LogOut').addClass('hide');
            $('.LeaveReq').addClass('hide');
            $('.Approver').addClass('hide');
            $('.Report').addClass('hide');

            window.ID = null;

            $(document).keyup(function (event) {
                if (event.keyCode === 13) {
                    $('[xg-field="Login"]').click();
                }
            });
            callback();
        },
        login: function () {
            if (xg.validate()) {
                var tempString = "";
                var req = xg.serialize();
                window.ID = req.ID;
                xg.ajax({
                    url: 'http://localhost:31602/api/Login/Log',
                    type: 'POST',
                    data: JSON.stringify(req),
                    contentType: "application/json; charset=utf-8",
                    success: function (result) {
                        console.log(result);
                        tempString = result;
                    },

                    complete: function () {

                        if (tempString === "Not Found") {
                            alert("akun tidak ditemukan");
                        }
                        else {
                            if (tempString === "Dian") {
                                xg.navigate('home/Approver');
                                console.log("complete Login");
                            } else {
                                xg.navigate('home/formLeave');
                                console.log("complete Login");
                            }

                        }

                    }
                });
            } else {
                alert('Please Insert your Account')
            }          
        },

        logout: function () {
            window.loginId = '';
        }
    }
})
