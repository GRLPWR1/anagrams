const {isAnagrams} = require('../index');

describe('isAnagrams()', function() {
    it('returns a boolean value', ()=> {
        expect(typeof isAnagrams()).toBe('boolean');
        expect(isAnagrams()).not.toBe(/\d/);
        expect(isAnagrams()).not.toBe(/\w/);
    });
    it('correctly checks if both strings have the same number of the same characters', () => {
        let str1 = 'lemon';
        let str2 = 'melon';
        let str3 = 'melone'
        expect(isAnagrams(str1, str2)).toBeTruthy();
        expect(isAnagrams(str1, str3)).tiBeFalsy();
    })
});