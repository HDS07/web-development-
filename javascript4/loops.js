console.log("java script loops!!");

obj={
    "name":"harsh",
    age:20,
    "specialization":"AIML"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);    
    }
}