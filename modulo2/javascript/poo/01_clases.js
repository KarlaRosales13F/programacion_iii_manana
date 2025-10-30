class car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    start(){
        console.log(`${this.brand} ${this.model} is starting`);
    }
    run(){
        console.log(`${this.brand} ${this.model} is running`);
    }
    stop(){
        console.log(`${this.brand} ${this.model} is stopping`);
    }
}
const miCarro = new car('Toyota', 'Corolla');
miCarro.start();
miCarro.run();
miCarro.stop();
console.log(miCarro.brand);
console.log(miCarro.model);