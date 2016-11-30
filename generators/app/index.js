'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  constructor: function(){
    yeoman.Base.apply(this, arguments);
    this.argument('store', { type: String, required: true });
    this.names = {
      interfaceName : _.capitalize(this.store)+'I',
      lowSingleName : _.lowerCase(this.store),
      firstUpSingleName : _.capitalize(this.store),
      upSingleName : _.upperCase(this.store)
    }
  },
  writing: function () {

    var copy = function(a,x){
      this.fs.copyTpl(
        this.templatePath(x[0]+'/'+x[1]+'.ts'),
        this.destinationPath(x[0]+'/'+this.names.lowSingleName+'.'+x[1]+'.ts'),
        this.names
      );
      var result = a.concat(['import { '+x[2]+' } from ../../'+x[0]+'/'+this.names.lowSingleName+'.'+x[1]])
      return result
    }
    var all = [
      ['actions','actions',this.names.firstUpSingleName+'Actions'],
      ['effects','effects',this.names.firstUpSingleName+'Effects'],
      ['models','model',this.names.firstUpSingleName+'I'],
      ['reducers','reducer',this.names.firstUpSingleName+'Reducer'],
      ['providers','service',this.names.firstUpSingleName+'Service']]
    var result = all.reduce(copy.bind(this),[])
    result.forEach((x)=>{this.log(x)})
  }
});
