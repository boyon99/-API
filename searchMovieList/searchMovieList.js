let key = "?key=44d03c21429c1454bf58532d157bbc75" // key prameter
let itemPerPage = "&itemPerPage=20" // itemPerPage
const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json"
  + key
  + itemPerPage

let item_int = 20

let container = document.getElementById('a') // html에서 나타날 요소 선택

fetch(url)
  .then(response => response.json())
  .then(function (item) { 
    for (let i = 0; i < item_int; i++) {
      // div 생성 
      let div = document.createElement('div'); 
      let content_div = document.createElement('div') 
      let title_div = document.createElement('div') 

      // 요소 생성
      let tp = document.createElement('p');
      tp.id = 'Title' 
      let np = document.createElement('p');
      np.id = 'nationAlt'
      let gp = document.createElement('p');
      gp.id = 'genreAlt'
      let pp = document.createElement('p');
      pp.id = 'prdtYear'

      // id 부여
      title_div.id = 'title_div'
      content_div.id = 'content_div'
      div.id = 'movies'

      // api를 리스트에 담기
      search_movie_list = item.movieListResult.movieList[i]
      // console.log(search_movie_list);

      // html에 요소 담기
      div.appendChild(title_div)
      div.appendChild(content_div)
      container.appendChild(div);

      // 개별 아이템 가져오기
      let movieNm = document.createTextNode(search_movie_list.movieNm); // 영화명(국문)
      let nationAlt = document.createTextNode(search_movie_list.nationAlt); 
      let genreAlt = document.createTextNode(search_movie_list.genreAlt);
      let prdtYear = document.createTextNode(search_movie_list.prdtYear);

      // 가져온 아이템 생성한 요소에 담기
      tp.appendChild(movieNm);
      np.appendChild(nationAlt);
      gp.appendChild(genreAlt);
      pp.appendChild(prdtYear);

      // 추가하기
      title_div.appendChild(tp);
      content_div.appendChild(np);
      content_div.appendChild(gp);
      content_div.appendChild(pp);
    }

  });