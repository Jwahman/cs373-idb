angular.module('mainApp').controller('tournamentsCtrl', ['$scope',
    function ($scope) {

  var dict1 = {
    name: "Tourney1",
    date: "6/5/09",
    location: "UT Austin",
    num_entrants: "1",
    imageURL: "/path1"
  };

  var dict2 = {
    name: "Tourney2",
    date: "6/5/10",
    location: "UT Austin",
    num_entrants: "0",
    imageURL: "/path2"
  };

  $scope.tournaments = [dict1, dict2];


}]);

angular.module('mainApp').controller('participantsCtrl', ['$scope',
    function ($scope) {

  
}]);

angular.module('mainApp').controller('aboutCtrl', ['$scope',
    function ($scope) {

  
}]);

angular.module('mainApp').controller('charactersCtrl', ['$scope',
    function ($scope) {

  
}]);