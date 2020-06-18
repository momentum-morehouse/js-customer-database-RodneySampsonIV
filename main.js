import customers from './customers.js'
console.log(customers)
// lines 4-14 when commented out will keep code from running for a unknown reason
let personOne = {
    first: 'curtis',
    last: 'ryan',
    street: '8073 rolling green rd',
    city: 'south valley',
    state: 'missouri',
    postcode: 99356,
    email: 'curtis.ryan@example.com',
    img: 'https://randomuser.me/api/portraits/med/men/54.jpg',
    nat: 'US'
}

console.log(personOne)
function customerList(personArray){
    let listOfCustomer = document.querySelector('#data-list')
    console.log(customerList);
    for (let customer of personArray){
        let newCustomer = document.createElement('li');

        let customerName = document.createElement('p')
        let customerEmail = document.createElement('p')
        let customerAddress = document.createElement('p')
        let dob = document.createElement('p')
        let customerImage = document.createElement('img') 
        customerImage.src = `${customer.picture.thumbnail}` 

        let cName = document.createTextNode(`${customer.name.title} ${customer.name.first} ${customer.name.last}`);
        let cAddress = document.createTextNode(`${customer.location.street}`)
        let cityState = document.createTextNode(`${customer.location.city} ${customer.location.state}`)
        let birth = document.createTextNode(`Born: ${customer.dob}`)
   


        newCustomer.append(customerImage, cName, cAddress, cityState, birth)
        listOfCustomer.append(newCustomer)
    }
}

customerList(customers)






