openweathermap.$inject = ['Restangular'];

export default function openweathermap(Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://api.openweathermap.org/data/2.5/');
        RestangularConfigurer.requestParams.get = {units: 'metric', APPID: 'c56a253d38f5aee95616a588586b864f'};
    })
}