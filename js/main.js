define(function (require, exports, module) {
    var Engine = require('famous/core/Engine');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Transform = require('famous/core/Transform');
    var Utility = require('famous/utilities/Utility');

    var Timeline = require('Timeline');
    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);
   
    var SURFACE_WIDTH=100;
    var SURFACE_HEIGHT=100;
    var DATA_LENGTH =50;
    var data = prepareData();
    var fogDensity = 0.3;
    var modifiers = [];
  
            var timeline = new Timeline({
            	direction:Utility.Direction.X,
            	width:SURFACE_WIDTH,
            	height:SURFACE_HEIGHT,
                data: data,
                OnSelected: OnSelected,
                fog: fogDensity,
                margin: 20000,
                });
           
    function _goToPage(index) {
        if (index >= 0) {
                this.goToPage(index);
        console.log("GoTo index:" + index);
        }
    }

    function OnSelected(index) {
        _goToPage.call(timeline,index);
    }

    function prepareData(key) {
        var DATA = "images/";
        var IMAGE = "img";
        	var data = [];
        for (var i = 0; i < DATA_LENGTH; i++) {
                var contentDiv = i;
                data.push(contentDiv);
        }
        return data;
    }

  var modifier = new StateModifier({origin:[0.5,0.7],transform:Transform.rotate(-0.0,0,0)})
    mainContext.add(modifier).add(timeline);
  document.body.onkeypress = function(){
	  timeline.outputType++;
  	if(timeline.outputType>=8)timeline.outputType = 0;
  	if(timeline.outputType==1)modifier.setTransform(Transform.rotateX(-0.3),{duration:500})
  	else modifier.setTransform(Transform.rotateX(0),{duration:500})
  }.bind(this)
  
  
});