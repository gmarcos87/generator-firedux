import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular'

import { AngularFire, FirebaseListObservable } from 'angularfire2'

import { Observable } from 'rxjs/Observable'
import { Subject }    from 'rxjs/Subject';

import { <%= interfaceName %> } from '../models/<%= lowSingleName %>.model'

export const <%= lowSingleName %>Transform = function(<%= lowSingleName %>){
  let tmp:<%= interfaceName %> = <%= lowSingleName %>.val()
  tmp.$key = <%= lowSingleName %>.key;
  return tmp
}

export interface custom<%= firstUpSingleName %>Event {
  <%= lowSingleName %>: <%= interfaceName %>;
  event: string;
}

@Injectable()
export class <%= firstUpSingleName %>Service {
  public fb:FirebaseListObservable<<%= interfaceName %>[]>;
  public fbEvents: Subject<custom<%= firstUpSingleName %>Event>
  constructor(private platform:Platform, private af: AngularFire) {
      this.fbEvents = new Subject<any>();
  }


  initFirebase(): Promise<any>{
    return this.platform.ready()
      .then(()=>{
        this.fb = this.af.database.list('/<%= lowSingleName %>')
        this.fb.$ref.ref.on('child_added',(x)=>{this.fbEvents.next({<%= lowSingleName %>:<%= lowSingleName %>Transform(x),event:'child_added'})})
        this.fb.$ref.ref.on('child_changed',(x)=>{this.fbEvents.next({<%= lowSingleName %>:<%= lowSingleName %>Transform(x),event:'child_changed'})})
        this.fb.$ref.ref.on('child_removed',(x)=>{this.fbEvents.next({<%= lowSingleName %>:<%= lowSingleName %>Transform(x),event:'child_removed'})})
      })
  }

  add(<%= lowSingleName %>: <%= interfaceName %>): Promise<<%= interfaceName %>> {
      return new Promise((res,rej)=>{
        res(this.fb.push(<%= lowSingleName %>))
      })
  }

  update(<%= lowSingleName %>: <%= interfaceName %>): Promise<<%= interfaceName %>> {
      return new Promise((res,rej)=>{
        res(this.fb.update(<%= lowSingleName %>.$key, <%= lowSingleName %>))
      })
  }

  delete(<%= lowSingleName %>: <%= interfaceName %>): Promise<string> {
        return new Promise((res,rej)=>{
          res(this.fb.remove(<%= lowSingleName %>.$key))
      })
  }

  getAll() : Observable<<%= interfaceName %>[]> {
    return Observable.create(observer=> {
      this.initFirebase()
      .then(()=>{
          this.fb.take(1).subscribe((x:<%= interfaceName %>[]) => observer.next(x))
        })
      })
  }

  getChanges(): Observable<custom<%= firstUpSingleName %>Event> {
    return this.fbEvents.asObservable()
  }

}
