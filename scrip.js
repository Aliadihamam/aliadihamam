document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEvantListener('click',function(e) {
         e.preventDefault();

         document.querySelector(this.getAttribute('hreff')).scrollintoView ({
             behavior:'smooth'
         })
    })
})
   
