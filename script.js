let inputValue = document.querySelector(".search-box")
let button=document.querySelector(".button")
let temp=document.querySelector(".current .temp")
let city=document.querySelector(".location .city")
let description=document.querySelector(".current .weather")
let date=document.querySelector(".location .date")

button.addEventListener("click",function()
{
    fetch(`https://weather-api99.p.rapidapi.com/weather?city=${inputValue.value}`,{
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e7cd15b120mshed05bfe63309ee3p1fdb3fjsncfc785c3c6f9',
		'x-rapidapi-host': 'weather-api99.p.rapidapi.com'
	}
})
.then((response)=>response.json())
.then(displayData)
.catch((err)=>console.log(err))

})

const displayData=(weather)=>{
    temp.innerHTML = `${Math.round(weather.main.temp-273.15)} Celsius`
    description.innerHTML=`${weather.weather[0].description}`
    city.innerHTML=`${weather.name}`
    let now=new Date()
    date.innerHTML=dateBuilder(now);
}

function dateBuilder(d)
{
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}