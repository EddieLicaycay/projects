// console.log(document.querySelector('div')) gives the first section div = <div style="width: 80px; height: 80px; background-color: lightblue;">Here's my first div!</div>
// console.log(document.querySelectorAll('div')[1]) gives the index at 2 which is [1] div = <div class="firstdiv">…</div>
//console.log(document.querySelectorAll('div')) gives all div


let btn = document.querySelector('#button1');

btn.addEventListener("click", () => alert('Button1 was clicked'))
