// 기업이 들어가 있는 데이터베이스

// 그때그때 li 태그를 생성하는 경우의 js파일
let testData = [
  {name: "카카오"},
  {name: "카카오게임즈"},
  {name: "네이버"},
  {name: "한화생명"},
  {name: "한화금융투자"},
  {name: "삼성전자"},
  {name: "삼성생명"},
  {name: "삼성전기"},
  {name: "삼성자동차"},
  {name: "삼성슬리퍼"},
  {name: "한화보험"},
  {name: "삼성가출"},

]




let searchInput = document.querySelector(".search");

const arrayChange = function (e) {
  let inputValue = e.target.value;
  let searchListParent = document.querySelector(".search_list_wrap");
  console.log(e);
  if (e.key === "Process") {
    
    searchListParent.classList.remove('hidden');
    // 조건에 맞는 데이터들이 담긴 배열
    let outputList = testData.filter((data) => {
      if (inputValue !== '' && e.code !== 'Backspace') {
        return data.name.includes(inputValue);
      }
    });

    console.log(inputValue);
    // 조건에 맞는 데이터들이 존재할 경우
    if (outputList.length > 0) {
      // 텍스트를 삽입하는 함수
      innerTextList(outputList);
    }
    // 검색창의 값이 없을 경우
  }
  // Backspace를 눌렀고 입력값이 없을 경우 실행
  if (e.code === "Backspace" && inputValue === "") {
    // 텍스트를 제거하는 함수
    clearTextList();
    searchListParent.classList.add('hidden');
  }
}


// 어떤 배열 데이터를 받았을때 그것을 for문으로 돌면서 태그의 test를 변경해주는 함수
const innerTextList = (dataList) => {
  // 각각의 기업명이 들어갈 li tag
  let searchListChild = document.querySelectorAll('.search_list>li');

  for (let i = 0; i < 5; i++) {
    console.log(dataList[i]);
    if (i < dataList.length) {
      searchListChild[i].innerText = dataList[i].name;
    } 
    else {
      // 밑에 칸을 공백으로 나두고 싶을 경우
      searchListChild[i].innerHTML = '&nbsp;';

      console.log("boom");
    }
  }
}

const clearTextList = () => {
  let searchListChild = document.querySelectorAll('.search_list>li');
  for (let i = 0; i < 5; i++) {
    searchListChild[i].innerHTML = '&nbsp;';
    console.log("clear");
  }
}
searchInput.addEventListener("keyup", arrayChange);


// 미리 만들어놓고 보이게하거나 안보이게하거나로 할까?
// 구글의 경우 미리 만들어놓고 class를 이용하여 dispaly:none을 해준다.

/// KeyboardEvent 객체의 key값과 code는 무엇이고 특히 key 값의 Process는 무엇인가??




// 
// 3. 초성단위로는 미구현