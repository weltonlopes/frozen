const controles = document.querySelectorAll('.controle');
let paginaAtual = 0;
const paginas = document.querySelectorAll('.personagens__slider__pagina__lista');
const itemsSlider = document.querySelectorAll('.personagens__slider__pagina__lista__item');
const itemsInformacao = document.querySelectorAll('.personagens__informacao__item')
// const maxPaginas = paginas.length;

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
