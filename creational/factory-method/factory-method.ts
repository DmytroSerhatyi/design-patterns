enum AnimalBreeds {
    siamese,
    maineCoon,
    siberianHusky
}

abstract class AnimalData {
    protected abstract _breed: string;
    protected abstract _origin: string;

    public composeBreedData(): string {
        return `Breed: ${this._breed}`;
    }

    public composeOriginData(): string {
        return `From: ${this._origin}`;
    }
}

class SiameseData extends AnimalData {
    protected _breed: string = 'Siamese';
    protected _origin: string = 'Thailand';
    
}

class MaineCoonData extends AnimalData {
    protected _breed: string = 'Maine Coon';
    protected _origin: string = 'Maine, United States of America';
}

class SiberianHuskyData extends AnimalData {
    protected _breed: string = 'Siberian Husky';
    protected _origin: string = 'Siberia';
}

abstract class AnimalDatabase {
    protected abstract _makeQuery(breed: AnimalBreeds): AnimalData;

    public searchByBreed(breed: AnimalBreeds): string {
        let animal: AnimalData = this._makeQuery(breed);

        return `${animal.composeBreedData()}\n${animal.composeOriginData()}`;
    }
}

class CatDatabase extends AnimalDatabase {
    protected _makeQuery(breed: AnimalBreeds): AnimalData {
        if (breed === AnimalBreeds.siamese) {
            return new SiameseData();
        } else if (breed === AnimalBreeds.maineCoon) {
            return new MaineCoonData();
        } else {
            return null;
        }
    }
}

class DogDatabase extends AnimalDatabase {
    protected _makeQuery(breed: AnimalBreeds): AnimalData {
        if (breed === AnimalBreeds.siberianHusky) {
            return new SiberianHuskyData();
        } else {
            return null;
        }
    }
}

let catDatabase: AnimalDatabase = new CatDatabase();
let dogDatabase: AnimalDatabase = new DogDatabase();

console.log(catDatabase.searchByBreed(AnimalBreeds.siamese));
console.log(catDatabase.searchByBreed(AnimalBreeds.maineCoon));
console.log(dogDatabase.searchByBreed(AnimalBreeds.siberianHusky));
