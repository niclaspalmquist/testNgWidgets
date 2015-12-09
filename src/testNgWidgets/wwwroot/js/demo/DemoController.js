//DemoController.js

(function () {

   "use strict";

   angular.module("App")
      .controller("DemoController", ["$scope", "$compile", DemoController]);

   function DemoController($scope,$compile) {

      var demo = this;

      var formNo = 0;

      var formsWrapper = angular.element(document.querySelector('#formsWrapper'));


      demo.NewForm = function () {
         formNo += 1;
         var newFormTemplate = '<ngx-window id="ngWindow' + formNo + '" ngx-settings="demo.settings" ngx-on-close="demo.close($element)"><div>New Window ' + formNo + '</div><div>New Content</div></ngx-window>';
         formsWrapper.prepend(newFormTemplate);
         $compile(formsWrapper)($scope);
      };

      demo.close = function (element) {
         $('#'+element.currentTarget.id).remove();
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