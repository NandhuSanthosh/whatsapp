

let chatArea = document.querySelector('.whatsapp-chats');

class Message{
    constructor(sid,rid,msg,time){
        this.senderid=sid,
        this.recieverid=rid,
        this.msg=msg,
        this.time=time
        
    }
}
class Tile{
    constructor(name,id,msg,){
        this.name=name,
        this.id=id,
        this.msg=[msg],
        this.unreadedMsg=1;
    }
}
let array = [];
let msg=new Message('200090489','100','first message','10:30 am');
let contact = new Tile('Anandhu' , '200090489',msg);
array.push(contact);
msg=new Message('37498739','100','whatever','9:20 pm');
contact = new Tile('Alan' , '37498739',msg);
array.push(contact);
msg=new Message('200090489','100','second message','10:45 pm');
array[0].msg.push(msg);
let sortedArray=array;


function pushMsg(element , msg){
    element.msg.push(msg);
    element.unreadedMsg++;
    // arraySorter();
    arraySorterTwo(element);
}

function pushContact(name,msg){
    let id = new Date().getTime();
    msg.senderid=id;
    let contact = new Tile(name,msg.senderid,msg);
    array.push(contact);
    // arraySorter();
    arraySorterTwo(contact);
}





function replayMsg(rid,msg,time){
    let text=new Message('100',rid,msg,time);
    array.forEach( element => {
        if(element.id == rid){
            pushMsg(element, text);
            msgTileCreater(element , 'chat-chats-primary-phone')
            if( rid == '200090489')
            msgTileCreater(element , 'chat-chats')

        }
    })
    display();
}
function recieveMsg(sid,msg,time){
    let text=new Message(sid,'100',msg,time);
    array.forEach( element => {
        if(element.id == sid){
            pushMsg(element, text);   
            msgTileCreater(element , 'chat-chats-primary-phone')
            msgTileCreater(element , 'chat-chats')
        }
    })
    display();
}
function anandhuChatDisplayOnload(){
    msgTileCreater(array[0],'chat-chats');
}
function display(){

    chatArea.innerText='';
    array.forEach(element => {
        
        let tile = document.createElement('div');
        let time = TimeGeter();
        tile.classList='whatsapp-chat-tile';
        tile.id=element.id;
        tile.innerHTML=`
        <div class="whatsapp-dp">
            <img src="blank-profile-picture-973460_1280.webp" alt="">
        </div>
        <div class="name-details">
            <div class="justify-space-between">
                    <h5></h5>
                <div class="last-msg-time"></div>
            </div>
              <div class="justify-space-between">
                <p></p>
                <div class="notification-number" id='notification-no'></div>
            </div>
        </div>
        `;
        tile.style='cursor:pointer';
        tile.addEventListener('click',openChat);
        let lastMsgNo = element.msg.length;
        let nameContainer = tile.children[1];
        nameContainer.children[0].children[0].innerText=element.name;
        nameContainer.children[1].children[0].innerText=element.msg[lastMsgNo - 1].msg;
        if(element.unreadedMsg>0){
            nameContainer.children[1].children[1].innerText=element.unreadedMsg;
        }else{
            nameContainer.children[1].children[1].style='display:none';
        }
        nameContainer.children[0].children[1].innerText=element.msg[lastMsgNo-1].time;
        chatArea.appendChild(tile);
    })
    dropdownUpdater();
}


function TimeGeter(){
    let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let meridiem =  'am';
        if(hour>12){
            hour-=12;
            meridiem = 'pm'
        }
        if(minutes < 10){
            minutes = '0' + minutes 
        }
        let time= hour + ':' + minutes + ' ' + meridiem;
        return time;
}

// function arraySorter(){

//     array.sort((a,b) => {
//         return lastMsgTimeConverter(b) - lastMsgTimeConverter(a) ;
//      })
//      display();
// }
function lastMsgTimeConverter(a){
    let aTime=(a.msg[a.msg.length-1]).time
    let aHour=aTime.slice(0,aTime.length-6);
    let aMinute = aTime.slice(aTime.length-5,aTime.length-3);
    let aMeridian = aTime.slice(aTime.length-2,aTime.length);
    if(aMeridian == 'pm'){
        aHour = parseInt(aHour) + 12;
    }
    let aT = aHour + aMinute;
    parseInt(aT);
    // console.log((aT))
    return aT;
}


function arraySorterTwo(arrayElement){
    // console.log(arrayElement.id)
    if(sortedArray.length == 0){
        sortedArray.push(arrayElement);
    }else{
        sortedArray = sortedArray.filter(  sortedArrayElement => {
            // console.log(arrayElement.id + ' ' + sortedArrayElement.id)
            if(arrayElement.id == sortedArrayElement.id){
                return 0;
            }
            else{
                return 1;
            }
        })
        sortedArray.push(arrayElement);
    }
    array = sortedArray.reverse();
}