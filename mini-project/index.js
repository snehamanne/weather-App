function getweather(){
    let city=document.getElementById("city")
    showweather(city.value)
}
async function showweather(city){
        const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c4315f1242mshaf6f5d4e8d47d20p1f5ad4jsnb019ccc4608c',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    if(!response){
        throw new error("weather not supported")
    }
	const result = await response.json();
	console.log(result);
    getdata(result)
} catch (error) {
	console.error(error);
}
}
function getdata(result){
    let item=document.getElementById("main")
item.innerHTML=
`
<p> city:${result.name}</P>
<p>temparature:${result.main.temp}</p>
`
}