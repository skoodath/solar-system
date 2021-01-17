
let planetval;

const fetchInfo = () =>{

    axios.get('https://skoodath.github.io/solar-system/content/planetinfo.json')
    .then(response =>{
         
        planetval = response.data;

        });
    };

fetchInfo();




const planets = document.getElementsByClassName('planet_name');
const closeInfo = document.querySelector('.planet_details_close');


for (let i = 0; i < planets.length; i++){
    
    planets[i].addEventListener('click', ()=>{
        const planetInfo = document.querySelector('.planet_details_wrapper');
            if(planetInfo.classList.contains('planet_details_hide')){
                planetInfo.classList.replace('planet_details_hide', 'planet_details_show');
            }

        const currentplanetdata = planetval.filter(val=>val.name === planets[i].innerHTML);

        updatePlanetData(currentplanetdata);
        });
}

const updatePlanetData = (data) =>{
        
        const infoTitle = document.querySelector('.planet_card_title');
        const infoImage = document.querySelector('.planet_details_img');
        const infoCircum = document.querySelector('.planet_details_circum');
        const infoPeriod = document.querySelector('.planet_details_orb_period');
        const infoSpeed = document.querySelector('.planet_details_orb_speed');
        const infoMoon = document.querySelector('.planet_details_moons');
        const infoDistSun = document.querySelector('.planet_details_distancefromsun');
        const infoDistEarth = document.querySelector('.planet_details_distancefromearth');
        const infoTemp = document.querySelector('.planet_details_surfacetemp');
            infoTitle.innerHTML = data[0].name;
            infoImage.setAttribute('src', data[0].image);
            infoImage.setAttribute('alt', data[0].name);
            infoCircum.innerHTML = `Circumference: ${data[0].circumference}`;
            infoPeriod.innerHTML = `Orbit Period: ${data[0].orbit_period}`;
            infoSpeed.innerHTML = `Orbit Speed: ${data[0].orbit_speed}`;
            infoMoon.innerHTML = `No.of Moon: ${data[0].moons}`;
            infoDistSun.innerHTML = `Distance from Sun: ${data[0].distancetosun}`;
            infoDistEarth.innerHTML = `Distance from Earth: ${data[0].distancetoearth}`;
            infoTemp.innerHTML = `Surface Temperature: ${data[0].avg_temp}`;
}

closeInfo.addEventListener('click', ()=>{
    const planetInfo = document.querySelector('.planet_details_wrapper');
    if (planetInfo.classList.contains('planet_details_show')){
        planetInfo.classList.replace('planet_details_show', 'planet_details_hide');
    }
 
});
