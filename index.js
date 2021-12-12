
var img;

function sampleimg1(){
img = document.getElementById("image_file");
img.src = "image/sample1.png";
}

function sampleimg2(){
img = document.getElementById("image_file");
img.src = "image/sample2.png";
}

function sampleimg3(){
img = document.getElementById("image_file");
img.src = "image/sample3.png";
}

function setImage() {
  const ctx = document.getElementById('btn-concat').getContext('2d');
  ctx.drawImage(image, 0, 0, 600, 400); // 画像を設定
}




function imageDraw1() {
  //2Dコンテキストのオブジェクトを生成する
  var cvs = document.getElementById('concat');
  var ctx = cvs.getContext('2d');

  //画像オブジェクトを生成
  var img = new Image();
  img.src = "frame01.png";

  //画像をcanvasに設定
  img.onload = function(){
    ctx.drawImage(img, 0, 0, 600, 400);  //400x300に縮小表示
  }
}

function imageDraw2() {
  //2Dコンテキストのオブジェクトを生成する
  var cvs = document.getElementById('concat');
  var ctx = cvs.getContext('2d');

  //画像オブジェクトを生成
  var img = new Image();
  img.src = "frame02.png";

  //画像をcanvasに設定
  img.onload = function(){
    ctx.drawImage(img, 0, 0, 600, 400);  //400x300に縮小表示
  }
}

function imageDraw3() {
  //2Dコンテキストのオブジェクトを生成する
  var cvs = document.getElementById('concat');
  var ctx = cvs.getContext('2d');

  //画像オブジェクトを生成
  var img = new Image();
  img.src = "frame03.png";

  //画像をcanvasに設定
  img.onload = function(){
    ctx.drawImage(img, 0, 0, 600, 400);  //400x300に縮小表示
  }
}
