//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2){
    let str1Sorted = str1.split('').sort().join('');
    let str2Sorted = str2.split('').sort().join('');
    if (str1Sorted === str2Sorted) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isAnagrams
}