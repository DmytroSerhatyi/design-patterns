class Cat {
    public showCatInfo(name: string, breed: string, age: number): void {
        console.log(`Cat info\nName: ${name}\nAge: ${age}\nBreed: ${breed}\n\n`);
    }
}

let catsNames: string[] = ['Simba', 'Oscar', 'Oliver'];
let catsBreeds: string[] = ['Siamese', 'Maine Coon', 'British Shorthair'];
let catsAges: number[] = [2, 3, 1];

let cat: Cat = new Cat();

for (let i = 0; i < catsNames.length; i++) {
    let name = catsNames[i];
    let breed = catsBreeds[i];
    let age = catsAges[i];

    cat.showCatInfo(name, breed, age);
}
