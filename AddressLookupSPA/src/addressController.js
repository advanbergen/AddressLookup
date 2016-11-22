// controller for address lookup
addressController.$inject = ['addressFactory'];

function addressController(addressFactory) {
  var vm = this;
  vm.getAddress = function () {
    addressFactory.getAddress()
    .success(function (address) {
      vm.address = address;
    })
    .error(function (err) {
      alert('Something went wrong in the address lookup!');
    });
  }
}

