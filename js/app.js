
function typeWriter(nome){
    const textoArray = nome.innerHTML.split('');
    nome.innerHTML=''
    console.log(textoArray)
    textoArray.forEach((letra,i) => {
        setTimeout(() => nome.innerHTML += letra, 350*i);
        
    });
}

const nome = document.getElementById('nome')

typeWriter(nome)
