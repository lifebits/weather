class ListCitiesController {

    constructor(ListCitiesDataService) {

        console.log("ListCities Init");
        this.cityList = ListCitiesDataService.listCities;

    }

}

ListCitiesController.$inject = ['ListCitiesDataService'];

export default ListCitiesController