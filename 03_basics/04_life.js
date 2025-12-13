// Immediatily invoke function Expression (LIFE)

(function chai(){ // named life
    console.log(`DB CONNECTED`);  
})(); // semicolen cumpulsery for ending block/function

((name) => { // unnamed life
    console.log(`DB connectes two ${name}`);   
})("Divyansh")