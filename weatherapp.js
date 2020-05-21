

const searchbox = document.querySelector(".searchbox")
searchbox.addEventListener('keypress',function(e){
	if(e.key=="Enter"){
		getResult(searchbox.value)
		console.log(searchbox.value)

	}



function getResult(query){
	const api = "8ff624fb2a157243123a1294485e5acb"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api}`
	 fetch(url)
		  .then(response=>{
		  	return response.json()
		  })
		  .then(displayresult)
		  	
		  	

		}
		function displayresult(response){
			console.log(response)
			let city = document.querySelector(".city")

			city.innerText = `${response.name},${response.sys.country}`
			let now = new Date;
			var date = document.querySelector(".date")
			date.innerText = dateBuilder(now)
			var temp = document.querySelector(".temp")
			temp.innerText = `${Math.round(response.main.temp)} °C`
			var weather = document.querySelector(".weather")
			weather.innerText = `${response.weather[0].main}`
			let hilow = document.querySelector(".hi-low")
			hilow.innerText = `${response.main.temp_min}°C/${response.main.temp_max}°C`


		} function dateBuilder(date){
			var todaydate = date.getDate();

			var array = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
			var day = array[date.getDay()];
			console.log(day)
			var year = date.getFullYear()
			var array1 = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
			var month = array1[date.getMonth()]
			return `${day} ${todaydate} ${month} ${year}`
		}

		})

