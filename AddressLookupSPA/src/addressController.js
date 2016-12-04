// controller for address lookup

addressController.$inject = ['addressFactory']; //, 'googleMap'
//(function () {
    function addressController(addressFactory) {
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
//}());

