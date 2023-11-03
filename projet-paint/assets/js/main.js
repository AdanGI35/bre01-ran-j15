
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
    
   
    let header = document.querySelector("header");


    for(let i = 0; i < colors.length; i++) {
      
        let colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = colors[i];
        header.appendChild(colorDiv);

    }
    console.log(colors);
    // le code de l'étape 1 se passe ici
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    
    
    let headerDiv = document.querySelector("header div");
        
        
        for (let i = 0; i < headerDiv.length; i++) {
        headerDiv[i].addEventListener("click", selectColor);
        console.log(getSelectedColor());
    }

    // le code de l'étape 2 se passe ici
    let mainDiv = document.querySelector("main div");
        
        for (let i = 0; i < mainDiv.length; i++) {
            mainDiv.addEventListener("click", function(event){
                let selectedColor= getSelectedColor();
                
                if(selectedColor){
                     event.target.style.backgroundColor = selectedColor;
                }
        });
        }

    


    // le code de l'étape 3 se passe ici

});