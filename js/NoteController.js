/**
 * Created by victor on 27/01/2017.
 */
angular.module("NoteApp").controller("NoteController",function() {
    this.messageNote= "";
    this.info = "";
    this.status = 1;

    this.save = function() {

    };

    this.clear = function(){
        this.messageNote = "";
    };

    this.count = function(){
        var count =  100 - this.messageNote.length;
        if(count < 20){
            this.status = 2;
        }
        else if(count < 10) {
            this.status = 3;
        }
        else{
            this.status = 1;
        }

        return count;

    };
})