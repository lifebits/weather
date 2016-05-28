routing.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default function routing($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/404/');

    $stateProvider
        .state('index', {
            url: '',
            controller: ['$state', function($state) {
                $state.go('geolocation');
            }],
            template: ''
        })
        .state('404', {
            url: '/404/',
            template: '<page-not-found/>',
            params: {
                error: null
            }
        });

}