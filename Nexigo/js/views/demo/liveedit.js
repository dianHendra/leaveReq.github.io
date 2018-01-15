xg.widget({
    text: 'Live Editor',
    views: [{
        text: 'Live Editor',
        fields: [
        {
            type: 'select',
            name: 'select1',
            text: 'Wake Up',
            cols: 5,
            data: [
                {text: 'Option 1', value: '1'},
                {text: 'Option 2', value: '1'},
                {text: 'Option 3', value: '1'},
                {text: 'Option 4', value: '1'},
                ]
        },
        {
            text: 'Test',
            name: 'textText'
        },
        {
        	type: 'button',
        	text: 'Send',
        	action: function (){
        		xg.variables.chatHub.server.send('A Message');
        	}
        }]
    }],
    functions: {
        init: function(xg, callback) {
        	// if (!xg.variables) xg.variables = {};
         //    //Create hub connection 
         //    var connection = $.connection.hub;
         //    xg.variables.chatHub = $.connection.chatHub;

         //    //Handle a broadcast 
         //    xg.variables.chatHub.client.broadcast = function(broadcastMessage) {
         //        console.log(broadcastMessage);
         //    };

         //    $.connection.hub.start().done(function() {
         //    	console.log('Connected to server!');
         //    });
            if (callback) callback();
        }
    }
})