/*let i = 10
if(true) {
    let i = 20
}
console.log(i)
i = true
i = () => console.log('hi')

let cr = {
    nm : 'Audi',
    cst : 45
}

let dt = new Date()
dt.getDate()

Date.prototype.myDt = () => {
    return 098877765;
}

dt.myDt()

function MyCl() {
    this.nm = 'android'
}

MyCl.prototype.syHi = function() {
    console.log(`Hi`)
}

function MyChildCl() {
    MyCl.call(this)
    this.age = 10
}

MyChildCl.prototype = Object.create(MyCl)
MyChildCl.prototype.constructor = MyChildCl
MyChildCl.prototype.syHi = () => console.log(`HI`)

let chCl = new MyChildCl()
chCl.age = 45
chCl.nm = 'java'
chCl.syHi()

console.log(chCl)

let cl = new MyCl()
cl.syHi()

function hello() {
    return () => () => { nm : 'hey hello'}
}

function hi( callback ){
    callback(456)
}

hi(
    ev => console.log(ev)
)*/'-

function Animal() {
    this.ty = 'beast'
}

Animal.prototype.whtTyp = function() {
    return this.ty
}
 
function Dog() {
    this.brd = 'bulldog'
}

Dog.prototype = new Animal() //extends

let dg = new Dog()
dg.whtTyp()