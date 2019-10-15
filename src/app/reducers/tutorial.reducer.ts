import { Tutorial } from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorials.action'


 const initialState : Tutorial = {

    name: "BEGINNING TO JAVA",
    url : "google.com"
 };

 export function tutorialreducer (state: Tutorial[] = [initialState], action:TutorialActions.Actions){

switch(action.type){
    case  TutorialActions.ADD_TUTORIAL:
   return [...state,action.payload];
   
   case  TutorialActions.REMOVE_TUTORIAL:
      const index = action.payload;
      return [...state.slice(0, index), ...state.slice(index + 1)];

default:
    return state;

 }
}
