/**
 * for a given string tell me whether it has even number of characters or not
 */


function evenSizedString(str){
    const size = str.length;
    // console.log(str,size);
    if(size%2===0){
        // console.log('even size');
        return true;
    }
    else{
        // console.log('odd size');
        return true;
    }
}
// const result = evenSizedString("Dhaka")
// console.log(result);
// evenSizedString("faka")


function doubleOrTriple(number , doDouble){
    if(doDouble === true){
        const result = number *2
        return result;
    }else{
        const result = number *3;
        return result;
    }
} 
// console.log(doubleOrTriple(5,true))
// console.log(doubleOrTriple(5,false))  


function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
console.log(numberOfElements([12,23,34,3,53,53]));
