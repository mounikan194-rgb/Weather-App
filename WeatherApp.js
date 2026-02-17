function showWeather(){
    let input=document.getElementById("city")
    getWeather(input.value)
}
 async function getWeather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city= ${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '60e9fe2cadmsh73c1f9235911f78p142f5cjsna2fac389ff40',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    displayData(result.main.temp);
} catch (error) {
	console.error(error.message);
}
}
function displayData(data){
    let container=document.getElementById("main")
    container.innerHTML=`
    <h3>Temperature: ${data} </h3>
    `
}