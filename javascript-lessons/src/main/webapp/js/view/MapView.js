define(['jquery', 'underscore', 'backbone','esri/Map','esri/tasks/query','esri/tasks/geometry', 'dojo/number'], 
		function($, _, Backbone, Map, Query, Geometry, Number) {
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
	        });
	        
            var qryTask = new esri.tasks.QueryTask("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/5");

            var qry = new esri.tasks.Query();
            qry.returnGeometry = true;
            qry.where = "1=1";
            
            var gmtrySvc = new esri.tasks.GeometryService("http://geops-01/ArcGIS/rest/services/Geometry/GeometryServer");
            
            esri.config.defaults.io.proxyUrl = "./proxy.jsp";
            esri.config.defaults.io.alwaysUseProxy = false;
            
            qryTask.execute(qry, function(result){
            	dojo.forEach(result.features, function(feature){
            		gmtrySvc.simplify([ feature.geometry ], function(labelPoints){
	            		gmtrySvc.labelPoints(labelPoints, function(labelPoint) {
			            	var font = new esri.symbol.Font("20px", esri.symbol.Font.STYLE_NORMAL, esri.symbol.Font.VARIANT_NORMAL, esri.symbol.Font.WEIGHT_BOLDER);
			            	console.log("X: " + dojo.number.format(labelPoint[0].x) + ", Y: " + dojo.number.format(labelPoint[0].y));
	            		    var textSymbol = new esri.symbol.TextSymbol(
	            		    	"X: " + dojo.number.format(labelPoint[0].x) + ", Y: " + dojo.number.format(labelPoint[0].y),
	            		    	font, new dojo.Color([0, 0, 0])
	            		    );
	            		    
	            		    var labelPointGraphic = new esri.Graphic(labelPoint[0], textSymbol);
	            		    map.graphics.add(labelPointGraphic);
            		    });
            		});
            	});
            });

    	}
    });
});
