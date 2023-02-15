var buddyStrings = function (A, B) {
    if (A.length !== B.length) return false;

    let notEqualA = '',
        notEqualB = '',
        hasRepeat = false,
        map = new Map();

    for (let i = 0, len = A.length; i < len; i++) {
        let a = A.charAt(i), b = B.charAt(i);

        if (a !== b) {
            notEqualA += a;
            notEqualB = b + notEqualB;
        }

        if (!map.has(a)) {
            map.set(a, 1);
        } else {
            hasRepeat = true;
        }
    }

    return (notEqualA.length === 2 && notEqualA === notEqualB) ||
        (hasRepeat && notEqualA.length === 0);
};

console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"));