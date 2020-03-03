class Person {  
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getNameAndSurname() {
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    getInitials() {
        return `${this.name.toUpperCase().charAt(0)}.${this.surname.toUpperCase().charAt(0)}`
    }
}

const janNowak = new Person("Jan", "Nowak")
console.log(janNowak.getNameAndSurname());
console.log(janNowak.getInitials());

const konradAdamik = new Person("Konrad", "Adamik")
console.log(konradAdamik.getNameAndSurname());
console.log(konradAdamik.getInitials());