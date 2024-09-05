function create_Acount() {
    let id = document.querySelector('#id');
    let pw = document.querySelector('#pw');
    let re_pw= document.querySelector('#re_pw');

    if(id.value == "" || pw.value == "" || re_pw.value == "" || email.value == "") {
        alert("모두 입력하지 않으셨습니다.");
    } 
    else {
        if(pw.value !== re_pw.value) {
            alert("비밀번호가 같지 않습니다.")
        } 
        else {
            location.href = 'main.html'
        }
    }
} 