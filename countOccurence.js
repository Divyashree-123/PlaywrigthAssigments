let str = "JavaScript";
function countoccurence(str){
     let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === "a"){
          count++;
        }
        
    }
    console.log("The number of occurence of a in JavaScript is " + count);
}
countoccurence(str)
