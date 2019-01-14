// object destructuring
const person = {
    name: 'hamid',
    age:30,
    location:{
      city:  'houston,texas',
      temp:46 
    }
}
// const name= person.name;
// const age = person.age
const {name,age} = person
const {city= 'Conakry',temp} = person.location
console.log(`${name} is ${age} years old 
and lives in ${city}, where it is ${temp}`)

const book = {
    title:'Ego is the Enemy',
    author:'Ryan Holliday',
    publisher:{
         name:'Penguin'
    }
}
const {name:publisherName ='self-published'} = book.publisher
 console.log(publisherName)

 // array destructuring

 const item=['coffee(hot)', '$4.00', '$2.50', '2.75']
 const[coffee,price='what ever you have'] = item;
 console.log(`A medium ${coffee} cost ${price}`)
