
document.querySelector('.description h2').style.color = 'red'


var incriment=document.querySelectorAll('.plus-btn')

for (let i=0;i<incriment.length;i++){
    incriment[i].addEventListener('click',function(){
        incriment[i].nextElementSibling.innerHTML++   
    })
}


var jaime = document.getElementsByClassName('.like-btn')
for(let i=0;i<jaime.length;i++){

    jaime[i].addEventListener('click',function(){

        if (jaime[i].style.color === 'red'){
            jaime[i].style.color='black'
        }
        else{jaime[i].style.color='red'}    
    })
}