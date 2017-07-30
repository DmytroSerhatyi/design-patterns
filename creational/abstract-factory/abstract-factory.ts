interface Breed {
    getBreed(): string;
}

class Siamese implements Breed {
    public getBreed(): string {
        return 'Siamese';
    }
}

class MaineCoon implements Breed {
    public getBreed(): string {
        return 'Maine Coon';
    }
}

class Alabai implements Breed {
    public getBreed(): string {
        return 'Alabai';
    }
}

class Retriever implements Breed {
    public getBreed(): string {
        return 'Retriever';
    }
}

interface Origin {
    getOrigin(): string;
}

class Thailand implements Origin {
    public getOrigin(): string {
        return 'Thailand';
    }
}

class Maine implements Origin {
    public getOrigin(): string {
        return 'Maine, United States of America';
    }
}

class Kazakhstan implements Origin {
    public getOrigin(): string {
        return 'Kazakhstan';
    }
}

class Canada implements Origin {
    public getOrigin(): string {
        return 'Canada';
    }
}

interface QueryComponentsFactory {
    setCatBreed(): Breed;
    setCatOrigin(): Origin;
    setDogBreed(): Breed;
    setDogOrigin(): Origin;
}

class AsianComponentsFactory implements QueryComponentsFactory {
    public setCatBreed(): Breed {
        return new Siamese();
    }

    public setCatOrigin(): Origin {
        return new Thailand();
    }

    public setDogBreed(): Breed {
        return new Alabai();
    }

    public setDogOrigin(): Origin {
        return new Kazakhstan();
    }
}

class AmericanComponentsFactory implements QueryComponentsFactory {
    public setCatBreed(): Breed {
        return new MaineCoon();
    }

    public setCatOrigin(): Origin {
        return new Maine();
    }

    public setDogBreed(): Breed {
        return new Retriever();
    }

    public setDogOrigin(): Origin {
        return new Canada();
    }
}

abstract class AnimalQuery {
    protected abstract _species: string;
    protected _breed: Breed;
    protected _origin: Origin;
    protected _componentsFactory: QueryComponentsFactory;

    constructor(componentsFactory: QueryComponentsFactory) {
        this._componentsFactory = componentsFactory;
    }

    public abstract composeQuery(): void;

    public showDescription(): void {
        console.log(`${this._breed.getBreed()} is a ${this._species} breed from ${this._origin.getOrigin()}.`);
    }
}

class CatQuery extends AnimalQuery {
    protected _species: string = 'cat';

    public composeQuery(): void {
        this._breed = this._componentsFactory.setCatBreed();
        this._origin = this._componentsFactory.setCatOrigin();
    }
}

class DogQuery extends AnimalQuery {
    protected _species: string = 'dog';

    public composeQuery(): void {
        this._breed = this._componentsFactory.setDogBreed();
        this._origin = this._componentsFactory.setDogOrigin();
    }
}

let americanComponentsFactory: QueryComponentsFactory = new AmericanComponentsFactory();
let asianComponentsFactory: QueryComponentsFactory = new AsianComponentsFactory();

const fulfillQuery: (query: AnimalQuery) => void = (query: AnimalQuery) => {
    query.composeQuery();
    query.showDescription();
}

let siameseQuery: AnimalQuery = new CatQuery(asianComponentsFactory);
fulfillQuery(siameseQuery);

let maineCoonQuery: AnimalQuery = new CatQuery(americanComponentsFactory);
fulfillQuery(maineCoonQuery);

let alabaiQuery: AnimalQuery = new DogQuery(asianComponentsFactory);
fulfillQuery(alabaiQuery);

let retrieverQuery: AnimalQuery = new DogQuery(americanComponentsFactory);
fulfillQuery(retrieverQuery);
