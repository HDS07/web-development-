function countvow(str){
    let count=0;
    for (const char of str) {
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(`The total vowel present in a string ${str} is : ${count}`);
}

countvow("harsh");