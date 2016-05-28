import pageNotFoundTemplate from './views/404.html'

export default {
    restrict: 'E',
    bindings: {},
    template: pageNotFoundTemplate,
    controller: ['$stateParams', function($stateParams) {
        this.error = $stateParams.error;
    }]
}