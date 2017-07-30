class Siamese {
    getBreed() {
        return 'Siamese';
    }
}

class MaineCoon {
    getBreed() {
        return 'Maine Coon';
    }
}

class Alabai {
    getBreed() {
        return 'Alabai';
    }
}

class Retriever {
    getBreed() {
        return 'Retriever';
    }
}

class Thailand {
    getOrigin() {
        return 'Thailand';
    }
}

class Maine {
    getOrigin() {
        return 'Maine, United States of America';
    }
}

class Kazakhstan {
    getOrigin() {
        return 'Kazakhstan';
    }
}

class Canada {
    getOrigin() {
        return 'Canada';
    }
}

class AsianComponentsFactory {
    setCatBreed() {
        return new Siamese();
    }

    setCatOrigin() {
        return new Thailand();
    }

    setDogBreed() {
        return new Alabai();
    }

    setDogOrigin() {
        return new Kazakhstan();
    }
}

class AmericanComponentsFactory {
    setCatBreed() {
        return new MaineCoon();
    }

    setCatOrigin() {
        return new Maine();
    }

    setDogBreed() {
        return new Retriever();
    }

    setDogOrigin() {
        return new Canada();
    }
}

class AnimalQuery {
    constructor(componentsFactory) {
        this._species = null;
        this._breed = null;
        this._origin = null;
        this._componentsFactory = componentsFactory;
    }

    composeQuery() { }

    showDescription() {
        console.log(`${this._breed.getBreed()} is a ${this._species} breed from ${this._origin.getOrigin()}.`);
    }
}

class CatQuery extends AnimalQuery {
    constructor(componentsFactory) {
        super(componentsFactory);
        this._species = 'cat';
    }

    composeQuery() {
        this._breed = this._componentsFactory.setCatBreed();
        this._origin = this._componentsFactory.setCatOrigin();
    }
}

class DogQuery extends AnimalQuery {
    constructor(componentsFactory) {
        super(componentsFactory);
        this._species = 'dog';
    }

    composeQuery() {
        this._breed = this._componentsFactory.setDogBreed();
        this._origin = this._componentsFactory.setDogOrigin();
    }
}

let americanComponentsFactory = new AmericanComponentsFactory();
let asianComponentsFactory = new AsianComponentsFactory();

const fulfillQuery = (query) => {
    query.composeQuery();
    query.showDescription();
}

let siameseQuery = new CatQuery(asianComponentsFactory);
fulfillQuery(siameseQuery);

let maineCoonQuery = new CatQuery(americanComponentsFactory);
fulfillQuery(maineCoonQuery);

let alabaiQuery = new DogQuery(asianComponentsFactory);
fulfillQuery(alabaiQuery);

let retrieverQuery = new DogQuery(americanComponentsFactory);
fulfillQuery(retrieverQuery);
