
window.MapaView = Backbone.View.extend({

	render: function(){

		var map;
		
		$(this.el).html(this.template());
		
		var initExtent = new esri.geometry.Extent({
			"xmin" : -17731,
			"ymin" : 6710077,
			"xmax" : -12495,
			"ymax" : 6712279,
			"spatialReference" : {
				"wkid" : 102100
			}
		});
		map = new esri.Map("map", {
			extent : initExtent
		});

		var basemap = new esri.layers.ArcGISTiledMapServiceLayer(
				"http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer");

		map.addLayer(basemap);

	}
})