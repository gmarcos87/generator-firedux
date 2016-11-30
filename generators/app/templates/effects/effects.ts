import {Injectable} from '@angular/core';
import {Effect, toPayload, Actions } from '@ngrx/effects';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

import {<%= firstUpSingleName %>Service} from '../providers/<%= lowSingleName %>.service'
import {<%= interfaceName %>} from '../models/<%= lowSingleName %>.model';
import {<%= firstUpSingleName %>Actions} from '../actions/<%= lowSingleName %>.actions';

@Injectable()
export class <%= firstUpSingleName %>Effects {

    constructor(
        private actions$: Actions,
        private fb: <%= firstUpSingleName %>Service,
        private <%= lowSingleName %>Actions: <%= firstUpSingleName %>Actions
    ) {  }


    @Effect() all<%= firstUpSingleName %>$ = this.fb.getAll()
        .map(<%= lowSingleName %> => { return this.<%= lowSingleName %>Actions.load<%= firstUpSingleName %>Success(<%= lowSingleName %>)});

    @Effect()  changed<%= firstUpSingleName %>$ = this.fb.getChanges()
        .map(change => {
            if(change.event == 'child_removed'){
                return this.<%= lowSingleName %>Actions.delete<%= firstUpSingleName %>Success(change.<%= lowSingleName %>.$key);
            }
            else {
                return this.<%= lowSingleName %>Actions.addUpdate<%= firstUpSingleName %>Success(change.<%= lowSingleName %>);
            }
        });


    @Effect({dispatch: false}) add<%= firstUpSingleName %>$ = this.actions$
        .ofType(<%= firstUpSingleName %>Actions.ADD_<%= upSingleName %>)
        .map<<%= interfaceName %>>(toPayload)
        .switchMap(<%= lowSingleName %> => Observable.fromPromise(this.fb.add(<%= lowSingleName %>)));

    @Effect() update<%= firstUpSingleName %>o$ = this.actions$
        .ofType(<%= firstUpSingleName %>Actions.UPDATE_<%= upSingleName %>)
        .map<<%= interfaceName %>>(toPayload)
        .mergeMap(<%= lowSingleName %> => this.fb.update(<%= lowSingleName %>));

    @Effect({dispatch: false}) delete<%= firstUpSingleName %>o$ = this.actions$
        .ofType(<%= firstUpSingleName %>Actions.DELETE_<%= upSingleName %>)
        .map<<%= interfaceName %>>(toPayload)
        .mergeMap(<%= lowSingleName %> => this.fb.delete(<%= lowSingleName %>));

}
