angular.module('shop', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

      /*$stateProvider
          .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"

          });
      $urlRouterProvider.otherwise("/tab/home");*/

    })

    .controller('viewShop', function($scope) {


        var isList = true; // if have list product
        if(isList){
            $scope.content_list = false;
        }else{
            $scope.content_list = true;
        }

        $scope.content_tab_1 = false;
        $scope.content_tab_2 = true;
        $scope.content_tab_3 = true;


        $scope.btnTabActive_1 = "active";
        $scope.btnTabActive_2 = "";
        $scope.btnTabActive_3 = "";

        /*var addActive = angular.element( document.querySelector('.tab-item') );
         addActive.addClass('active');*/


          $scope.tabsClick = function (idTabs) {
              console.log(idTabs)
              if(idTabs == 1){
                  $scope.content_tab_1 = false;
                  $scope.content_tab_2 = true;
                  $scope.content_tab_3 = true;

                  $scope.btnTabActive_1 = "active";
                  $scope.btnTabActive_2 = "";
                  $scope.btnTabActive_3 = "";

              }else if(idTabs == 2){
                  $scope.content_tab_1 = true;
                  $scope.content_tab_2 = false;
                  $scope.content_tab_3 = true;

                  $scope.btnTabActive_1 = "active";
                  $scope.btnTabActive_2 = "";
                  $scope.btnTabActive_3 = "";

              }else if(idTabs == 3){
                  $scope.content_tab_1 = true;
                  $scope.content_tab_2 = true;
                  $scope.content_tab_3 = false;

                  $scope.btnTabActive_1 = "active";
                  $scope.btnTabActive_2 = "";
                  $scope.btnTabActive_3 = "";
              }
          }
    });
