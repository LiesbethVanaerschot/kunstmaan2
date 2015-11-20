archiveApp.factory('photoFactory',function($http){
          var factory = [];
          
          factory.getPhotos = function(){
            return $http.get("http://www.gahetna.nl/beeldbank-api/opensearch/?q=2.24.09");
          }
        
            return factory;
        });