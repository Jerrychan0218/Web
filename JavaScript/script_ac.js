var database = [
    {
        username:"jerrychan0218",
        password:"zj19900817"
    },
    {
        username:"yuwenchiu",
        password:"1234"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "so tired"
    },
    {
        username: "Kay",
        timeline: "Javascript is cool"
    }
];

function isUsedVaild(user,pass){
    for (var i=0; i < database.length; i++){
        if (database[i].username === user && 
            database[i].password === pass) {
                return true;
            }
    } //當我跑完loop都沒有產生true，那就會結束loop繼續跑其他，所以return false會在for loop外面 
    return false;
}

function signIn(user, pass) {
        if (isUsedVaild(user, pass)) { //當isUsedVaild(user, pass)這個function跑完，結果是true，signin function才會開跑，如果是false就會跑else那邊
                console.log(newsFeed); //isUsedVaild放在上面並不會先執行，因為我們沒有call它，而是在signin function裡才有，所以它會在實行signin function時才被運行
            } else {
                alert("Sorry, wrong username or password");
            }
}

var userNamePrompt = prompt("What is your username?")
var passwordPrompt = prompt("What is your password?")

signIn(userNamePrompt, passwordPrompt);

