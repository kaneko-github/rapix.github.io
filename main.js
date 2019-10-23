'use strict';

/*
// コンソールにHello World!を出力する
console.log("こんにちは");
console.log(1+5);
console.log(5/1);

const Age = 29;

if(Age<30&&Age>=20){
  console.log("2０代");
}else{
cosole.log("違う");
}
*/




//URLについての実験

//ここで変数 Name にユーザー別の数字を代入
let Name = 2222222;

//今のURL取得
var page_url = location.href;
console.log(page_url);


//①ディレクトリを取得
//console.log( location.pathname );

//②別のパスに置き換える(これをすると表示できない)
//location.pathname = '/company.html';

//プロトコル取得
/*
var proto = location.protocol;
console.log( proto );
*/

//画面遷移
//location.href = 'https://www.sejuku.net/blog/';

//ハッシュ(#)の部分を表示
//console.log(location.hash);

//クエリ(?)の部分を表示
console.log(location.search

//ちなみに現在のURLはfile:///Users/ev70012/Desktop/js_lesson/index.html
