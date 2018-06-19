function clean_text(dirty_text){
    console.log(dirty_text);
    var cleaner_text = "";
    var found_two = 0;
    var the_word = "";
    var times_of_reverse = 0;
    for(let i = 0; i < dirty_text.length; i++){
        if(dirty_text.charAt(i) === '('){
            times_of_reverse += 1;
        }
        if(dirty_text.charAt(i) === ')'){
            times_of_reverse -= 1;
        }
        if(dirty_text.charAt(i) === '(' || dirty_text.charAt(i) === ')'){
            console.log(dirty_text.charAt(i));
            console.log(found_two);
            found_two++;
            if(found_two == 2){
                for(let j = 0; j<times_of_reverse; j++){
                    the_word = reverse_string(the_word);
                }
                cleaner_text = the_word + cleaner_text;
                found_two = 0;
                the_word = "";
            }
        }
        else{
                the_word += dirty_text.charAt(i);
        }
    }
    console.log(cleaner_text);
}

function reverse_string(text){
    return text.split("").reverse().join("");
}

clean_text('(okay(foo))');
