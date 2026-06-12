let s ="Hello World";
console.log(s.slice(-5).length);
s = " fly me to the moon"
console.log(s.substring(s.indexOf("moon")).length);

function isAnagram(str1,str2){
   let s1 = str1.split("").sort().join("");
   let s2 = str2.split("").sort().join("");
    if(s1 === s2){
        console.log(str1 + " and " + str2 + " are anagrams");
    }
    else{
        console.log(str1 + " and " + str2 + " are not anagrams");
    }
}
isAnagram("listen","silent");
isAnagram("hello","world");