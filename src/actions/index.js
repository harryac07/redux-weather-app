import axios from  'axios';

const API_KEY="c0b26e96759334379813822b06b7afb1";
// const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL="http://api.openweathermap.org/data/2.5/forecast?appid="+API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){ // fetchWeather is an action creator
	const url = ROOT_URL+"&q="+city+",us";

	const request = axios.get(url); // is just a promise, redux-promise will handle it
	return{
		type : FETCH_WEATHER,
		payload : request
	};
}