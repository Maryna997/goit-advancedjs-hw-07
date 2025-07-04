class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    constructor(private key: Key) {}
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door = false;
    protected key: Key;
    private tenants: Person[] = [];
  
    comeIn(person: Person) {
      if (this.door) {
        this.tenants.push(person);
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    constructor(protected key: Key) {
      super();
      this.key = key;
    }
    openDoor(key: Key): void {
      if (this.key.getSignature() === key.getSignature()) {
        this.door = true;
      }
    }
  }  

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};