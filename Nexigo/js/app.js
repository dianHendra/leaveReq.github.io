var db = {
    menu: [
        {
            text: 'HOME',
            icon: 'fa-home',
            clas: 'home',
            link: 'home/Login'
        },
        {
          text: 'FORM INPUT LEAVE REQUEST',
          icon: 'fa-file-o',
          clas: 'LeaveReq',
          link: 'home/formLeave'
        },
        {
            text: 'LEAVE REQUESTS ',
            icon: 'fa-list',
            clas: 'Approver',
            link: 'home/Approver'
        },
        {
            text: 'REPORTS ',
            icon: 'fa-list',
            clas: 'Report',
            link: 'home/Report'
        },
        /*{
          text: 'Layout',
          icon: 'fa-columns',
          menus: [
              {
                link: 'demo/panel',
                text: 'Panel'
              }
          ]
        }, 
        {
          text: 'Text',
          icon: 'fa-edit',
          menus: [
              {
                link: 'demo/text',
                text: 'Text Input'
              }, {
                link: 'demo/email',
                text: 'Text Email'
              }, {
                link: 'demo/password',
                text: 'Text Password'
              }, {
                link: 'demo/textarea',
                text: 'Text Area'
              }, {
                link: 'demo/numeric',
                text: 'Text Numeric'
              }, {
                link: 'demo/tooltip',
                text: 'Text Tooltip and Info'
              }
          ]
        }, {
          text: 'Picker',
          icon: 'fa-calendar',
          menus: [
              {
                link: 'demo/datepicker',
                text: 'Datepicker'
              }
          ]
        }, {
          text: 'Check & Radio',
          icon: 'fa-check',
          menus: [
              {
                link: 'demo/checkbox',
                text: 'Checkbox'
              }, {
                link: 'demo/radio',
                text: 'Radio'
              }
          ]
        }, {
          text: 'Collection',
          icon: 'fa-list',
          menus: [
              {
                link: 'demo/select',
                text: 'Select'
              }, {
                link: 'demo/list',
                text: 'List'
              }, {
                link: 'demo/autocomplete',
                text: 'Auto Complete'
              }
          ]
        }, {
          text: 'Grid',
          icon: 'fa-table',
          menus: [
              {
                link: 'demo/grid/grid_basic',
                text: 'Basic'
              },
              {
                link: 'demo/grid/table',
                text: 'Table'
              }
          ]
        }, {
          text: 'Tools',
          icon: 'fa-wrench',
          menus: [
              {
                link: 'demo/popup',
                text: 'Modal popup'
              }, {
                link: 'demo/dialog',
                text: 'Message Dialog'
              }, {
                link: 'demo/content',
                text: 'Hide Show Content'
              }, {
                link: 'demo/tab',
                text: 'Tab'
              }, {
                link: 'demo/toolbar',
                text: 'Toolbar',
              },
              {
                link: 'demo/file',
                text: 'File Upload',
              }, {
                link: 'demo/approvalflow',
                text: 'Approval Flow',
              }
          ]
        }, {
          text: 'Labs',
          icon: 'fa-edit',
          menus: [
              {
                link: 'demo/labs/lab1',
                text: 'Lab 01'
              }, {
                link: 'demo/labs/lab2',
                text: 'Lab 02'
              }, {
                link: 'demo/labs/lab3',
                text: 'Lab 03'
              }, {
                link: 'demo/labs/lab4',
                text: 'Lab 04'
              }
          ]
        },  */
        {
            link: 'home/Login',
            text: 'Logout',
            clas: 'LogOut',
            icon: 'fa-code'
        } 
  ]
};


(function () {
    nexigo.config.widgetView = '[data-name=content]';
    nexigo.config.jqxlibbase = 'libs/jqx/';
    nexigo.config.kendolibbase = 'libs/kendo/';
    nexigo.config.viewBasePath = '';
    nexigo.config.viewDefault = 'home/Login';
    nexigo.menu('[class="sg-header-menu"]', {
        theme: 'ccai',
        data: db.menu,
        onClick: function (name, link) {
            if (link === 'showcode') {
                var url = window.location.hash.substr(1) || 'text';
                $('body').addClass('show-code-editor');
                $.get('js/views/' + url + '.js', function (r) {
                    $('body').addClass('show-code-editor');
                    ace.edit('code-editor').getSession().setValue(r);
                })
            } else {
                xg.navigate(link);
            }
        }
    });

    var url = window.location.hash.substr(1) || nexigo.config.viewDefault || 'home';
    if (url !== 'showcode') {
        if (window.location.hash.substr(1) === url) xg.loadPage(url);
        else xg.navigate(url);
    };

    nexigo.auth.config.loginPage = 'demo/text';
}());

(function () {
    var editor = ace.edit('code-editor');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/javascript');

    $('#close-code-editor').on('click', function () {
        $('body').removeClass('show-code-editor');
        eval(editor.getValue());
    })
}());
