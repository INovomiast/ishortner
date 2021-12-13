//Link Shortner Script by: INovomiast

const gotobtn = document.getElementById('gotobtn');
const gotourl = document.getElementById('gotobtn_url');
var timeleft = 5;
const view_ad_btn = document.getElementById('');
const donate_btn = document.getElementById('');
const body = document.body;

const urls = ['https://inovomiast.github.io/school-works/', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx212dq1xz4gb2/?theme=light', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx274w1xz4u00/?theme=light', 'https://inovomiast.github.io/school-works/works/subjects/lengua/1fx21q01xz49vk/', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx27il1xz4bpv/', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx2d281xz4g8x/', 'https://inovomiast.github.io/school-works/works/subjects/filosofia/1fx2jwx1xz4r0a/'];

//URL Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const shid = urlParams.get('shid');

if(shid === 'TM7eWuTD'){
    document.title = 'SchoolWorks - IShortner';
    body.onload = () => {
        gotourl.href = '';
        gotobtn.disabled = true;
        var unlockTimer = setInterval(function(){
            
            gotobtn.innerHTML = timeleft + "secs To Unlock the Link!";
            timeleft -= 1;
            
            if(timeleft === 0){
                gotobtn.innerHTML = 'Access to Link';
                clearInterval(unlockTimer);
                gotobtn.disabled = false;
                gotourl.href = urls[0];
            }
        }, 1000);
        
    }
}else if(shid === 'wICEtQgO'){
    document.title = 'Actitud y Aptitud - IShortner';
    body.onload = () => {
        gotourl.href = '';
        gotobtn.disabled = true;
        var unlockTimer = setInterval(function(){
            
            gotobtn.innerHTML = timeleft + "secs To Unlock the Link!";
            timeleft -= 1;
            
            if(timeleft === 0){
                gotobtn.innerHTML = 'Access to Link';
                clearInterval(unlockTimer);
                gotobtn.disabled = false;
                gotourl.href = urls[1];
            }
        }, 1000);
        
    } 
}else if(shid === 'QqBwOCo2'){
        document.title = '5 Emprendedores Famosos - IShortner';
    body.onload = () => {
        gotourl.href = '';
        gotobtn.disabled = true;
        var unlockTimer = setInterval(function(){                
        gotobtn.innerHTML = timeleft + "secs To Unlock the Link!";
        timeleft -= 1;
                
        if(timeleft === 0){
            gotobtn.innerHTML = 'Access to Link';
            clearInterval(unlockTimer);
            gotobtn.disabled = false;
            gotourl.href = urls[2];
        }
        
    }, 1000);
    }
}else if(shid === 'wp30MQh4'){
        document.title = 'Los Tipos de Textos - IShortner';
    body.onload = () => {
        gotourl.href = '';
        gotobtn.disabled = true;
        var unlockTimer = setInterval(function(){                
        gotobtn.innerHTML = timeleft + "secs To Unlock the Link!";
        timeleft -= 1;
                
        if(timeleft === 0){
            gotobtn.innerHTML = 'Access to Link';
            clearInterval(unlockTimer);
            gotobtn.disabled = false;
            gotourl.href = urls[3];
        }
        
    }, 1000);
    }
}else if(shid === 'kCPR9Kwy'){
    document.title = 'La Importancia del Espiritu Emprendedor - IShortner';
body.onload = () => {
    gotourl.href = '';
    gotobtn.disabled = true;
    var unlockTimer = setInterval(function(){                
    gotobtn.innerHTML = timeleft + "secs To Unlock the Link!";
    timeleft -= 1;
            
    if(timeleft === 0){
        gotobtn.innerHTML = 'Access to Link';
        clearInterval(unlockTimer);
        gotobtn.disabled = false;
        gotourl.href = urls[4];
    }
    
}, 1000);
}
}else if(shid === '1M44PVul'){
    document.title = 'La Zona de Comfort - IShortner';
body.onload = () => {
    gotourl.href = '';
    gotobtn.disabled = true;
    var unlockTimer = setInterval(function(){                
    gotobtn.innerHTML = timeleft + "secs To Unlock the Link!";
    timeleft -= 1;
            
    if(timeleft === 0){
        gotobtn.innerHTML = 'Access to Link';
        clearInterval(unlockTimer);
        gotobtn.disabled = false;
        gotourl.href = urls[5];
    }
    
}, 1000);
}
else if(shid === 'NkTt7HZ3Ro'){
    document.title = 'Filosofia Unidad 2 - IShortner';
body.onload = () => {
    gotourl.href = '';
    gotobtn.disabled = true;
    var unlockTimer = setInterval(function(){                
    gotobtn.innerHTML = timeleft + "secs To Unlock the Link!";
    timeleft -= 1;
            
    if(timeleft === 0){
        gotobtn.innerHTML = 'Access to Link';
        clearInterval(unlockTimer);
        gotobtn.disabled = false;
        gotourl.href = urls[6];
    }
    
}, 1000);
}

}else{
    window.location.href = 'https://inovomiast.github.io/ishortner/errors/404/';
}


//Ok, again, github does not want to... update the code... mothertruckers
//Oh, and when I pulled the Coment... github jus't said MESSIRVE!
