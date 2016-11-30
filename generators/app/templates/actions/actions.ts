
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {<%= interfaceName %>} from '../models/<%= lowSingleName %>.model';


@Injectable()
export class <%= firstUpSingleName %>Actions {

    static ADD_<%= upSingleName %> = 'ADD_<%= upSingleName %>';
    add<%= firstUpSingleName %>(<%= lowSingleName %>: <%= interfaceName %>): Action {
        return {
            type: <%= firstUpSingleName %>Actions.ADD_<%= upSingleName %>,
            payload: <%= lowSingleName %>
        }
    }

    static UPDATE_<%= upSingleName %> = 'UPDATE_<%= upSingleName %>';
    update<%= firstUpSingleName %>(<%= lowSingleName %>: <%= interfaceName %>): Action {
        return {
            type: <%= firstUpSingleName %>Actions.UPDATE_<%= upSingleName %>,
            payload: <%= lowSingleName %>
        }
    }

    static DELETE_<%= upSingleName %> = 'DELETE_<%= upSingleName %>';
    delete<%= firstUpSingleName %>(<%= lowSingleName %>: <%= interfaceName %>): Action {
        return {
            type: <%= firstUpSingleName %>Actions.DELETE_<%= upSingleName %>,
            payload: <%= lowSingleName %>
        }
    }

    static LOAD_<%= upSingleName %>_SUCCESS = 'LOAD_<%= upSingleName %>_SUCCESS';
    load<%= firstUpSingleName %>Success(<%= lowSingleName %>s: <%= interfaceName %>[]): Action {
        return {
            type: <%= firstUpSingleName %>Actions.LOAD_<%= upSingleName %>_SUCCESS,
            payload: <%= lowSingleName %>s
        }
    }

    static ADD_UPDATE_<%= upSingleName %>_SUCCESS = 'ADD_UPDATE_<%= upSingleName %>_SUCCESS';
    addUpdate<%= firstUpSingleName %>Success(<%= lowSingleName %>: <%= interfaceName %>): Action {
        return {
            type: <%= firstUpSingleName %>Actions.ADD_UPDATE_<%= upSingleName %>_SUCCESS,
            payload: <%= lowSingleName %>
        }
    }

    static DELETE_<%= upSingleName %>_SUCCESS = 'DELETE_<%= upSingleName %>_SUCCESS';
    delete<%= firstUpSingleName %>Success(id: string): Action {
        return {
            type: <%= firstUpSingleName %>Actions.DELETE_<%= upSingleName %>_SUCCESS,
            payload: id
        }
    }
}
