let dropdown = document.getElementById('contact-selector');
let senderTextField = document.getElementById('sender-textField');
let replayTextField = document.getElementById('reciever-textField')
senderTextField.addEventListener('keydown',senderMsg);
replayTextField.addEventListener('keydown',recieverMsg);
function dropdownUpdater(){
    dropdown.innerText='';
    array.forEach(element => {
        let contactNames= document.createElement('option');
        contactNames.innerText = element.name;
        contactNames.value=element.id;
        dropdown.appendChild(contactNames);
        
    })

}

function sendMsg(){
    let sid=dropdown.value;
    let msg=document.getElementById('msgToSend').value;
    let time = TimeGeter();
    recieveMsg(sid,msg,time);
}

function recieverMsg(){
    if(event.key=='Enter'){
        let msg = replayTextField.value;
        replayTextField.value='';
        replayMsg(chatOwner.id , msg,TimeGeter());
    }
}
function senderMsg(){
    if(event.key == 'Enter'){
        let msg = senderTextField.value;
        senderTextField.value='';
        recieveMsg('200090489' , msg,TimeGeter());
    }
    
}

function newContactCreater(){
    let contactName = document.getElementById('nameField').value;
    let message = document.getElementById('msgField').value;
    let time = TimeGeter();
    let msg = new Message(null,100,message,time);
    pushContact(contactName,msg);
    display();

}




function msgTileCreater(element,id){
    let container = document.getElementById(id);
    container.innerText='';
    element.msg.forEach(message =>{
            let msgTile = document.createElement('div');
            msgTile.classList='msgTile'
            if(id == 'chat-chats'){
                if(element.id == message.senderid){
                    msgTile.innerHTML=`
                    <div class="msgSendTile msgSRTile">
                    <div class="msgArea"></div>
                    <div class="msgTime"></div>
                    </div>`;
                }else if (element.id == message.recieverid){
                    msgTile.innerHTML=`
                    <div class="msgReceiveTile msgSRTile">
                    <div class="msgArea"></div>
                    <div class="msgTime"></div>
                    </div>`;
                }
            }else{
                if(element.id == message.senderid){
                    msgTile.innerHTML=`
                    <div class="msgReceiveTile msgSRTile">
                    <div class="msgArea"></div>
                    <div class="msgTime"></div>
                    </div>`;
                }else if (element.id == message.recieverid){
                    msgTile.innerHTML=`
                    <div class="msgSendTile msgSRTile">
                    <div class="msgArea"></div>
                    <div class="msgTime"></div>
                    </div>`;
                    
                }
            }

            let tile = (msgTile.children[0]).children;
            tile[0].innerText = message.msg;
            tile[1].innerText = message.time;
            container.appendChild(msgTile)
            
        }
    )
}


let settings = document.getElementById('settings-container');
function settingsShow(){
    settings.style='display:block';
}
function settingsHide(){
    settings.style='display:none';
}

function dataUpdater(){
    localStorage.clear();
    let arrayString = JSON.stringify(array);
    console.log(arrayString);

    localStorage.setItem('data',arrayString);
    console.log(localStorage);
}

function deleteEveryThing(){
    localStorage.removeItem("data");
    console.log(localStorage);
}
function dataRecovery(){
    let a = localStorage.getItem('data');
    array= JSON.parse(a)
    console.log(array);
    display();
}