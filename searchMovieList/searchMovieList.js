let key = process.env.key // key prameter
let itemPerPage = "&itemPerPage=20" // itemPerPage
const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json"
  + key
  + itemPerPage

let container = document.getElementById('container') // 요소를 담을 컨데이너 생성

fetch(url)
  .then(response => response.json())
  .then(function (item) {
    for (let i = 0; i < 20; i++) {
      // div 생성 
      let div = document.createElement('div');
      div.id = 'movies'

      // api를 리스트에 담기
      search_movie_list = item.movieListResult.movieList[i]

      // 요소 생성
      let movieNm = document.createElement('p');
      let nationAlt = document.createElement('p');
      let genreAlt = document.createElement('p');
      let prdtYear = document.createElement('p');

      movieNm.innerText = search_movie_list.movieNm // 영화명
      nationAlt.innerText = search_movie_list.nationAlt // 나라
      genreAlt.innerText = search_movie_list.genreAlt // 장르
      prdtYear.innerText = search_movie_list.prdtYear // 생성일

      // html에 요소 담기
      div.appendChild(movieNm);
      div.appendChild(nationAlt);
      div.appendChild(genreAlt);
      div.appendChild(prdtYear);
      container.appendChild(div);
    }

  });