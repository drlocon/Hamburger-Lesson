$(function() {
  // .menu-triggerがクリックされた時
  $('.menu-trigger').on('click',function(event) {
    // クリック時に行われる処理
    // .toggleClass()は指定されているclassをトグル処理するメソッド
    $(this).toggleClass('active');
    // .fadeToggle()要素のフェードイン・フェードアウトを切り替えるメソッド
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});