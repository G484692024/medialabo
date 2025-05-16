// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yoso"]');
  let n = Number(i.value);
  let p = document.querySelector('span#answer');
  p.textContent = n;
  let yoso = n;
  kaisu=kaisu+1;
  let q = document.querySelector('span#kaisu');
  q.textContent = kaisu;
  if(kaisu>=4){
    let r = '答えは '+kotae+' でした. すでにゲームは終わっています';
    let a = document.querySelector('p#result');
    a.textContent = r;
  }else if(yoso===kotae){
    let r = '正解です. おめでとう！';
    let a = document.querySelector('p#result');
    a.textContent = r;
    kaisu=4;
  }else if(kaisu===3){
    let r = 'まちがい. 残念でした答えは '+kotae+' です.';
    let a = document.querySelector('p#result');
    a.textContent = r;
  }else if(yoso<kotae){
    let r = 'まちがい. 答えはもっと大きいですよ';
    let a = document.querySelector('p#result');
    a.textContent = r;
  }else{
    let r = 'まちがい. 答えはもっと小さいですよ';
    let a = document.querySelector('p#result');
    a.textContent = r;
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
let b = document.querySelector('button#print');
b.addEventListener('click', hantei);