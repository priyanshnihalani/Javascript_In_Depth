function main(){
    let counter = 0;

    return{
        increment: function() {
            counter++
        }, 
        decrement: function() {
            counter--
        },
        getCounter: function(){
            return counter
        }
    }
}

const mainobj = main()
mainobj.increment()
mainobj.increment()

console.log(mainobj.getCounter())