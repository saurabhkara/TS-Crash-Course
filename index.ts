console.log('Jai Pravrajika Mata ');


//Type Alias

type UserDetail = {
    name: string;
    age: number;
}

let user: UserDetail = {
    name: 'Saurabh',
    age: 30
}

//Combining multiple type alias
type SuperUser  =  UserDetail & {
 role:'admin'
}

const superUser : SuperUser = {
 name:'saurabh',
 age:30,
 role: 'admin'
}

function login(useData: UserDetail): UserDetail {
    console.log(useData);
    return useData
}

// login(user);


//
//Interfaces
//

interface Transaction {
    payeeAccountNumber: number,
    payerAccountNumber: number;
    amount: number
}

interface Account {
    name: string;
    accountNumber: number;
    transcation?: Transaction[];
}


const account: Account = {
    name: 'Saurabh',
    accountNumber: 1266455,

}


//extending interfaces 

interface Book {
    name : string,
    price : number;
}

const book : Book ={
    name: 'Atomic Habits',
    price: 1520
}

interface Ebook extends Book{
    year : number
}

const ebook : Ebook = {
    name: 'Naval',
    price: 5000,
    year :2025
}

//Merging multiple inerfaces
// we can also merge interfaces by defining same interface with different properties

interface Man{
    name:string;
    age:number;
}

interface Man{
    gender: 'male' | 'female'
}

const man :Man = {
    gender:'male',
    name:'Saurabh',
    age: 50,
}



//Union 
type gender = 'male' | 'female';




//narrowing


type ID = number | string;

function printId(id:ID){
    if(typeof id == 'string'){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}

// printId('Saurabh');
// printId(1);



//when typeScript automatically decides its type is called infer type.


//
//Generics
//
interface ABC{
    address: string
}

interface ABCD{
    address : string;
    state: string
}

const abc : ABC  ={
    address :'Ramgadhiya'
}
const abcd : ABCD  ={
    address :'Ramgadhiya',
    state:'Bihar'
}



function printAddress<T extends ABC>(item:T) :T{

    console.log(item.address);
    return item;
}

console.log(printAddress(abc))
console.log(printAddress(abcd).state)




//===========================================================

// function printAddressAnother<T extends ABC>(item:T) :T {
//     console.log(item.address);
//     return item;
// }

// console.log(printAddressAnother<ABC>(abc));
// console.log(printAddressAnother<ABCD>(abcd));


//============================================================





const showAddress = <Result> (item:Result) :Result =>{
    console.log(item)
    return item
}

showAddress<ABC>(abc);