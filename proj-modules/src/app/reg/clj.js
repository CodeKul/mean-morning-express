'use strict'

let i = 10
function myFn() {
    return function myFnIn() {
        return function myFnInIn() {

        }
    }

    function fnInner() {

    }
}

function myOtherFn(callBack) {
    callBack()
}

myOtherFn(function () {

})

let dt = {
    nm: null
}
// console.log(dt.acb)

let lngs = ['php', 'java', 'kotlin', 'go', 'js', 'ts']

let rmvd = lngs.splice(3, 3, 'c', 'cpp', 'core')
console.log('***************')
lngs.splice(lngs.length, lngs.length, ...rmvd)
lngs.forEach(el => console.log(el))
