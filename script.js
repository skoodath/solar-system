const planetName = document.getElementsByClassName('planet_name');
const closeInfo = document.querySelector('.planet_details_close');

closeInfo.addEventListener('click', ()=>{
    const planetInfo = document.querySelector('.planet_details_wrapper');
    if (planetInfo.classList.contains('planet_details_show')){
        planetInfo.classList.replace('planet_details_show', 'planet_details_hide');
    }
 
})


for (let i = 0; i < planetName.length; i++){
    
    planetName[i].addEventListener('click', ()=>{
        const planetInfo = document.querySelector('.planet_details_wrapper');
            if(planetInfo.classList.contains('planet_details_hide')){
                planetInfo.classList.replace('planet_details_hide', 'planet_details_show');
            } 
        });
}
