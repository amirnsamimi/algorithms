// Input: A sequence of n numbers ha 1 ;a 2 ;:::;a n i.
// Output: A permutation (reordering) ha 0 1 ;a 0 2 ;:::;a 0 n i of the input sequence such
// that a 0 1 හ a 0 2 හහ a 0 n .
// Thus, given the input sequence h31;41;59;26;41;58i, a correct sorting algorithm

function sort(input, order) {
    var temporary = 0;
    var sorted = [];
    input.forEach(function (el, index) {
        if (order === "asc" || order === undefined) {
            if (temporary > el) {
                sorted.push(temporary);
            }
            if (el > input[index + 1]) {
                sorted.push(el);
            }
            else {
                temporary = el;
            }
        }
        if (order === "desc") {
            if (temporary < el) {
                sorted.push(temporary);
            }
            if (el < input[index + 1]) {
                sorted.push(el);
            }
            else {
                temporary = el;
            }
        }
    });
    return sorted;
}
console.log(sort([31, 41, 59, 26, 41, 58]));
