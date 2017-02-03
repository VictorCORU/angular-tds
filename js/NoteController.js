/**
 * Created by victor on 27/01/2017.
 */
angular.module("NoteApp").controller("NoteController",function() {
    this.messageNote = "";
    this.info = "";
    this.status = 1;
    this.alert = "alert-info";


    this.save = function () {
        this.info = "Note sauvegardée";

    };

    this.clear = function () {
        this.messageNote = "";
        this.info = "";
    };

    this.count = function () {
        var count = 100 - this.messageNote.length;
        if (count <= 20 && count > 10) {
            this.status = 2;
            this.alert = "alert-warning";
        }
        else if (count <= 10 && count >= 0) {
            this.status = 3;
            this.alert = "alert-danger";
        }
        else {
            this.status = 1;
            this.alert = "alert-info";
        }

        this.info = "Note modifiée";
        return count;

    };

});