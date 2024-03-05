const controles = document.querySelectorAll('.controle');
let paginaAtual = 0;
const paginas = document.querySelectorAll('.personagens__slider__pagina__lista');
const itemsSlider = document.querySelectorAll('.personagens__slider__pagina__lista__item');
const itemsInformacao = document.querySelectorAll('.personagens__informacao__item');
const itemsMenu = document.querySelectorAll('.cabecalho__nav__item__link');

const alturaHero = document.querySelector('.hero').clientHeight;
const alturaDescobrir = document.querySelector('.descobrir').clientHeight;
const alturaPersonagens = document.querySelector('.personagens').clientHeight;
const alturaFilmes = document.querySelector('.filmes_e_curtas').clientHeight;
const alturaMais = document.querySelector('.mais_frozen').clientHeight;

controles.forEach(controle => {
    controle.addEventListener('click', () => {
        const isLeft = controle.classList.contains('arrow-left');
        if(isLeft) {
            paginaAtual -= 1;
        } else {
            paginaAtual += 1;
        }

        if(paginaAtual == 0) {
            controles[0].classList.add('desligado');
        }

        if(paginaAtual > 0) {
            controles[0].classList.remove('desligado');
        }

        if(paginaAtual == 2) {
            controles[1].classList.add('desligado');
        }

        if(paginaAtual < 2) {
            controles[1].classList.remove('desligado');            
        }

        paginas.forEach(pagina => {
            pagina.classList.remove('atual')
            paginas[paginaAtual].classList.add('atual');
        });
            

    })
})

itemsSlider.forEach((itemSlider, index) => {
    itemSlider.addEventListener('click', () => {
        itemsInformacao.forEach(itemInformacao => {
            itemInformacao.classList.remove('ativo');
            itemsInformacao[index].classList.add('ativo');
        })
    })
})


window.addEventListener('scroll', () => {
    const posicaoAtual = window.scrollY;

    if(posicaoAtual >= 0){
        removerActive();
        itemsMenu[0].classList.add('active');
    }
    if(posicaoAtual >= 800){
        removerActive();
        itemsMenu[1].classList.add('active');
    }
    if(posicaoAtual >= 1500){
        removerActive();
        itemsMenu[2].classList.add('active');
    }
    if(posicaoAtual >= 2300){
        removerActive();
        itemsMenu[3].classList.add('active');
    }
    if(posicaoAtual >= 2800){
        removerActive();
        itemsMenu[4].classList.add('active');
    }
})

function removerActive() {
    itemsMenu.forEach(item => {
        item.classList.remove('active');
    })
}
