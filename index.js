

let localData = [{username : '운영자', content : '안녕하세요', date : getWrittingDate()} , {username : '운영자', content : '오늘 필터링 구현할 예정입니다.', date : getWrittingDate()}, {username : '깡깡무슨깡', content : '아니 그러니깐 신곡 들어봤냐구. 비트는 문제가 아니야. 가사랑 노래가 문제지.', date : getWrittingDate()} ,{username : '김정준', content : '콜라! 콜라! 콜라를 다오!', date : getWrittingDate()} , {username : '스딸린', content : 'this is a twittler, now then this is a twisted-Hitler', date : getWrittingDate()},{username : '깡깡무슨깡', content : '오늘도 식후깡하셨나요? 안하셨으면 어서 새우깡 입에 물고 한국다람쥐랑 1일1깡하세욧!', date : getWrittingDate()},{username : '운영자', content : '오늘 저녁 7시에 정모있습니다. 아시지요? 어서들 출발하세요 ^^', date : getWrittingDate()} ]
let lastIndex = localData.length-1;

const inputUsernameGetter = document.querySelector(`#inputUsername`);
const inputTextGetter = document.querySelector(`#inputText`);
const inputBtn = document.querySelector(`#textSubmit`);
const refreshBtn = document.querySelector(`#refresh`);
let beaconReply = document.querySelector(`#beaconReply`);
let filteringCount = 0;



inputBtn.addEventListener(`click`, () => {
   creatNewReply() 
});


function creatNewReply() {

  let obj = {};
  
  obj.username = inputUsernameGetter.value;
  obj.content = inputTextGetter.value;
  obj.date = getWrittingDate();
  
  console.log(obj);

  localData.unshift(obj);

// 이하 댓글 생성 코드  
let beacon = document.getElementById(`beaconReply`);
let liElement = document.createElement('li');
liElement.classList.add(`replybox`);

let usernameElement = document.createElement(`div`);
usernameElement.classList.add(`replyName`);
usernameElement.textContent = localData[0].username 
// 이상 div태크 replyName클래스 선언 할당


let contentElement = document.createElement('p');
contentElement.classList.add(`replyContent`);
contentElement.textContent = localData[0].content
// 이상 p태그 replyContent클래스 선언 할당

let dateElement = document.createElement(`div`);
dateElement.classList.add(`replyDate`)
dateElement.textContent = localData[0].date
// 이상 div태그 replyDate클래스 선언 할당

beacon.appendChild(liElement)
liElement.appendChild(usernameElement)
liElement.appendChild(contentElement)
liElement.appendChild(dateElement)
//이상 댓글 생성코드
}

function getWrittingDate() {
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    let elDate = year + '/' + month + '/' + date;
    return elDate;
} // YYYY/MM/DD 형식으로 일자 리턴


refreshBtn.addEventListener(`click`, () => {
  
let elems = document.getElementsByClassName(`replybox`)
// for(let j = 0; j < elems.length; j++) {
// elems[j].style.display = `none`;
// }

let beacon = document.getElementById(`beaconReply`);

while(beacon.hasChildNodes())
{
  beacon.removeChild(beacon.firstChild);
}




for (let i = 0; i < localData.length; i++) {

let obj = localData[i];
// 이하 댓글 생성 코드  
let liElement = document.createElement('li');
liElement.classList.add(`replybox`);

let usernameElement = document.createElement(`button`);
usernameElement.classList.add(`replyName`);
usernameElement.textContent = obj.username
usernameElement.onclick = () => { if (filteringCount === 0){
  usernameElement.setAttribute(`Id`,`clickedName`)
  filtering();
}
};
// 이상 div태크 replyName클래스 선언 할당 및 이름 클릭시 clicked 아이디 부여


let contentElement = document.createElement('p');
contentElement.classList.add(`replyContent`);
contentElement.textContent = obj.content
// 이상 p태그 replyContent클래스 선언 할당

let dateElement = document.createElement(`div`);
dateElement.classList.add(`replyDate`)
dateElement.textContent = obj.date
// 이상 div태그 replyDate클래스 선언 할당

beacon.appendChild(liElement)
liElement.appendChild(usernameElement)
liElement.appendChild(contentElement)
liElement.appendChild(dateElement)
//이상 댓글 생성코드
}
});

  
function filtering() {
  
  let clicked = document.getElementById(`clickedName`);
  let elems = document.getElementsByClassName(`replybox`);
  
  while (elems !== undefined){
    if (clicked.textContent !== elems[i].childNodes[0].innerText){
      elems[i].style.display = 'none'
    }
  }
  // 클릭한 username 과 맞지 않는 것은 display : none 처리

clicked.removeAttribute(`Id`)
// 부여된 아이디 삭제
}
