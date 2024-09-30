// JavaScript source code

let btn = document.getElementById("backToTopButton");

window.onscroll = function() 
{
	scrollFunction()
}

function scrollFunction()
{
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
	{
		btn.style.display = "block";
	} 
	else 
	{
		btn.style.display = "none";
	}
}