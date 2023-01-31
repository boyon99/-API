let key = "?key=44d03c21429c1454bf58532d157bbc75" // key prameter
let targetDt = "&targetDt=20220101" // targetDt
const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json"
  + key
  + targetDt

let container = document.getElementById('a') // html에서 나타날 요소 선택


fetch(url)
  .then(response => response.json())
  .then(function (item) { 
    for (let i = 0; i < 20; i++) {
      // div 생성 
      let div = document.createElement('div'); 

      // id 부여
      div.id = 'movies'

      // api를 리스트에 담기
      search_movie_list = item.boxOfficeResult.weeklyBoxOfficeList[i]
      console.log(search_movie_list);

      // 요소 생성
      let movieNm = document.createElement('p')
      let openDt = document.createElement('p')
      let rank = document.createElement('p')

      movieNm.innerText = search_movie_list.movieNm
      openDt.innerText = search_movie_list.openDt
      rank.innerText = search_movie_list.rank


      // html에 요소 담기
      div.appendChild(movieNm);
      div.appendChild(openDt);
      div.appendChild(rank);
      container.appendChild(div);

    }

  });