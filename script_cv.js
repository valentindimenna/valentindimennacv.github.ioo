const sobremi = document.getElementById('sobremi');
const experiencia = document.getElementById('experiencia');
const idiomas = document.getElementById('idioma');
const cursos = document.getElementById('curso');
const contacto = document.getElementById('contacto');

const formsection = document.getElementById('formu');
const sobremisection = document.getElementById('sobremi2');
const idiomasection = document.getElementById('idioma2');
const curso = document.getElementById('curso2');
const experienciasection = document.getElementById('experiencia2');

sobremi.addEventListener('click',function(){
        formsection.style.display = 'none';
        idiomasection.style.display = 'none';
        curso.style.display = 'none';
        experienciasection.style.display = 'none';
        sobremisection.style.display = 'block';
});
experiencia.addEventListener('click',function(){
    formsection.style.display = 'none';
    idiomasection.style.display = 'none';
    curso.style.display = 'none';
    sobremisection.style.display = 'none';
    experienciasection.style.display = 'block';
});
idiomas.addEventListener('click',function(){
    formsection.style.display = 'none';
    sobremisection.style.display = 'none';
    curso.style.display = 'none';
    experienciasection.style.display = 'none';
    idiomasection.style.display = 'block';
});
cursos.addEventListener('click',function(){
    formsection.style.display = 'none';
    idiomasection.style.display = 'none';
    sobremisection.style.display = 'none';
    experienciasection.style.display = 'none';
    curso.style.display = 'block';
});
contacto.addEventListener('click',function(){
    sobremisection.style.display = 'none';
    idiomasection.style.display = 'none';
    curso.style.display = 'none';
    experienciasection.style.display = 'none';
    formsection.style.display = 'block';
});