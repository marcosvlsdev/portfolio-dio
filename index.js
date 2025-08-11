const botoes = document.querySelectorAll('.acordeon button');
const tresPontinhos = document.getElementById("tresPontinhos")
const body = document.body
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
    const setas = botao.querySelector('.setas');
    const acordeon = botao.parentElement;
    if (acordeon.classList.contains('ativo')) {
        acordeon.classList.remove('ativo'); 
        setas.setAttribute('src', 'src/img/chevron-down.png');
    }
    else { 
        acordeon.classList.add('ativo');
        setas.setAttribute('src', 'src/img/chevron-up.png');
    }
    });
});

tresPontinhos.addEventListener("click", () => {
        if(body.classList.contains('modoclaro')){
            body.classList.remove('modoclaro')
        } else {
            body.classList.add('modoclaro')
        }
    })

