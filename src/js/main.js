//Link Shortner Script by: INovomiast

const gotobtn = document.getElementById('gotobtn');
const gotourl = document.getElementById('gotobtn_url');
var timeleft = 5;
const view_ad_btn = document.getElementById('');
const donate_btn = document.getElementById('');
const body = document.body;

const urls = ['https://inovomiast.github.io/school-works/', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx212dq1xz4gb2/?theme=light', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx274w1xz4u00/?theme=light', 'https://inovomiast.github.io/school-works/works/subjects/lengua/1fx21q01xz49vk/', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx27il1xz4bpv/', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx2d281xz4g8x/', 'https://inovomiast.github.io/school-works/works/subjects/filosofia/1fx2jwx1xz4r0a/', 'https://inovomiast.000webhostapp.com/user/inovomiast/cdn/school/audio/Audio_Telefono_Orientacion.mp3', 'https://inovomiast.github.io/school-works/works/subjects/lengua/1fx210kj1xz4t6g', 'https://inovomiast.github.io/school-works/works/subjects/lengua/1fx2eo81xz4oq9', 'https://inovomiast.github.io/school-works/works/subjects/tecnologia/1fx2fht1xz4emd', 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx2p0y1xz4amt/index.html', 'https://inovomiast.github.io/school-works/works/subjects/filosofia/1fx2qqk1xz4g4t/'];

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
}else if(shid === 'NkTt7HZ3Ro'){
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
}else if(shid === 'hzh4Bxxi'){
    document.title = 'La Creatividad - IShortner';
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
            gotourl.href = urls[7];
        }
    
    }, 1000);
}
}else if(shid === 'hzh4Bxxi'){
    document.title = 'Imagenes del Modernismo - IShortner';
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
            gotourl.href = urls[8];
        }
    
    }, 1000);
}
}else if(shid === 'DVQv2iMp'){
    document.title = 'La Situaci??n en la Espa??a del Siglo XIX - IShortner';
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
            gotourl.href = urls[9];
        }
    
    }, 1000);
}
}else if(shid === '0mzW3t2B'){
    document.title = 'Hidraulica y Neum??tica - IShortner';
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
            gotourl.href = urls[10];
        }
    
    }, 1000);
}
}else if(shid === 'VQI0wvP2'){
    document.title = 'Nido Para Abejas - IShortner';
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
            gotourl.href = urls[11];
        }
    
    }, 1000);
}
}else if(shid === ''){
    document.title = 'Unidad 3: La Socializaci??n - IShortner';
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
            gotourl.href = urls[12];
        }
    
    }, 1000);
}
}


else{
    window.location.href = 'https://inovomiast.github.io/ishortner/errors/404/';
}


//Ok, again, github does not want to... update the code... mothertruckers
//Oh, and when I pulled the Coment... github jus't said MESSIRVE!
