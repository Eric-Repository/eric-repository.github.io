// JavaScript source code
// If there is no history close the current page
// If there is history go back to the previous page
document.getElementById("backButton").addEventListener("click", function()
{
	if (history.length > 1)
	{
		history.back();
		return false;
	}
	else 
	{
		window.close();
		return false;
	}
});