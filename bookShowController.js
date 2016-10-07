angular
  .module('bookApp')
  .controller('BookShowController',BookShowController);

BookShowController.$inject = ['$http', '$routeParams', '$location'];
function BookShowController($http, $routeParams, $location){
	var vm = this;
	vm.book = [];

	$http
	  .get('https://super-crud.herokuapp.com/books/' + $routeParams.id)
	  .then(function(response){
	  	vm.book = response.data;
	  });

	vm.deleteBook = function(book){
		$http({
			method:"DELETE",
			url: "https://super-crud.herokuapp.com/books/" + book._id
		}).then(function onsuccess(){$location.path("/")});
	}

	vm.editBook = function(book){
		$http({
			method:"PUT",
			url: "https://super-crud.herokuapp.com/books/" + book._id,
			data: book
		}).then(function onsuccess(){console.log("hurray!")});
	}
}