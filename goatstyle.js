function getzakat() {
    let goatValue = document.getElementById('goatzakat').value;
    let result;

     if (goatValue >=400){
        result = "4 Goats (After 400 goats, on one goat will be added to every hundred.)";
    } else if (goatValue>=201) {
        result = "3 Goats";
    }else if (goatValue>=121) {
        result = "2 Goats";
    }else if (goatValue>=40) {
        result = "1 Goat";
    }else if (goatValue>=1) {
        result = "0 Goat";
    }
    document.getElementById('resultshow').innerText=result;
    
}