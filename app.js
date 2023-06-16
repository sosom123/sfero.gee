const person = {
    firstName:"",
    age: 29,
    lastname:"meskhidze",
    printInfo:function(){
        return this.firstName + " ჩემი სახელია "
    }
}
console.log(printInfo().person);