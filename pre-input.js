// 테스트 데이터
let testData = [
  {name: "카카오"},
  {name: "카카오게임"},
  {name: "네이버"},
  {name: "한화생명"},
  {name: "한화금융투자"},
  {name: "삼성전자"},
  {name: "삼성생명"},
  {name: "삼성전기"},
  {name: "삼성자동차"},
  {name: "삼성물산"},
  {name: "버버리"},
  {name: "한화보험"},
  {name: "삼성"},  
  {name: "비바리퍼블리카"},  
  {name: "펄어비스"},
  {name: "카카오뱅크"},
  {name: "신한은행"},
  
]

// 검색기능
const searchCompanyName = function (e) {
  let inputValue = e.target.value;
  let searchListParent = document.querySelector(".search_list_wrap");

  if (e.key === "Process") {
    searchListParent.classList.remove('hidden');
    // 조건에 맞는 데이터들이 담긴 배열
    let outputList = testData.filter((data) => {
      if (inputValue !== '' && e.code !== 'Backspace') {
        return data.name.includes(inputValue);
      }
    });
    // 조건에 맞는 데이터들이 존재할 경우
    if (outputList.length > 0) {
      // 텍스트를 삽입하는 함수
      innerTextList(outputList);
    }
  }
  // Backspace를 눌렀을 때 입력값이 없을 경우 실행
  if (e.code === "Backspace" && inputValue === "") {
    clearTextList();
    searchListParent.classList.add('hidden');
  }
}

// 데이터 배열을 for문으로 돌면서 태그의 text를 변경 해주는 함수
const innerTextList = (dataList) => {
  // 각각의 기업명이 들어갈 <li>
  let searchListChild = document.querySelectorAll('.search_list>li');

  for (let i = 0; i < 5; i++) {
    if (i < dataList.length) {
      searchListChild[i].innerText = dataList[i].name;
    } 
    else {
      // 밑에 칸을 공백으로 나두고 싶을 경우
      searchListChild[i].innerHTML = '&nbsp;';
    }
  }
}
// <li>의 텍스트를 비워주는 함수
const clearTextList = () => {
  let searchListChild = document.querySelectorAll('.search_list>li');
  for (let i = 0; i < 5; i++) {
    searchListChild[i].innerHTML = '&nbsp;';
  }
}

// 이벤트 
let searchInput = document.querySelector(".search");
searchInput.addEventListener("keyup", searchCompanyName);


// 보이게 안보이게 하기
// 구글의 경우 미리 만들어놓고 태그에 inline방식으로 style을 지정해 주더라.
// 그치만 나는 class를 추가,제거에 따라 dispaly:none을 해줄것이다.

// 물음표?
// KeyboardEvent 객체의 key값과 code는 무엇이고 특히 key 값의 Process는 무엇인가??

// 개선해야 할 점

// 1. 세부화: 초성단위로는 미구현
// 2. 우선순위: [네이버, 버버리의] 경우 '버'를 입력했을 때 배열의 index순서로 나온다. 