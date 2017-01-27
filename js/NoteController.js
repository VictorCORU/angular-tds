/**
 * Created by victor on 27/01/2017.
 */
angular.module("noteApp").controller("mainController",function() {
    this.messageNote= "";
    this.info = "";
    this.status = 1;

    this.save = function() {
        
    };

    this.clear = function(){
        this.messageNote = 0;
    };

    this.count = function(){
        return this.messageNote.length;
    };
})