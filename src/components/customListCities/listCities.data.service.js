class ListCitiesDataService {

    constructor($localStorage) {

        $localStorage.$default({
            currentListCities: []
        });

        this.currentListCities = $localStorage.currentListCities || [];

        this.addCity = (newCity) => {
            let newCityExist = _.includes(this.currentListCities, newCity);

            if (!newCityExist) {
                this.currentListCities.push(newCity);
            }
        };

        this.removeCity = (index) => {
            let arr = this.currentListCities;
            arr.splice(index, 1);
        };

    }

    get listCities() {

        return this.currentListCities;

    }

    /*set listCities(newData) {

        let newDataExist = _.includes(this.currentListCities, newData);
        if (!newDataExist) {
            this.currentListCities.push(newData);
            this.localStorage.cityList.push(newData);
        }

    }*/

}

ListCitiesDataService.$inject = ['$localStorage'];

export default ListCitiesDataService;