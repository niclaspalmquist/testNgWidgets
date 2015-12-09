//DemoController.js

(function () {

   "use strict";

   angular.module("App")
      .controller("DemoController", [DemoController]);

   function DemoController() {

      var demo = this;

      demo.Open = function (args) {
         demo.settings.apply();
         demo.settings.apply('open');
      }

      demo.settings = {
         showCloseButton: true,
         showCollapseButton: true,
         height: 300,
         width: 300,
         position: {
            x: 500,
            y: 100
         },
         autoOpen: false
         
      };

   }

}());