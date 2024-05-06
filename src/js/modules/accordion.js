export default function () {
   console.log('accordion!!!');

   const btns = document.querySelectorAll(".mobile-links__parent-btn");

   Array.from(btns).forEach(function (btn) {
      btn.addEventListener('click', function () {
         console.log("Click!!");

         const content = btn.nextElementSibling;
         console.log(content);

         const maxHeight = btn.classList.toggle('active') ? content.scrollHeight : 0;

         content.style.maxHeight = `${maxHeight}px`;

      })
   });



}

