

const repeatString = function(text, num) {
    if(num === 0){
        return ''
    }
    else if(num<0){
        return 'ERROR'
    }
    if(text === ''){
        return ''
    }
    else{
        let s1 = ""
    while(num>0){
        s1 = s1+text;
        num--;
    }
    return s1
}

};

// Do not edit below this line
module.exports = repeatString;
