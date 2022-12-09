function shout(string){
    return string.toUpperCase();

    
}

function whisper(string){
    return string.toLowerCase();

}

function logShout(string){
    console.log(shout(string));

}

function logWhisper(string){
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string){
    //console.log(string);
    //console.log(string.toUpperCase());
    var upper = (string === string.toUpperCase());
    var lower = (string === string.toLowerCase());

    if(upper === true){
        return "YES INDEED!";
    }
    
    if(lower === true){
        return "I can't hear you!";
    }

    if(string === "Let's have dinner together!"){
        return "I would love to!";
    }

  
}



