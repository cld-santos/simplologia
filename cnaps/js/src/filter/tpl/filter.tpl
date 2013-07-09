<div class="div-filter">
	<ul class="ul-filter">
		<%var ind =0;
		 _.each(types, function(type){ %>
			<li class="li-filter">
				   <img id=<%='img-'+type.name %>
				   		notes-id=<%=ind%>
				   		class="large-img" 
				   		src=<%= '/cnaps/img/tipo/' + type.name + '.svg' %>  
				   		alt=<%="'" + type.name + "'"%> />
			</li>
		<%ind++;
		});%>
	</uL>
</div>