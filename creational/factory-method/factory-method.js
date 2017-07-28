const animalBreeds = {
    siamese: 0,
    maineCoon: 1,
    siberianHusky: 2
};

class AnimalData {
    constructor() {
        this._breed = null;
        this._origin = null;
    }

    composeBreedData() {
        return `Breed: ${this._breed}`;
    }

    composeOriginData() {
        return `From: ${this._origin}`;
    }
}

class SiameseData extends AnimalData {
    constructor() {
        super();
        this._breed = 'Siamese';
        this._origin = 'Thailand';
    }
}

class MaineCoonData extends AnimalData {
    constructor() {
        super();
        this._breed = 'Maine Coon';
        this._origin = 'Maine, United States of America';
    }
}

class SiberianHuskyData extends AnimalData {    
    constructor() {
        super();
        this._breed = 'Siberian Husky';
        this._origin = 'Siberia';
    }
}

class AnimalDatabase {
    _makeQuery(breed) { }

    searchByBreed(breed) {
        let animal = this._makeQuery(breed);

        return `${animal.composeBreedData()}\n${animal.composeOriginData()}`;
    }
}

class CatDatabase extends AnimalDatabase {
    _makeQuery(breed) {
        if (breed === animalBreeds.siamese) {
            return new SiameseData();
        } else if (breed === animalBreeds.maineCoon) {
            return new MaineCoonData();
        } else {
            return null;
        }
    }
}

class DogDatabase extends AnimalDatabase {
    _makeQuery(breed) {
        if (breed === animalBreeds.siberianHusky) {
            return new SiberianHuskyData();
        } else {
            return null;
        }
    }
}

let catDatabase = new CatDatabase();
let dogDatabase = new DogDatabase();

console.log(catDatabase.searchByBreed(animalBreeds.siamese));
console.log(catDatabase.searchByBreed(animalBreeds.maineCoon));
console.log(dogDatabase.searchByBreed(animalBreeds.siberianHusky));
