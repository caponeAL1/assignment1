
class User{

 

    constructor(firstName,lastName,Address)

 

    {

 

    this.firstName = firstName;

 

    this.lastName=lastName

 

    this.Address = Address;

 

    }

 

    firstName ='Unknown';

 

    lastName='Unknown'

 

    Address='Unknown';

 

 

 

    getInfo() {

 

        return `${this.firstName}  ${this.lastName} ${this.Address}`;

 

      }

 

}

 

const user = new User('Rhys', 'Larsen', 'venice' );

 

 

 

console.log(user.getInfo());

 

export default User;