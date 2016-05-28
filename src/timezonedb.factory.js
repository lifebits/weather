timezonedb.$inject = ['Restangular'];

export default function timezonedb(Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://api.timezonedb.com');
        RestangularConfigurer.requestParams.get = {format: 'json', key: 'R8T5G8NZKJ3T'};
    })
}