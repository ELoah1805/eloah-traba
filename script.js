const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual sua média de idade?",
        alternativas: [
            {
                texto: "entre 10 a 18!",
                afirmacao: "afirmação"
            },
            {
                texto: "18+!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "você ja foi picado por algum animal venenoso?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "você sabia que o PEIXE-PEDRA é o animal marinho mais venenoso do mundo?",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: "afirmação"
            },
            {
                texto: "não.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "ja frequentou alguma dessas praia?",
        alternativas: [
            {
                texto: "balneário e/ou matinhos.",
                afirmacao: "afirmação"
            },
            {
                texto: "praia de pipa e/ou copacabana.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "quantos seres venenoso tem no mundo? ",
        alternativas: [
            {
                texto: "110.000 a 130.000 total.",
                afirmacao: "afirmação"
            },
            {
                texto: "150.000 a 200.000 total.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
