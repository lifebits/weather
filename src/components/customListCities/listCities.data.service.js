class ListCitiesData {

    constructor($localStorage) {

        this.localStorage = $localStorage;
        this.localStorage.$default({
            cityList: []
        });

        this.currentListCities = [];

        //$localStorage.$reset();
    }

    get listCities() {

        if (this.localStorage.cityList.length != 0) {
            this.currentListCities = this.localStorage.cityList
        }

        return this.currentListCities;

    }

    set listCities(newData) {

        let newDataExist = _.includes(this.currentListCities, newData);
        if (!newDataExist) {
            this.currentListCities.push(newData);
            this.localStorage.cityList.push(newData);
        }

    }

}

ListCitiesData.$inject = ['$localStorage'];

export default ListCitiesData;