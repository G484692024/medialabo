// 課題3-2 のプログラムはこの関数の中に記述すること
function print() {
  console.log(data.id);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let m = document.querySelector('div#result');
  if(m!==null){
    m.remove();
  }
  let l = document.createElement('div');
  l.setAttribute('id', 'result');
  let u = document.querySelector('body');
  u.insertAdjacentElement('beforeend', l);

  let s = document.createElement('div');
	s.textContent = "経度: "+(data.coord.lon);
	l.insertAdjacentElement('beforeend', s);
  
  s = document.createElement('div');
  s.textContent = "緯度: "+(data.coord.lat);
	l.insertAdjacentElement('beforeend', s);

  s = document.createElement('div');
  s.textContent = "天気: "+(data.weather[0].description);
	l.insertAdjacentElement('beforeend', s);

  s = document.createElement('div');
  s.textContent = "最低気温: "+(data.main.temp_min);
	l.insertAdjacentElement('beforeend', s);

  s = document.createElement('div');
  s.textContent = "最高気温: "+(data.main.temp_max);
	l.insertAdjacentElement('beforeend', s);

  s = document.createElement('div');
  s.textContent = "湿度: "+(data.main.humidity);
	l.insertAdjacentElement('beforeend', s);
 
  s = document.createElement('div');
  s.textContent = "風速: "+(data.wind.speed);
	l.insertAdjacentElement('beforeend', s);

  s = document.createElement('div');
  s.textContent = "風向: "+(data.wind.deg);
	l.insertAdjacentElement('beforeend', s); 
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('button#sendRequest');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let k = document.querySelector('select#key');
	let idx = k.selectedIndex;
	let os = k.querySelectorAll('option');
	let o = os.item(idx);
  if(idx!==0){
    let kekka = o.textContent+'の検索結果';
    let p = document.querySelector('p');
    p.textContent = kekka;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+o.getAttribute('value')+'.json';
    axios.get(url)
          .then(showResult)
          .catch(showError)
          .then(finish);
  }
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}