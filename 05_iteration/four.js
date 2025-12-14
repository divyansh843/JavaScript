const myObject = {
    js: "java script",
    cpp: "c++",
    py: "Python"
}

for (const key in myObject) {
    console.log(`${key} sortcut for myObject[key]`);
    
}

const programming = ["js", "python", "java", "rube"]

for (const key in programming) {
   console.log(key);
}
