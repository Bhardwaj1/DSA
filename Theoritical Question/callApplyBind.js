
function sayHello(city,country){
    console.log(`Hello ${this.name} from ${city},${country}`);
}


const user={
    name:"Gaurav"
};

sayHello.apply(user,["Begusarai","Bihar"]);