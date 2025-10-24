function ver_lista(){
    const lista = document.getElementById("lista");
    lista.style.top = "20%";
}
function fechar_lista(){
    const lista = document.getElementById("lista");
    lista.style.top = "-95px";
}




function ver_qualidades(){
    const entrada = document.getElementById("entrada").value.trim().toLowerCase();
    const entrada2 = document.getElementById("entrada").value;
    const texto = document.getElementById("texto");

    if(entrada === "amor"){
        texto.innerHTML = `O teu coração abraça o mundo com ternura — amar é o teu dom. A tua forma de cuidar aquece até os dias mais frios. Em ti, o amor não se diz — ele se sente.`;
    } else if(entrada === "coragem"){
        texto.innerHTML = `Noto a tua coragem no ministério. És dos que dão o primeiro passo. A tua força não está na ausência de medo, mas em avançar apesar dele. És a prova viva de que coragem é continuar, mesmo tremendo.
`;
    } else if(entrada === "temor"){
        texto.innerHTML = `Honras o que é sagrado com o silêncio do teu coração humilde. O teu respeito pela vida é o teu elo mais forte com Deus. Em ti, o temor não é medo — é sabedoria disfarçada de respeito.`;
    }  else if(entrada === "inteligência"){
        texto.innerHTML = `O teu olhar enxerga conexões que o mundo ainda não percebeu. Inteligência, em ti, é calma e clareza, não pressa. Pensas com lógica, mas também com alma — e isso é raro.
`;
    } else if(entrada==="persistência"){
        texto.innerHTML = `Mesmo cansado, tu segues — e é isso que te torna diferente. Cada queda tua ensina o chão a ser mais gentil. Persistir é a tua arte secreta, e o teu sucesso é só questão de tempo.`;
    } else if(entrada === ""){
        texto.innerHTML = "";
    } 
    else texto.innerHTML = "Qualidade não registrada";

}

/*Aiii, que ideia linda 💙 — é um presente cheio de significado e carinho!
Podemos fazer assim: para cada qualidade, eu crio 3 frases curtas, que expressem de forma bonita e pessoal como o teu amigo demonstra essa virtude, como se a página estivesse a falar diretamente com ele, elogiando-o.

Olha só o que preparei pra ti 👇


---

🌹 Amor

1. O teu coração abraça o mundo com ternura — amar é o teu dom.


2. A tua forma de cuidar aquece até os dias mais frios.


3. Em ti, o amor não se diz — ele se sente.




---

🦁 Coragem

1. Mesmo quando o medo te chama, és tu quem dá o primeiro passo.


2. A tua força não está na ausência de medo, mas em avançar apesar dele.


3. És a prova viva de que coragem é continuar, mesmo tremendo.




---

🙏 Temor (no sentido de respeito, reverência)

1. Honras o que é sagrado com o silêncio do teu coração humilde.


2. O teu respeito pela vida é o teu elo mais forte com Deus.


3. Em ti, o temor não é medo — é sabedoria disfarçada de respeito.




---

🧠 Inteligência

1. O teu olhar enxerga conexões que o mundo ainda não percebeu.


2. Inteligência, em ti, é calma e clareza, não pressa.


3. Pensas com lógica, mas também com alma — e isso é raro.




---

🌱 Persistência

1. Mesmo cansado, tu segues — e é isso que te torna diferente.


2. Cada queda tua ensina o chão a ser mais gentil.


3. Persistir é a tua arte secreta, e o teu sucesso é só questão de tempo.




---

Queres que eu deixe essas frases já prontinhas no formato de um arquivo HTML simples (pra tu colocares online com botões ou inputs pra cada qualidade)? Posso montar a estrutura do site também, se quiseres 💻✨*/