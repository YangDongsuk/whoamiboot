var Links={
    SetColor:function(color){
    // var alist=document.querySelectorAll('a');
    //     var i =0;
    //     while(i<alist.length){
    //         alist[i].style.color=color;
    //         i=i+1;
    //     } 
    $('a').css('color',color)
}

}
var Body={
    SetColor:function(color){
    //document.querySelector('body').style.color=color;
    $('body').css('color',color);

},
    SetBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);



}
}
var H1={
    SetH1Color:function(color){
        //document.querySelector('body').style.backgroundColor=color;
       
        $('h1').css('backgroundColor',color);
    
    
    }
}

function nightDayHandler(s){
 
    if(s.value==='night'){
        Body.SetBackgroundColor('black');
        H1.SetH1Color('red');
        Body.SetColor('white');
        s.value='day'
        Links.SetColor('powderblue');


    }
    else{
        Body.SetBackgroundColor('white');

        H1.SetH1Color('aquamarine');
        Body.SetColor('black');
        s.value='night'
    
        Links.SetColor('blue');

    }
}