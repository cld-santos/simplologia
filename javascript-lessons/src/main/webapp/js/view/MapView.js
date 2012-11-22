
define(['jquery', 'underscore', 'backbone','esri/Map','esri/layers/FeatureLayer'], function($, _, Backbone, Map, FeatureLayer) {
    var MapView;
    return MapView = Backbone.View.extend({
    	tagName: 'div',
    	id: 'map',
    	initialize: function() {},
    	render: function() {
	
	    	var ext = new esri.geometry.Extent({"xmin":-17106023,"ymin":2425274,"xmax":-5081561,"ymax":7503138,"spatialReference":{"wkid":102100}});
	        window.map = new esri.Map("map", { "extent": ext, "slider": false, "wrapAround180": true });
	
	        var basemap = new esri.layers.ArcGISTiledMapServiceLayer("http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer");
	        map.addLayer(basemap);
	        
	        dojo.connect(map, "onLoad", function() { 
	            dojo.connect(window, "resize", map, map.resize);
	            map.graphics.enableMouseEvents();
	            dojo.connect(map.graphics,"onMouseOut",function(){
	            	map.graphics.clear();
	            });
		        dojo.connect(map.graphics, "onClick", function(evt) {
		        	var stateExtent = evt.graphic.geometry.getExtent().expand(1.5);
		            map.setExtent(stateExtent);
		        });

	        });
	          
	        var USstates = new esri.layers.FeatureLayer("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/5", {
	            mode: esri.layers.FeatureLayer.MODE_ONDEMAND
	        });
	
	        var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,255,0.35]), 1),new dojo.Color([125,125,125,0.35]));
	        USstates.setRenderer(new esri.renderer.SimpleRenderer(symbol));
	
	        var highlightSymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,0,0]), 3), new dojo.Color([125,125,125,0.35]));
	
	        dojo.connect(USstates, "onMouseOver", function(evt) {
	        	var highlightGraphic = new esri.Graphic(evt.graphic.geometry,highlightSymbol);
	        	map.graphics.add(highlightGraphic);
	        });


	        map.addLayer(USstates);
	        
    	}
    });
});
