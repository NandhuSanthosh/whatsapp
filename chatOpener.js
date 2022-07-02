let screen = document.getElementById('screen-content');
let screenTwo = document.getElementById('chat-screen');
let backBtn = document.getElementById('back-to-chatlist');
let chatOwner;
let chatTiles= document.getElementsByClassName('whatsapp-chat-tile');
function openChat(event){
    let finder = event.path.length;
    let personName = document.getElementById('person-name');
    let person = event.path[finder-12];
    screen.style='display:none'
    screenTwo.style='display:block'
    array.forEach(element => {
        if(person.id == element.id){
            chatOwner = element;
        }
    })
    personName.innerText = chatOwner.name;
    msgTileCreater(chatOwner,'chat-chats-primary-phone');
}

backBtn.style='cursor:pointer';
backBtn.addEventListener('click',openChatList);
function openChatList(e){
    chatOwner.unreadedMsg=0;
    for(let i=0;i<chatTiles.length;i++){
        if(chatTiles[i].id == chatOwner.id){
            chatTiles[i].children[1].children[1].children[1].style='display:none'

        }
    }
    screen.style='display:block';
    screenTwo.style='display:none';
}
