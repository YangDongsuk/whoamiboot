var jbResult = prompt( '비밀번호를 입력하세요', '' );
var password='1234';
if (jbResult===password){
    alert("ok");
}
else{
    alert("no");
    window.location.href = 'index.html';

}