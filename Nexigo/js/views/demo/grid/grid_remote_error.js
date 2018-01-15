xg.widget({
  text: 'Remote Error',
  toolbars: [{
      text: 'Unauthorized',
      icon: 'fa-bolt',
      action: 'Unauthorized'
  }, {
      text: 'Internal Server Error',
      icon: 'fa-bolt',
      action: 'InternalError'
  }, {
      text: 'Bad Request',
      icon: 'fa-bolt',
      action: 'BadRequest'
  }],
  contents: [{
    name: 'pnlGrid',
    fields: [{
      name: 'grid1',
      type: 'grid',
      url: 'api/grid/error',
      suppressUnauthorized: false,
      loadError: function(jqXHR, status, error) {
        alert(status + ' ' + jqXHR.status + ': ' + error);
      },
      onRowChanged: function (e, idx, row) {
        xg.populate('pnlEdit', row);
      },
      option: {
        sortable: true,
        filterable: true,
        columnsreorder: true,
        columnsresize: true,
        selectionmode: 'multiplecellsextended'
      },
      fields: [{
        name: 'FirstName',
        text: 'First Name',
        width: 120
      }, {
        name: 'LastName',
        text: 'Last Name',
        width: 120
      }, {
        name: 'Type',
        text: 'Type',
        width: 90
      }, {
        name: 'ProductName',
        text: 'ProductName'
      }, {
        name: 'Available',
        text: 'Available',
        align: 'center',
        cellsalign: 'center',
        type: 'boolean',
        width: 80
      }, {
        name: 'ExpiredDate',
        text: 'Expired Date',
        align: 'center',
        type: 'date',
        format: 'DD MMM YYYY',
        width: 120
      }, {
        name: 'Quantity',
        text: 'QTY',
        align: 'right',
        type: 'numeric',
        digit: 0,
        width: 60
      }, {
        name: 'Price',
        text: 'Price',
        align: 'right',
        cellsformat: 'c2',
        type: 'numeric',
        digit: 2,
        width: 60
      }]
    }]
  }],
  methods: {
    Unauthorized: function() {
      xg.grid.refresh('grid1', { code: 401 }, true);
    },
    BadRequest: function() {
      xg.grid.refresh('grid1', { code: 400 }, true);
    },
    InternalError: function() {
      xg.grid.refresh('grid1', { code: 500 }, true);
    }
  }
});
