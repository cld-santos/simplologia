<div class="div-notes">
	<ul class="ul-notes">
		<% _.each(rows, function(note){ %>
			<li class="li-notes" >
				<div class="div-note" 
					 notes-inside=<%=note.value.notesInside%> 
					 context-id=<%=note.value._id%>>
					<img 	class="min-img" 
							src=<%='/cnaps/img/tipo/' + note.value.type + '.svg'%> />
					<p><%= note.value.note %></p> 
				</div>
			</li>
		<% }); %>
	</ul>
</div>