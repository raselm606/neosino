//show page content after 2.5s
		var start;
		function mypageLoader(){
			start = setTimeout(showPage,1500);
		}

		//hid animation loader

		function showPage(){
			document.getElementById('loader').style.display="none";
			document.getElementById('thisloader').style.display="block";
		}