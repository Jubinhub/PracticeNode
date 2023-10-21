export default function makeArrFlat(arr){
    let newArr= [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(makeArrFlat(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}