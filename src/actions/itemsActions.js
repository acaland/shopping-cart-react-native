import { LOAD_ITEMS } from './actionTypes';
import sampleData from '../sampleData.json';

// export const loadItems = () => {
//   const action = {
//     type: LOAD_ITEMS,
//     payload: sampleData
//   }
//   return action;
// }

export const loadItems = () => {
  const request = fetch('https://www.dmi.unict.it/~calanducci/LAP2/data.json');
  return {
    type: LOAD_ITEMS,
    payload: request.then(response => response.json())
  };
};
