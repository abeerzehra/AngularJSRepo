angular
        .module('Ng-cribs',[])
        .controller('cribsController',function($scope){

                $scope.cribs =[
                    {
                        "type" :"condo",
                        "price":"2200000",
                        "address":"213 dolve street",
                        "description":"best placee, very good location"
                    },
                    {
                        "type" :"House",
                        "price":"2314599",
                        "address":"7832 wayye streey",
                        "description":"beautiful homees"
                    },
                    {
                        "type" :"Duplex",
                        "price":"3950000",
                        "address":"387 river road,street",
                        "description":"ye bhi achi place"
                    }
                ];
        });