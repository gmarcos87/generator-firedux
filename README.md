# generator-firedux [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status](https://coveralls.io/repos/github/gmarcos87/generator-firedux/badge.svg?branch=master)](https://coveralls.io/github/gmarcos87/generator-firedux?branch=master)
> ngRx/store generator for Ionic2 proyects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-firedux using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-firedux
```

Then in your ./ionic-app/src generate your new store (ngrx/store + AngularFire + Ionic2):

```bash
yo firedux newstore
```

Import your new store in app.module.ts
```javascript
import { NewstoreActions } from '../actions/newstore.actions'
import { NewstoreEffects } from '../effects/newstore.effects'
import { NewstoreReducer } from '../reducers/newstore.reducer'
import { NewstoreService } from '../providers/newstore.service'


...
imports: [
    ...//others effects or imports
    EffectsModule.runAfterBootstrap(NewstoreEffects)
    StoreModule.provideStore({ newstore: NewstoreReducer, otherstore: OtherstoreReducer })
 ]
 ...
providers :[
  ...//others providers or services
  NewstoreService,
  NewstoreActions
]
```

Add Newstore to services/app-state.ts
```javascript
...
import { NewstoreI } from '../models/newstore.model';
...
export interface AppState {
  ...//others stores
  newstore: NewstoreI[]
}
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Marcos Gutierrez](http://pixxel.com.ar)


[npm-image]: https://badge.fury.io/js/generator-firedux.svg
[npm-url]: https://npmjs.org/package/generator-firedux
[travis-image]: https://travis-ci.org/gmarcos87/generator-firedux.svg?branch=master
[travis-url]: https://travis-ci.org/gmarcos87/generator-firedux
[daviddm-image]: https://david-dm.org/gmarcos87/generator-firedux.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/gmarcos87/generator-firedux
[coveralls-image]: https://coveralls.io/repos/gmarcos87/generator-firedux/badge.svg
[coveralls-url]: https://coveralls.io/r/gmarcos87/generator-firedux
