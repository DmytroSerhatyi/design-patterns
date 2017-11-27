function Cat() { }

Cat.prototype.showCatInfo = function (name, breed, age) {
    console.log('Cat info\nName: ' + name + '\nAge: ' + age + '\nBreed: ' + breed + '\n\n');
};

var catsNames = ['Simba', 'Oscar', 'Oliver'];
var catsBreeds = ['Siamese', 'Maine Coon', 'British Shorthair'];
var catsAges = [2, 3, 1];

var cat = new Cat();

for (var i = 0; i < catsNames.length; i++) {
    var name = catsNames[i];
    var breed = catsBreeds[i];
    var age = catsAges[i];

    cat.showCatInfo(name, breed, age);
}
