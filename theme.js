/*Author Professor Krasso*/

/*Toggling Light Theme*/
 function setDefaultTheme()
 {
     const theme = localStorage.getItem("mode") || "light-theme";
     const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
     const iconText = localStorage.getItem("iconText") || "Light Mode";
 
     document.body.classList.value = theme;
     document.getElementById("icon-mode").classList.add(iconMode);
     document.getElementById("icon-text").innerHTML = iconText;
 }
 
/*Sets preferred Theme*/
 function setSelectedTheme()
 {
     document.body.classList.value = localStorage.getItem("mode") || "light-theme";
 }