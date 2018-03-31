/* global angular hotelDataFactory */
angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController(hoteDataFactory)  {
    var vm = this;
    vm.title = 'MEAN Hotel App';
    hotelDataFactory.hotelList().then(function(response) {
      // console.log(response);  
        vm.hotels = response.data;
    });
}