(function () { 

   function removeAll(collection) {
      if (!collection) {
         return;
      }
      var count = collection.length;
      while (count) {
         count -= 1;
         collection[count].remove();
      }
   }
   function addEventListeners() {
      addEventListeners.windowsCount = 1;
      $('#addWindowButton').mousedown(function () {
         if (addEventListeners.windowsCount < 30) {
            $(document.body).append('<div id="newWindow' + addEventListeners.windowsCount + '"><div>Header ' + addEventListeners.windowsCount
                                 + '</div><div>Content of window ' + addEventListeners.windowsCount + '</div></div>');
            var mainDemoContainer = $('#mainDemoContainer');
            $('#newWindow' + addEventListeners.windowsCount).jqxWindow({ height: 150, width: 300 })
               .on('close', function (event) {
                  this.remove();  
               });

            addEventListeners.windowsCount += 1;
         }
      });
      
   }

   $(document).ready(function () {
      windowsCount = 1;
      addEventListeners();
   });}());