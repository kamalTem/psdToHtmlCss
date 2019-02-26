var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
	var hasClass = wrapperMenu.classList.toggle('open'); 

	 if (hasClass == true){
		document.getElementsByClassName('header_container_navigation-phone')[0].style.display = "block";
	}
	else{
		document.getElementsByClassName('header_container_navigation-phone')[0].style.display = "none";
	}
})