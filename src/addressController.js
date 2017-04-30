// controller for address lookup
function addressController(addressFactory) {
    'nginject'
    var vm = this;
    vm.getAddress = function () {
        addressFactory.getAddress(vm.postcode, vm.streetnumber)
        .success(function (address) {
            vm.address = address;
        })
        .error(function (err) {
            alert('Something went wrong in the address lookup!');
        });
    }
}
