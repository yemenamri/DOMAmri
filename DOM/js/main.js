
//document.querySelector('.description h2').style.color = 'red'


var incriment=document.querySelectorAll('.plus-btn')

for (let i=0;i<incriment.length;i++){
    incriment[i].addEventListener('click',function(){
        incriment[i].nextElementSibling.innerHTML++  
        totalachat() 
    })
    
}

var decrement=document.querySelectorAll('.minus-btn')

for (let i=0;i<decrement.length;i++){
    decrement[i].addEventListener('click',function(){
        if(decrement[i].previousElementSibling.innerHTML > 0){
       
        decrement[i].previousElementSibling.innerHTML--
        totalachat() 
    }  
    })
}

var jaime = document.getElementsByClassName('like-btn')
for(let i=0;i<jaime.length;i++){

    jaime[i].addEventListener('click',function(){

        if (jaime[i].style.color === 'red'){
            jaime[i].style.color='black'
        }
        else{jaime[i].style.color='red'}    
    })
}
var remove_cat = document.getElementsByClassName('delete-btn')
for(let i=0;i<remove_cat.length;i++){

    remove_cat[i].addEventListener('click',function(){

        remove_cat[i].parentElement.parentElement.parentElement.remove()
        totalachat() 
    })
}



function totalachat(){
var total_by = 0
var price_art = document.querySelectorAll('.price')
var nombre_art = document.querySelectorAll('.number-items')

for (let i=0 ; i<price_art.length; i++){
   total_by+=  (price_art[i].innerHTML * nombre_art[i].innerHTML)
   
}
 document.getElementById('total').innerHTML = total_by 
}

