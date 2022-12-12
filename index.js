console.log('Jai Pravrajika Mata ');
var user = {
    name: 'Saurabh',
    age: 30
};
var superUser = {
    name: 'saurabh',
    age: 30,
    role: 'admin'
};
function login(useData) {
    console.log(useData);
    return useData;
}
var account = {
    name: 'Saurabh',
    accountNumber: 1266455
};
var book = {
    name: 'Atomic Habits',
    price: 1520
};
var ebook = {
    name: 'Naval',
    price: 5000,
    year: 2025
};
var man = {
    gender: 'male',
    name: 'Saurabh',
    age: 50
};
function printId(id) {
    if (typeof id == 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId('Saurabh');
printId(1);
