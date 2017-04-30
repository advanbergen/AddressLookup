function myClock() {
  var directive = {
    template: '<h2>{{ vm.time | date: "HH:mm:ss" }}</h2>',
    controller: clockController,
    controllerAs: 'vm'
  }
  return directive;
}

function clockController($interval){
  'nginject'
  var vm = this;
  var update=$interval(function () {
    vm.time = new Date();
  }, 1000);
}
