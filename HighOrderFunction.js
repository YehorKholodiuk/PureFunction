const user = {
    age: 24,
    password: 'gjghghk1234321',
    agreeToTerm: true
}
const user2 = {
    age: 29,
    password: 'gjghg34321',
    agreeToTerm: false
}


function checkAge(user){
    return user.age > 17;
}

function checkPassword(user){
    return user.password.length >= 8;
}

function checkTerms(user) {
    return user.agreeToTerm === true;
}

//console.log(checkAge(user))

function validate (obj, ...tests){
    for (let i = 0; i < tests.length; i++) {
        if (tests[i](obj) === false) return false;
    }
    return true;
}

console.log(validate(user,checkAge, checkTerms, checkPassword))

function createValidator (...tests){
    return function(obj){
        for (let i = 0; i < tests.length; i++) {
            if (tests[i](obj) === false) return false;
        }
        return true;
    }
}

const validator1 = createValidator(checkAge, checkPassword, checkTerms)
const validator2 = createValidator(checkAge, checkPassword)
console.log(validator1(user2))
console.log(validator2(user2))
