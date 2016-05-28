class ListCitiesController {

    constructor(ListCitiesDataService) {

        this.cityList = ListCitiesDataService.listCities;

        this.editListCitiesState = false;

        this.changeEditListCitiesState = () => {
            this.editListCitiesState = ( this.editListCitiesState == false )
        };

        this.removeCityFromCityList = (index) => {
            ListCitiesDataService.removeCity(index);
        };
    }

}

ListCitiesController.$inject = ['ListCitiesDataService'];

export default ListCitiesController