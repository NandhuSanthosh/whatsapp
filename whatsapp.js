var timeOne;
let timeDiv = document.getElementsByClassName('time');
function timecaller(){

    setTimeout('displaytime()',1000);
}
function displaytime(){
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var abbreviations = 'AM';
    var hourToShow = hour;
    if(hour>=12){
        abbreviations= 'PM';
        hourToShow = hour-12;
    }
    if(minute<10){
        minute = '0' + minute; 
    }
    timeOne = hourToShow + ':' + minute;
    var time =timeOne + ' ' + abbreviations;
    for(let i=0; i< timeDiv.length ;i++){
        timeDiv[i].innerText=time;
    }
    timecaller();
}
let sectionIndicator = document.getElementById('section-indicator');
let content = document.getElementById('screen');

function calls(){
    sectionIndicator.style='grid-area:four';
    content.style="display:none"
}
function status(){
    sectionIndicator.style='grid-area:three';
    content.style="display:none"
}
function chats(){
    sectionIndicator.style='grid-area:two';
    content.style='display:block'
}
function camera(){
    sectionIndicator.style='grid-area:one';
    content.style="display:none"
}