function login() {
    let id = document.querySelector('#id');
    let pw = document.querySelector('#pw');

    if(id.value == "" || pw.value == "" ) {
        alert("아이디 또는 비밀번호를 입력해주세요.")
    }
    else{
        location.href = "main.html"
    }
}

function back() {
    history.go(-1);
}