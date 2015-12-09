//DemoController.js

(function () {

   "use strict";

   angular.module("App")
      .controller("DemoController", ["$scope", "$compile", DemoController]);

   function DemoController($scope,$compile) {

      var demo = this;

      var formNo = 0;

      var formsWrapper = angular.element(document.querySelector('#formsWrapper'));
      var newFormTemplate = '<ngx-window ngx-settings="demo.settings" ngx-on-close="demo.close($event)"><div>New Window</div><div>New Content</div></ngx-window>';

      demo.NewForm = function () {
         formNo =+ 1;
         formsWrapper.prepend(newFormTemplate);
         $compile(formsWrapper)($scope);
      };

      demo.close = function (event) {
         demo.settings.apply('destroy');
      }

      demo.settings = {
         showCloseButton: true,
         showCollapseButton: true,
         height: 400,
         width: 600,
         position: {
            x: 500,
            y: 200
         },
         autoOpen: true
         
      };

   }

}());