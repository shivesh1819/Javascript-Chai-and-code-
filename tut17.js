//Imediately Invoked Function Expression(IIFE)
(function chai(){
    //named iife
    console.log(`Db Connected`);
})();
 //Avoiding polluting the global namespace by creating a new scope.
 ((name)=>{
    console.log(`Connecting DB 2${name}`);
 })("shivesh")
 ////