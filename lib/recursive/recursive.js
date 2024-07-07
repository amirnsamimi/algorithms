export const recursive = (word) => {
let letters = ""
    if(word.length < 1){
        return word;
    } else {
        for(let i = 0; i < word.length; i++){
            letters += word[i] + " "
        }
        return letters;
    }

}

