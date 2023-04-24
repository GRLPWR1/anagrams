//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2){
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let sameCharacter = 0;
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                sameCharacter += 1;
            }
        }
    }
    if (sameCharacter == arr1.length && sameCharacter == arr2.length) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isAnagrams
}