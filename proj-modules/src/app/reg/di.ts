class Car {
    //engine : Engine
    constructor(private engine : Engine) {
        //this.engine = engine
        if(engine instanceof BmwEngine) {
            let bmwEng = engine as BmwEngine
        }
    }
}

console.log(10 + 20 + '30')
console.log('10' + 20 + 30) /** 102030 */
console.log(10 + '20' + 30)/** 102030 */

class Engine {

}

class BmwEngine extends Engine {

}

let eng = new Engine()
let bmwEng = new BmwEngine()

let cr = new Car(eng)