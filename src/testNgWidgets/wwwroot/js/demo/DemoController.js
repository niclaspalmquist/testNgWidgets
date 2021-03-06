//DemoController.js

(function () {

   "use strict";

   angular.module("App")
      .controller("DemoController", ["$scope", "$compile", DemoController]);

   function DemoController($scope,$compile) {

      var demo = this;

      var formNo = 0;

      var formsWrapper = angular.element(document.querySelector('#formsWrapper'));

      demo.NewFormJqx = function () {
         formNo += 1;
         var newFormTemplate = '<jqx-window id="jqxWindow' + formNo + '" jqx-settings="demo.settings" jqx-on-close="demo.close($element)"><div>New Window ' + formNo + '</div><div>New Content</div></jqx-window>';
         formsWrapper.prepend(newFormTemplate);
         $compile(formsWrapper)($scope);
         demo.settings.position.x += 10;
         demo.settings.position.y += 10;
      };

      demo.NewFormNg = function () {
         formNo += 1;
         var newFormTemplate = '<ngx-window id="ngWindow' + formNo + '" ngx-settings="demo.settings" ngx-on-close="demo.close($element)"><div>New Window ' + formNo + '</div><div>New Content</div></ngx-window>';
         formsWrapper.append(newFormTemplate);
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
         maxHeight:980,
         maxWidth: 1900,
         position: {
            x: 10,
            y: 280
         },
         autoOpen: true
         
      };

   }

}());