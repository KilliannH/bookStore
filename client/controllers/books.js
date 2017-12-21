var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log("BooksController loaded...");

    $scope.getBooks = function() {
        $http.get('/api/books').then(function(response){
            $scope.books = response.data;
        });
    }

    $scope.getBook = function() {
        var id= $routeParams.id;
        $http.get('/api/books/' + id).then(function(response){
            $scope.book = response.data;
        });
    }

    $scope.addBook = function() {
        $http.post('/api/books/', $scope.book).then(function (response) { //C'est là où on se connecte au back-hand
            //En second paramettre, on met ce qu'on veut post, ici $scope.book
            window.location.href='#!/books';
        });

    }

    $scope.updateBook = function() {
        var id= $routeParams.id;
        $http.put('/api/books/' + id, $scope.book).then(function (response) {
            window.location.href='#!/books'; // On redirect le user vers la mainPage.
        });

    }

    $scope.removeBook = function(id) { //on passe le id en praramètre
        $http.delete('/api/books/' + id, $scope.book).then(function (response) {
            //on ne pass in rien du tout (pas d'attributs du book when delete) donc on s'en fout du $scope.book
            window.location.href='#!/books';
        });

    }

}]);
