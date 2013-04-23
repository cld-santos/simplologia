
define(
	['jquery',
     'underscore',
     'backbone',
     'esri/Map',
     'esri/layers/FeatureLayer',
     'esri/tasks/query'],
     
    function($, _, Backbone, Map, FeatureLayer, Query) {
		
	    var MapView;
	    return MapView = Backbone.View.extend({
	    	tagName: 'div',
	    	id: 'map',
	    	initialize: function() {},
	    	render: function() {
		
		    	var ext = new esri.geometry.Extent({"xmin":-12532031.124213494,"ymin":-5485041.514693958,"xmax":-8588.4099735463245081561,"ymax":2498653.2156340,"spatialReference":{"wkid":102100}});
		        window.map = new esri.Map("map", { "extent": ext, "slider": false, "wrapAround180": true });
		
		        var basemap = new esri.layers.ArcGISTiledMapServiceLayer("http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer");
		        map.addLayer(basemap);
		        
		        dojo.connect(map, "onLoad", function() { 
		            dojo.connect(window, "resize", map, map.resize);
		            
		            map.graphics.enableMouseEvents();
		            
		            dojo.connect(map.graphics,"onMouseOut",function(){
		            	map.graphics.clear();
		            });
		            

		        });
		          
		        var estados = new esri.layers.FeatureLayer("http://mapasinterativos.ibge.gov.br/ArcGIS/rest/services/LIMITES/MapServer/1", {
		            mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
		            outFields:["*"]
		        });

		        var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,255,0.35]), 1),new dojo.Color([125,125,125,0.35]));
		        estados.setRenderer(new esri.renderer.SimpleRenderer(symbol));
		
		        var highlightSymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,0,0]), 3), new dojo.Color([125,125,125,0.35]));
		
		        dojo.connect(estados, "onMouseOver", function(evt) {
		        	var highlightGraphic = new esri.Graphic(evt.graphic.geometry,highlightSymbol);
		        	map.graphics.add(highlightGraphic);
		        });	
		        dojo.connect(estados, "onSelectionComplete", function(features){
		        	window.appRoteador.navigate("area/"+features[0].attributes.NM_NNG,{trigger: false});
		        	var stateExtent = features[0].geometry.getExtent().expand(1.5);
		            window.map.setExtent(stateExtent);
		        });
		        
		        map.addLayer(estados);
		        
		        dojo.connect(map, "onClick", function(evt) {
		            var selectionQuery = new esri.tasks.Query();
		            var tol = map.extent.getWidth()/map.width * 5;
		            var x = evt.mapPoint.x;
		            var y = evt.mapPoint.y;
		            var queryExtent = new esri.geometry.Extent(x-tol,y-tol,x+tol,y+tol,evt.mapPoint.spatialReference);
		            selectionQuery.geometry = queryExtent;
		            estados.selectFeatures(selectionQuery,esri.layers.FeatureLayer.SELECTION_NEW);
	            });
		        
	    	},
	    	zoomPorArea: function (nomeDaArea){
				var queryTask = new esri.tasks.QueryTask("http://mapasinterativos.ibge.gov.br/ArcGIS/rest/services/LIMITES/MapServer/1");
				
				var query = new esri.tasks.Query();
				query.returnGeometry = true;
				query.outFields = ["NM_NNG"];
				query.where = "NM_NNG like '" + nomeDaArea + "'";
				query.outSpatialReference = {"wkid":102100};

				dojo.connect(queryTask, "onComplete", function(featureSet) {
		            dojo.forEach(featureSet.features,function(feature){
			        	var stateExtent = feature.geometry.getExtent().expand(1.5);
			            window.map.setExtent(stateExtent);
		            });
		            
		        });

				queryTask.execute(query);
	    	}
	    });
	}
);
