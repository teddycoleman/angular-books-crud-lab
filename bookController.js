angular
  .module('bookApp',[])
  .controller('BookController',BookController);

BookController.$inject = ['$http'];
function BookController($http){
	var vm = this;
	vm.books = [];

	$http
	  .get('https://super-crud.herokuapp.com/books')
	  .then(function(response){vm.books = response.data.books})
}