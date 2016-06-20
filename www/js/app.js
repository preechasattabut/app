angular.module('shop', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {

        /*$stateProvider
         .state('tabs', {
         url: "/tab",
         abstract: true,
         templateUrl: "templates/tabs.html"

         });
         $urlRouterProvider.otherwise("/tab/home");*/

    })


    .controller('viewShop', function ($scope) {
        // PRODUCT
        var makeDataProduct = [
        ];
        var isList = makeDataProduct.length; // if have list product
        if (isList == 0) {
            $scope.content_list = true;
            $scope.is_non_product = false;
        } else {
            $scope.content_list = false;
            $scope.is_non_product = true;
        }


        //TABS CONTROL
        $scope.content_tab_1 = false;
        $scope.content_tab_2 = true;
        $scope.content_tab_3 = true;

        $scope.btnTabActive_1 = "active";
        $scope.btnTabActive_2 = "";
        $scope.btnTabActive_3 = "";

        //TABS
        $scope.tabsClick = function (idTabs) {
            console.log(idTabs)
            if (idTabs == 1) {
                $scope.content_tab_1 = false;
                $scope.content_tab_2 = true;
                $scope.content_tab_3 = true;

                $scope.btnTabActive_1 = "active";
                $scope.btnTabActive_2 = "";
                $scope.btnTabActive_3 = "";

            } else if (idTabs == 2) {
                $scope.content_tab_1 = true;
                $scope.content_tab_2 = false;
                $scope.content_tab_3 = true;

                $scope.btnTabActive_1 = "";
                $scope.btnTabActive_2 = "active";
                $scope.btnTabActive_3 = "";

            } else if (idTabs == 3) {
                $scope.content_tab_1 = true;
                $scope.content_tab_2 = true;
                $scope.content_tab_3 = false;

                $scope.btnTabActive_1 = "";
                $scope.btnTabActive_2 = "";
                $scope.btnTabActive_3 = "active";
            }
        }

        /*var addActive = angular.element( document.querySelector('.tab-item') );
         addActive.addClass('active');*/
    });
