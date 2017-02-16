import {ActionReducer, Action} from '@ngrx/store';
import { <%= firstUpSingleName %>Actions } from '../actions/<%= lowSingleName %>.actions'

import { <%= interfaceName %> } from '../models/<%= lowSingleName %>.model'

export function <%= firstUpSingleName %>Reducer (state: <%= interfaceName %>[] = [], action: Action) {
    if(action && action.type){
        switch(action.type) {
            case <%= firstUpSingleName %>Actions.LOAD_<%= upSingleName %>_SUCCESS:
                return action.payload;
            case <%= firstUpSingleName %>Actions.ADD_UPDATE_<%= upSingleName %>_SUCCESS:
                var exists = state.find(<%= lowSingleName %> => <%= lowSingleName %>.$key === action.payload.$key);
                if (exists) {
                    // UPDATE
                    return state.map(<%= lowSingleName %> => {
                        return <%= lowSingleName %>.$key === action.payload.$key ? Object.assign({}, <%= lowSingleName %>, action.payload) : <%= lowSingleName %>;
                    });
                }
                else {
                    // ADD
                    return [...state, Object.assign({}, action.payload)];
                }
            case <%= firstUpSingleName %>Actions.DELETE_<%= upSingleName %>_SUCCESS:
                return state.filter(<%= lowSingleName %> => <%= lowSingleName %>.$key !== action.payload);
            default:
                return state;
        };
    }
}
