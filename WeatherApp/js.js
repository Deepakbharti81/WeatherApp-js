let weatherBox = document.querySelector('#weatherBox');
let form = document.querySelector('form');


form.addEventListener('submit', async (e) => {

    e.preventDefault();
    weatherBox.style.transform = 'scale(1)';
    let cityValue = e.target.cityName.value;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=0f2fb94282ad6a3dbf2387c407b74806&units=metric`;

    let getData = await fetch(apiUrl);
    let getFinalData = await getData.json();
    console.log(getFinalData);
    let Data_in_weatherBox = '';

    if(cityValue == ''){
        weatherBox.style.transform = 'scale(0)';
    }
    else{

        Data_in_weatherBox +=
        `
        <h3> ${getFinalData.name}<mark style="color:red; margin-left:0.6rem">${getFinalData.sys.country}</mark</h2> 
        <h2>${Math.floor(getFinalData.main.temp)}&deg;C</h2>
        <img src="https://openweathermap.org/img/wn/${getFinalData.weather[0].icon}@2x.png" alt="">
        <p>${getFinalData.weather[0].description}</p>
        `
    }

    

    weatherBox.innerHTML = Data_in_weatherBox

})