nexigo.widget({
  text: 'Panel',
  views: [{
  	fields: [
  	{
      type: 'row',
      panels: [{
        name: 'panel1',
        text: 'Full Panel with Row',        
        fields: [{      	
	      	type: 'content',
	      	content: '<div style="background-color:#ffc"><h1>Panel</h1></div>' 
	      }]
      }]
    }, {
      type: 'panel',
      text: 'Full Panel without Row',
      name: 'panel2',      
      fields: [{      	
      	type: 'content',
      	content: '<div style="background-color:#ffc"><h1>Panel</h1></div>' 
      }]
    },
    {
      type: 'row',       
      panels: [{
        name: 'leftPanel',
        text: 'Left Panel',
        cols: 6,
        fields: [{      	
	      	type: 'content',
	      	content: '<div style="background-color:#ffc"><h1>Panel (cols: 6)</h1></div>' 
	      }]
      }, {
        name: 'rightPanel',
        text: 'Right Panel',
        cols: 6,
        fields: [{      	
	      	type: 'content',
	      	content: '<div style="background-color:#ffc"><h1>Panel (cols: 6)</h1></div>' 
	      }]
      }]
    },
    {
      type: 'panel',
      text: 'Half Panel (centered)',
      name: 'panel1',   
      cols: 6,
      offset: 3,
      fields: [{      	
      	type: 'content',
      	content: '<div style="background-color:#ffc"><h1>Panel (cols: 6, offset: 3)</h1></div>' 
      }]
    },
    {
      type: 'row',       
      panels: [{
        name: 'leftPanel',
        text: 'Left Panel',
        cols: 8,
        fields: [{      	
		      	type: 'content',
		      	content: '<div style="background-color:#ffc"><h2>Panel (cols: 8)</h2></div>' 
		      }, {        	
        	type: 'row',
        	panels: [{
        		name: 'leftPanelPanel1',
        		text: 'Nested Panel',
        		cols: 5,
        		fields: [{      	
			      	type: 'content',
			      	content: '<div style="background-color:#ffc"><h3>Panel (cols: 5)</h3></div>' 
			      }, {
			      	type: 'panel',
			      	fields: [{      	
				      	type: 'panel',
				      	text: 'Nested Nested Panel',
				      	name: 'leftNestedOffsetPanel',
				      	cols: 9,
				      	offset: 2,
				      	fields: [{
					      	type: 'content',
					      	content: '<div style="background-color:#ffc"><h5>Panel (cols: 9, offset: 2)</h5></div>' 
				      	}]
				      }]
			      }]        		
        	}, {
        		name: 'leftPanelPanel2',
        		text: 'Nested Panel',        		
        		cols: 3,
        		fields: [{      	
			      	type: 'content',
			      	content: '<div style="background-color:#ffc"><h3>Panel (cols: 3)</h3></div>' 
			      }]
        	}, {
        		name: 'leftPanelPanel3',
        		text: 'Nested Panel',        		
        		cols: 4,
		        		fields: [{      	
			      	type: 'content',
			      	content: '<div style="background-color:#ffc"><h3>Panel (cols: 4)</h3></div>' 
			      }]
        	}]
        }, {      	
	      	type: 'panel',
	      	text: 'Nested Panel with offset',
	      	name: 'leftOffsetPanel',
	      	cols: 7,
	      	offset: 3,
	      	fields: [{
		      	type: 'content',
		      	content: '<div style="background-color:#ffc"><h2>Panel (cols: 7, offset: 3)</h2></div>' 
	      	}]
	      }]
      }, {
        name: 'leftRightPanel',
        text: 'Left Right Panel',
        cols: 2,
        fields: [{      	
	      	type: 'content',
	      	content: '<div style="background-color:#ffc"><h3>Panel (cols: 2)</h3></div>' 
	      }]
      }, {
        name: 'rightRightPanel',
        text: 'Right Right Panel',
        cols: 2,
        fields: [{      	
	      	type: 'content',
	      	content: '<div style="background-color:#ffc"><h3>Panel (cols: 2)</h3></div>' 
	      }]
      }]
    }]
  }]
});