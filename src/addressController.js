// controller for address lookup
function addressController(addressFactory) {
    'nginject'
    var vm = this;
    var init_details = {
        lat: 51.09,
        lon:  5.11
    }
    vm.address = {};

    vm.getAddress = function () {
        addressFactory.getAddress(vm.postcode, vm.streetnumber)
        .success(function (address) {
            vm.address = address;
        })
        .error(function (err) {
            alert('Something went wrong in the address lookup!');
        });
    }


    function onInit() {
        vm.address.details = [init_details];
        console.log(vm.address);
    }

    onInit();
}
