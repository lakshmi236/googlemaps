var app = angular.module("Main_app", []);

app.controller("MainController", ["$scope", function MainController($scope) {    
    $scope.Adress = "American University,4400 Massachusetts Ave NW,Washington, DC 20016";
    $scope.Area = { Name: "Melbourne", Latitude: -37.8140000, Longitude: 144.9633200 };
}]);