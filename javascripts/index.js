function menu_item_selected(index) {
	for(var i = 1; i < 9; i++) {
		document.getElementById("indicator_" + i).style.display = 'none';
	}		
	
	if(index == '') index = 1;
	document.getElementById("indicator_" + index).style.display = 'block';
	show_sub_menu(index);
}

function show_sub_menu(index) {
	for(var i = 1; i < 9; i++) {
		var sm = document.getElementById("sm_" + i);
		if(sm) sm.style.display = 'none';
	}		
	
	if(index == '') index = 1;
	sm = document.getElementById("sm_" + index);
	if(sm) sm.style.display = 'block';
}

function register_list_items() {
	var items = document.getElementsByClassName("list_item");
	for(var i = 0; i < items.length; i++) {
		items[i].addEventListener("mouseover", function(e){taggle_list_item_on_mouse_over(e,"_hover");} , false);
		items[i].addEventListener("mouseout", function(e){taggle_list_item_on_mouse_over(e,"");}, false);
	}
}

function taggle_list_item_on_mouse_over(event,hover) {
	var item = event.srcElement;
	if(item.tagName == "A") return;
	var classNames = item.className.split(" ");
	var cn = "list_item" + hover;
	if(classNames.length == 1) {
		item.className = cn;	
	} else {
		item.className = classNames[0] + " " + cn;
	}	
}

function append_title(sub_title) {
	document.title += " - " + sub_title;
}

function set_selected_box(index) {
	document.getElementById("arrow" + index).style.display = "block";	
}