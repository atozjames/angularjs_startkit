angular.module("myApp.page1",['ngRoute'])
.config(['$routeProvider',function( $routeProvider){
    $routeProvider
        .when('/page1',
        {
           templateUrl : "page1/page1.html",
           controller : "page1Ctrl"     
        });

}]).controller('page1Ctrl',function($scope){

    console.log("page1");
    $scope.basicCheckValue="true";
    
    $scope.getStatus = function(){

        console.log("called getstatus");
        if($scope.basicCheckValue){
            console.log("select");
        }

        if($scope.customValCheckValue){
            console.log("customValCheckValue select");
        }

    }
    




});