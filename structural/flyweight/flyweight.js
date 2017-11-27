class Cat {
    showCatInfo(name, breed, age) {
        console.log(`Cat info\nName: ${name}\nAge: ${age}\nBreed: ${breed}\n\n`);
    }
}

let catsNames = ['Simba', 'Oscar', 'Oliver'];
let catsBreeds = ['Siamese', 'Maine Coon', 'British Shorthair'];
let catsAges = [2, 3, 1];

let cat = new Cat();

for (let i = 0; i < catsNames.length; i++) {
    let name = catsNames[i];
    let breed = catsBreeds[i];
    let age = catsAges[i];

    cat.showCatInfo(name, breed, age);
}
