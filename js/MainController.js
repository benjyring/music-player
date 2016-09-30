var musicPlayer = angular.module("musicPlayer", []);

musicPlayer.controller('MainController', ['$scope', function($scope){
  // $scope.title = 'Hello, world!'; WORK ON THESE
  $scope.cover = 'http://i.imgur.com/kLAl05y.jpg';
  $scope.tracks = [
  {
    name: 'Heritage',
    duration: '2:05',
    pubdate: new Date('2014', '03', '08'),
  },
  {
    name: 'The Devil&apos;s Orchard',
    duration: '6:40',
    pubdate: new Date('2013', '08', '01'),
  }
];
}]);
