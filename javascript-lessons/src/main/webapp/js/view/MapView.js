
define(['jquery', 'underscore', 'backbone','esri/Map',], function($, _, Backbone, Map) {
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
            dojo.connect(dijit.byId("map"), "resize", map, map.resize);
          });

      },
    });
});
