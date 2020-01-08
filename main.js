// task 1//

// let objA = {
//     name: 'Product1',
//     count: function (cn) {
//         return cn
//     }
// };
//
// let objB = Object.create(objA, {
//     name2: {
//         value: 'Product2'
//     } ,
//     price: {
//        value: function(pr) {
//             return pr
//         }
//     }
// });
//
// let objC = Object.create(objB, {
//     name3: {
//         value: 'Product3'
//     },
//     term: {
//         value : function (tm) {
//             return tm
//         }
//     }
// });
//
// console.log(Object.getPrototypeOf(objB) === objA);
// console.log(Object.getPrototypeOf(objC) === objB);


//_______________________________________________//

//task2//

// let objA = {
//     name: 'Product1',
//     count: function (cn) {
//         return cn
//     }
// };
//
// let objB = {
//     name2: 'Product2',
//     price:  function(pr) {
//             return pr
//         },
// };
//
// let objC = {
//     name3: 'Product3',
//     term: function (tm) {
//             return tm
//         },
// };
//
// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);

// console.log(Object.getPrototypeOf(objB) === objA);
// console.log(Object.getPrototypeOf(objC) === objB);
//_______________________________________________//

//task3//

function CreateObjA () {
    this.name = 'Product1';
    this.count = function (cn) {
        return cn
    }
}

function CreateObjB () {
        this.name2 = 'Product2';
        this.price =  function(pr) {
        return pr;
    }
}


function CreateObjC () {
    this.name3 = 'Product3';
    this.term = function (tm) {
            return tm
    };
}


CreateObjB.prototype = Object.create(CreateObjA.prototype);
CreateObjB.prototype.constructor = CreateObjB;
let objB = new CreateObjB();

CreateObjC.prototype = Object.create(CreateObjB.prototype);
CreateObjC.prototype.constructor = CreateObjC;
let objC = new CreateObjC();

//__________________________________________________________________________



