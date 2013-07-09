require.config({
    baseUrl: "js/lib",
    packages:[{
        name:"notes",
        location:"../src/notes/"
    },{
        name:"filter",
        location:"../src/filter/"
    },{
        name:"config",
        location:"../src/"
    },{
        name:"data",
        location:"../json/"
    }],
    shim: {
        'underscore': {exports: '_'},
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
    }
});

require(["config/urlRoutes","backbone"],
    function(pUrlRoutes,Backbone){
        window.appRoteador = new pUrlRoutes();
        Backbone.history.start();
    }
);