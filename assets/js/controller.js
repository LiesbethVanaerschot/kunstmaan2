archiveApp.controller('photos',['$scope', 'photoFactory', function($scope,photoFactory){
          
          $scope.photos = [];
          $scope.animate = false;
          var overlay = angular.element('.overlay');
          loadPhotos();
          
          function loadPhotos(){
            photoFactory.getPhotos().success(function(data){
              photos  = x2js.xml_str2json(data);
              photo_items = photos.rss.channel.item;
              //console.log(photos.rss.channel.item);
              photo_items.forEach(function(obj){
                //console.log(obj);
                var img_link = obj.isShownBy[9];
                var img_title = obj.description;
                var img_height;
                var img_width;
                //console.log(img_link + " + " + img_title);
              });
              $scope.photos = photo_items;
            }).error(function(data){
              console.log(data.status);
            });
          }

          $scope.findIndex = function(elemid){
            //console.log(elemid);

            var clickedItem = $scope.photos[elemid];
            var elemTitle = $scope.photos[elemid].description;
            var elemSrc = $scope.photos[elemid].isShownBy[9].__text;
            
            //console.log(clickedItem);
            overlay.find('.h2_title').text(elemTitle);
            overlay.find('#elemPhoto').attr('src', elemSrc);

            angular.element('body').addClass('noscroll');
            overlay.removeClass("inactive");
            $scope.animate = true;
          }

          $scope.closeOverlay = function() {
            $scope.animate = false;
            angular.element('body').removeClass('noscroll');
            setTimeout(function() {
                 overlay.addClass("inactive");
             }, 1000);
          }
        }]);