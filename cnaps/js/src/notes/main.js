define(["underscore",
		"jquery",
		"text!notes/tpl/list-notes.tpl",
		"config/options"],
	function( _, $, pTpl, pOptions){
		return function(pElement, pUser, pContext){
			var _element = pElement;
			var _user = pUser;
			var _context = pContext;

			var render = function(data){
				var _tpl = _.template(pTpl);
				$(_element).html(_tpl(JSON.parse(data)));
				$('.div-note').click(goInsideANote);
		    };

			var goInsideANote = function(evt){
				if($(this).attr('notes-inside')==='true'){
					_context = $(this).attr('context-id');
					_renderByUserContext();
				}
			};

			var _renderByUserContext = function(){
				window.appRoteador.navigate("notes-insidetes/"+_user+"/"+_context, {trigger: false});
			    $.get(pOptions.viewNotesByUser, {'key':'["' + _user +'","' + _context + '"]'}, render);
			};

			this.renderByUserContext = _renderByUserContext;

			this.renderByUser = function(){
				var _contextParam = _context == null ? null:'"' + _context + '"' ; 
				$.get(pOptions.viewNotesByUser, {'key':'["' + _user +'", '+ _contextParam +']'}, render);
			};

			this.renderByUserType = function(pFilter){
				if(pFilter.types.length>1){
					$.get(pOptions.viewNotesByUserType, {"keys":getParamns(pFilter)}, render);
				}else{
					render("");
				}
			};

			var getParamns = function(pTypes){
				var _contextParam = _context==null ? null:'"'+_context+'"' ; 
				

				var _paramnsQuery = '';

				_.each(_.where(pTypes.types,{enable:true}), function(type){
					_paramnsQuery +='["'+_user+'","'+type.name+'", '+_contextParam+'],';
				});
				_paramnsQuery = "[" + _paramnsQuery.substring(0,_paramnsQuery.length-1)+"]";
				return _paramnsQuery;
			};

			this.nextNotes = function(pPage){

			}
		}
	}
);