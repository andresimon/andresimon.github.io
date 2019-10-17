// Menu - Mobile
function OpenMenu() 
{
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function CloseMenu() 
{
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function CanCloseMenu()
{
    var _btn = document.getElementById("menu-close");

    if (window.getComputedStyle(_btn).display != "none")
    { CloseMenu(); }
}

// About Me - Read More
function ReadMoreFunc() 
{
    var x = document.querySelectorAll(".ReadMore");
    var y = document.getElementById("btnReadMore");

    for ( var i = 0; i < x.length; i++ ) 
    {
    if (x[i].className.indexOf("w3-show") == -1)
    {
        x[i].className += " w3-show";
        y.innerHTML = '\&#171' + ' ' +  '\&#171' + " Read Less";
    } 
    else 
    { 
        x[i].className = x[i].className.replace("w3-show", "");
        y.innerHTML = "Read More " + '\&#187' + ' ' + '\&#187';
    }   
    }
}
    
