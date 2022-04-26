
const enlaces = document.getElementsByTagName('a'); //De esta manera selecciona todas las etiquetas <a> y las mete en un array.



for (const enlace of enlaces){ //Hay que itinerar por todas las etiquetas <a> del array creado arriba para aplicarle a cada iteración la función onSubmit
    enlace.addEventListener('click', onSubmit);  //('click', e => e.preventDefault()) Función flecha
    function onSubmit (e){
        e.preventDefault();
    
    }
       
}



const imagenes = document.getElementsByTagName('img');


for (const img of imagenes) {
    img.addEventListener('click', imag);
    function imag (){       
        img.src=`./assets/${getRandom(randomGif)}`;   //se pone en template literal porque el ./assets/ debe mantenerse porque estamos trabajando con un src.
    }
}



//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const parrafos = document.getElementsByTagName('p');

for (const parr of parrafos){
    parr.addEventListener('click', parrafo);
    function parrafo (e){
        e.preventDefault();
        parr.style.background = '#ccc';
        parr.style.color = 'red';
    }
}

//2.3 Bloques de article o section: Cambia el color de fondo.




const art = document.getElementsByTagName('article');

for (const article of art){
    article.addEventListener('click', arti);
    function arti (){
        
        article.style.background = '#a5f3bd';        
    }
}


//Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.


const gifs = document.getElementsByTagName('img');


for (const gif of gifs){
    gif.addEventListener('mouseover', gifos );
    function gifos (e){  
                      
        e.preventDefault();
        gif.src= './assets/abracadabra.gif';
                       
    }
    const original = gif.src
    gif.addEventListener('mouseleave', origi);
    function origi (e){  
                      
        e.preventDefault();
        gif.src = original;
    }
}

//El addEventListener es un disparador; la información se guarda pero no se mostrará en pantalla HASTA QUE OCURRA EL EVENTO, en este caso el mouseleave o el mouseover. IMPORTANTE: hay que guardar el src original en una constante (const original = gif.src || .src porque es atributo de una etiqueta html; si quiesiéramos acceder a una propiedad css de un elemento se pondía .style.color (por ejemplo) ) antes de aplicar el disparador de vuelta.

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const pa = document.getElementsByTagName('p');

for (const parrafos1 of pa){
    parrafos1.addEventListener('mouseover', parra );
        function parra(){
        parrafos1.style.background = getRandom(colors1);
        parrafos1.style.color = getRandom(colors1);
    }
    const original1 = parrafos1.style
        parrafos1.addEventListener('mouseleave', function (){  //De esta manera no hace falta darle nombre a la función
            parrafos1.style = original1;
            });
        
}

//Bloques de article o section: Color de fondo distinto al de párrafo.


const artic = document.getElementsByTagName('article');

for (const back of artic){
    back.addEventListener(
        'mouseover', 
        function(){
            back.style.background = '#053ea8'
        }
    )

    const original2 = back.style
        back.addEventListener('mouseleave', function(){ back.style = original2;});
}

//Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.


const colors = ['red', 'blue', 'green'];

const getRandom = (array) => {
    return array[Math.floor(Math.random()*array.length)]; //el Math.floor redondea y el Math.random saca un valor random de un array
}

console.log(getRandom(colors));

//Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

const colors1= ["#7FB069", "#FFFBBD", "#E6AA68", "#CA3C25", "#1D1A05"];

console.log(getRandom(colors1));

//Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.



let randomGif = ['magic-1.gif', 'magic-2.gif','magic-3.gif','magic-4.gif','magic-5.gif','magic-6.gif', ];

console.log(getRandom(randomGif));

