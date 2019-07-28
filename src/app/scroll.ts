 let listElm = document.querySelector('card__container');
   let nextItem = 1;
  function loadMore() {
    for (var i = 0; i < 20; i++) {
      var item = document.createElement('li');
      item.innerText = 'Item ' + nextItem++;
      listElm.appendChild(item);
    }
  }
export function scrolling() {
    listElm.addEventListener('scroll', function() {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        loadMore()
      }
    });
  }
