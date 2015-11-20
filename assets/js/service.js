angular.module('photosApp')
.service('imageService',['$q','$http',function($q,$http){
        this.getPhotos = function(){
            return $http.get("http://www.gahetna.nl/beeldbank-api/opensearch/?q=2.24.09");
          }
    }]);