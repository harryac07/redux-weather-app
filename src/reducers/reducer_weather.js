import {FETCH_WEATHER} from '../actions/index';

export default function (state=[],action){
	switch(action.type){
		case FETCH_WEATHER:
		return [action.payload.data,...state]; // we just need data from payload // dont use array.push to avoid mutation
	}
	return state;
}