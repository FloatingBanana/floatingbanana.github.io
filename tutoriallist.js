var beginner = [
    {
        title: "Seu primeiro jogo em 200 linhas",
        description: "Aprenda o básico do LÖVE fazendo um pequeno jogo estilo Space Invaders.",
        link: "seu-primeiro-jogo-em-200-linhas",
        tags: ["11.3"]
    },

    {
        title: "Fazendo um jogo de plataforma simples",
        description: "Aqui vamos aprender a fazer um sistema de gravidade e a responder colisões em um simples jogo de plataforma.",
        link: "fazendo-um-jogo-de-plataforma-simples",
        tags: ["11.3"]
    }

]

function createItemElements(items) {
    let elementString = items.map(item => {
        return `
        <div class="item-border">
            <div class="item-back">
                <img src="icons/ ${item.link} .png" width="150" height="115">
                <span class="title"> ${item.title} </span> <br>
                <span class="description"> ${item.description} </span>
                <a class="start" href=" ${item.link} ">Iniciar</a>
            </div>
        </div>
        `

    })

    return $.parseHTML(elementString.join("\n"))
}

$("#tutorial-list").append(createItemElements(beginner))