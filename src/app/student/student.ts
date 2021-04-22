export class Student {
    firstname:string;
    lastname:string;
    email:string;
    password:string;

    constructor(first:string, last:string, email:string,pswd:string) { 
        this.firstname = first;
        this.lastname = last;
        this.email = email;
        this.password = pswd;
    }
}
