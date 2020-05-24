

/*

변수1 = 유저네임 // "input-username".value
변수2 = 댓글내용 (문자배열) // "textbox".value
변수3 = Date

*/

function runningout() {
    
    let elUsername = document.querySelector(`#input-username`);
    let elInputText = document.querySelector(`#textbox`);
    

    document.write(elUsername + elInputText);

}
































function getWrittingDate() {
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    let elDate = year + '/' + month + '/' + date;
    return elDate;
}