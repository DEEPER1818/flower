'use strict';

{
  const uraprice = document.getElementById('uraprice');
  const pricepurasu = document.getElementById('pricepurasu');
  const pricemainasu = document.getElementById('pricemainasu');
  const uraprice2 = document.getElementById('uraprice2');
  const pricepurasu2 = document.getElementById('pricepurasu2');
  const pricemainasu2 = document.getElementById('pricemainasu2');
  const uraprice3 = document.getElementById('uraprice3');
  const pricepurasu3 = document.getElementById('pricepurasu3');
  const pricemainasu3 = document.getElementById('pricemainasu3');
  const uraprice4 = document.getElementById('uraprice4');
  const pricepurasu4 = document.getElementById('pricepurasu4');
  const pricemainasu4 = document.getElementById('pricemainasu4');
  const uraprice5 = document.getElementById('uraprice5');
  const pricepurasu5 = document.getElementById('pricepurasu5');
  const pricemainasu5 = document.getElementById('pricemainasu5');

  //  1本～5本
  // 「+」クリックイベント↓
  //  +を押したらuraprice(・～プラン)を表示
  pricepurasu.addEventListener('click', () => {
    uraprice.classList.add('hyouji');
  });

  // +を押したらpricepurasu(+)を非表示
  pricepurasu.addEventListener('click', () => {
    pricepurasu.classList.add('hihyouji');
  });

  // +を押したらpricemainasu(-)を表示
  pricepurasu.addEventListener('click', () => {
    pricemainasu.classList.add('hyouji');
  });


   // 「-」クリックイベント↓
   // -を押したらpricemainasu(-)を非表示
   pricemainasu.addEventListener('click', () => {
    pricemainasu.classList.remove('hyouji');
  });

  // -を押したらpricepurasu(+)を表示
  pricemainasu.addEventListener('click', () => {
    pricepurasu.classList.remove('hihyouji');
  });

  // -を押したらuraprice(・～プラン)を非表示
  pricemainasu.addEventListener('click', () => {
    uraprice.classList.remove('hyouji');
  });



  // 6本～10本(内容は同じ)
  // 「+」クリックイベント↓
  // +を押したらuraprice(・～プラン)を表示
  pricepurasu2.addEventListener('click', () => {
    uraprice2.classList.add('hyouji');
  });

  // +を押したらpricepurasu(+)を非表示
  pricepurasu2.addEventListener('click', () => {
    pricepurasu2.classList.add('hihyouji');
  });

  // +を押したらpricemainasu(-)を表示
  pricepurasu2.addEventListener('click', () => {
    pricemainasu2.classList.add('hyouji');
  });


   // 「-」クリックイベント↓
   // -を押したらpricemainasu(-)を非表示
   pricemainasu2.addEventListener('click', () => {
    pricemainasu2.classList.remove('hyouji');
  });

  // -を押したらpricepurasu(+)を表示
  pricemainasu2.addEventListener('click', () => {
    pricepurasu2.classList.remove('hihyouji');
  });

  // -を押したらuraprice(・～プラン)を非表示
  pricemainasu2.addEventListener('click', () => {
    uraprice2.classList.remove('hyouji');
  });

  
  // 11本～30本(内容は同じ)
  // 「+」クリックイベント↓
  // +を押したらuraprice(・～プラン)を表示
  pricepurasu3.addEventListener('click', () => {
    uraprice3.classList.add('hyouji');
  });

  // +を押したらpricepurasu(+)を非表示
  pricepurasu3.addEventListener('click', () => {
    pricepurasu3.classList.add('hihyouji');
  });

  // +を押したらpricemainasu(-)を表示
  pricepurasu3.addEventListener('click', () => {
    pricemainasu3.classList.add('hyouji');
  });


   // 「-」クリックイベント↓
   // -を押したらpricemainasu(-)を非表示
   pricemainasu3.addEventListener('click', () => {
    pricemainasu3.classList.remove('hyouji');
  });

  // -を押したらpricepurasu(+)を表示
  pricemainasu3.addEventListener('click', () => {
    pricepurasu3.classList.remove('hihyouji');
  });

  // -を押したらuraprice(・～プラン)を非表示
  pricemainasu3.addEventListener('click', () => {
    uraprice3.classList.remove('hyouji');
  });

  
  // 31本～50本(内容は同じ)
  // 「+」クリックイベント↓
  // +を押したらuraprice(・～プラン)を表示
  pricepurasu4.addEventListener('click', () => {
    uraprice4.classList.add('hyouji');
  });

  // +を押したらpricepurasu(+)を非表示
  pricepurasu4.addEventListener('click', () => {
    pricepurasu4.classList.add('hihyouji');
  });

  // +を押したらpricemainasu(-)を表示
  pricepurasu4.addEventListener('click', () => {
    pricemainasu4.classList.add('hyouji');
  });


   // 「-」クリックイベント↓
   // -を押したらpricemainasu(-)を非表示
   pricemainasu4.addEventListener('click', () => {
    pricemainasu4.classList.remove('hyouji');
  });

  // -を押したらpricepurasu(+)を表示
  pricemainasu4.addEventListener('click', () => {
    pricepurasu4.classList.remove('hihyouji');
  });

  // -を押したらuraprice(・～プラン)を非表示
  pricemainasu4.addEventListener('click', () => {
    uraprice4.classList.remove('hyouji');
  });

  
  // 51本～100本(内容は同じ)
  // 「+」クリックイベント↓
  // +を押したらuraprice(・～プラン)を表示
  pricepurasu5.addEventListener('click', () => {
    uraprice5.classList.add('hyouji');
  });

  // +を押したらpricepurasu(+)を非表示
  pricepurasu5.addEventListener('click', () => {
    pricepurasu5.classList.add('hihyouji');
  });

  // +を押したらpricemainasu(-)を表示
  pricepurasu5.addEventListener('click', () => {
    pricemainasu5.classList.add('hyouji');
  });


   // 「-」クリックイベント↓
   // -を押したらpricemainasu(-)を非表示
   pricemainasu5.addEventListener('click', () => {
    pricemainasu5.classList.remove('hyouji');
  });

  // -を押したらpricepurasu(+)を表示
  pricemainasu5.addEventListener('click', () => {
    pricepurasu5.classList.remove('hihyouji');
  });

  // -を押したらuraprice(・～プラン)を非表示
  pricemainasu5.addEventListener('click', () => {
    uraprice5.classList.remove('hyouji');
  });
}