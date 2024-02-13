let stars = document.querySelectorAll('.star');
let reset = document.querySelector('.reset');
let result = document.querySelector('.result');

reset.addEventListener('click', () => {
 deleteClasslist();
 result.innerText ="";
});

stars.forEach(star => {
    star.addEventListener('click', (e) =>{
        const value = star.getAttribute('data-value')-1;
        stars.forEach((s,index) => {
            if(index < value){
                s.classList.add('selected');
                s.classList.remove('below-selected', 'above-selected');
            }else if(index == value){
                s.classList.add('selected');
                s.classList.remove('below-selected', 'above-selected');
            }else{
                s.classList.add('above-selected')
                s.classList.remove('selected', 'below-selected');
            }
        });

        result.innerText =`la note est de ${value+1} / 5`;
    })
});


function deleteClasslist(){
    stars.forEach(star => {
        star.classList.remove('above-selected','selected', 'below-selected');
    });
}



stars.forEach(star => {
    star.addEventListener('mouseover', (e) => {
        const value = star.getAttribute('data-value') - 1;
        result.innerText =``;
        deleteClasslist();
        stars.forEach((s,index) => {
             if(index < value){
                 s.classList.add('before-hovered');
             }else if(index == value){
                s.classList.add('hovered');
             }
         });
    });

    star.addEventListener('mouseout', (e) => {
        stars.forEach(s => {
            s.classList.remove('hovered');
            s.classList.remove('before-hovered');
        });
    });
});