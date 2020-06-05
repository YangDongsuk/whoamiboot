const startbtn2=document.querySelector('#start2');
const resetbtn2=document.querySelector('#reset2');
const input_m = document.getElementById("m_timer");
const input_s = document.getElementById("s_timer");



let b;


let timeElasped2=0;
let timerFunction=function(){
    timeElasped2=timeElasped2-1;
    let minute=Math.floor(timeElasped2/60);
    let second= timeElasped2%60;
    if (minute<10) minute='0'+minute;
    if (second<10) second='0'+second;
    let timenow=minute+':'+second;

    let timeshown=document.querySelector('#w_timer h1');
    timeshown.textContent=timenow;
    if(timeElasped2===0){
        clearInterval(b);
        state=0;
        input_m.value='';
        input_s.value='';
        document.querySelector('#start2').textContent='start';
        document.querySelector('#w_timer h1').textContent='종료됨';

    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              


let state=0;
startbtn2.onclick=function(){
    let curState=document.querySelector('#start2').textContent;
    
    if(state===0){
        const inmin=input_m.value;
        const insec=input_s.value;
        timeElasped2=Number(inmin)*60 + Number(insec);
        state=1;
        console.log(timeElasped2);


    }
    if(curState==='start'){
        
        document.querySelector('#start2').textContent='stop';
        b=setInterval(timerFunction,1000);
       
        
    }
    else{
        document.querySelector('#start2').textContent='start';
        clearInterval(b);
    }
   

    
}

console.log(timeElasped2);

if(timeElasped2===0) clearInterval(b);


resetbtn2.onclick=function(){
    timeElasped2=0;
    clearInterval(b);
    let timeshown=document.querySelector('#w_timer h1');
    timeshown.textContent='00:00';
    state=0;
    input_m.value='';
    input_s.value='';

}