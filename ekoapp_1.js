function group_words(list_of_words){
    var cleaned_words = {};
    cleaned_words[list_of_words[0]] = [];
    for (let i = 1; i < list_of_words.length; i++){
        let current_word = list_of_words[i];
        let matched = false;
        for(let key in cleaned_words){
            if(sort_string(current_word) === sort_string(key)){
                cleaned_words[key].push(current_word);
                matched = true;
                break;
            }
        }
        if(matched === false){
            cleaned_words[current_word] = [];
        }
    }
    for (let key in cleaned_words){
        print_string = key;
        for (let i = 0; i < cleaned_words[key].length; i++){
            print_string += " - " + cleaned_words[key][i];
        }
        console.log(print_string);
    }
}

function sort_string(str){
    return str.split("").sort().join("");
}

var aa = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];

group_words(aa);
