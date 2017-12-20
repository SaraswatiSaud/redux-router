import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type) {
    case 'FETCH_POST':
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state
  }
}
