var messages = [
    'this page is cRINGE!!!!',
    'this website is so nice but this page doesnt exist',
    'totally not the page you are looking for',
    'no jackva is not here',
    'qwq this  pAGE IS NOT existing',
    'idkw hat are you lookin for',
    'this page doesnt exist becAUSE JACK ANIMATES RUINED IT!!!',
    'cool message subscribe to jackva gaming',
    'wrong page bozo',
    'subscribe to corina the wolf guys really cool person guys',
    'LMA..... im not happy today',
    'no hate on jack!!',
    '#stophateonjack!!!!!',
    'jack animates knows everything about you.',
]
function newMessage() {
        var randomNumber = Math.floor(Math.random() * (messages.length));
        document.getElementById('messsageDisplay').innerHTML = messages[randomNumber];
}