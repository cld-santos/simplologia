define(["underscore",
		"jquery",
		"text!filter/tpl/filter.tpl",
		"text!data/types-notes.json",
		"config/options"],
function(_, $, pTpl, pTypesNotes,pOptions){
	return function(pElement, pUser){

		this.render = function(){
			var _tpl = _.template(pTpl);
			$(_element).html(_tpl(_typesNotes));

			$('.li-filter img').click(doFilter);
		}

		var doFilter = function(evt){
			enableFilter($(this).attr('notes-id'));
			byUserType();
		}

		var enableFilter = function(pId){
			_typesNotes.types[pId].enable = (_typesNotes.types[pId].enable==true) ? false : true;
			$("#img-" + _typesNotes.types[pId].name).css("opacity",(_typesNotes.types[pId].enable==true) ? "1" : "0.2");
		}

		var byUserType = function(){
			window.notes.renderByUserType( _typesNotes );
		}

		var _typesNotes = JSON.parse(pTypesNotes);
		var _user = pUser;
		var _element = pElement;

	}
});