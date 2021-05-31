var abaColaboradores      = document.getElementById("abaColaboradores");
var funcionariosCard      =  document.getElementById("funcionariosCard");
var pesquisa              = document.getElementById("pesquisa");
var dadoColab             = document.getElementById("dadoColab");
var dadoExibir            = document.getElementById("dadoExibir");
var informacaoExibida     = document.getElementById("informacaoExibida");
var informacaoSelecionada = document.getElementById("informacaoSelecionada");

var colaboradorPresente = 0;
var quantidadePontosAbertos = 0;
var pontosFechados = 0;
var taxaDePresenca = 1;
var colaboradorFerias = 0;
var colaboradorHoraExtra = 0;
var colaboradorAtraso = 0;
var colaboradorAusente = 0;

var somaPontosPendentes = 0;
var somaPontosAprovados = 0;
var somaPontosRejeitados = 0;

var somaAjustesPendentes = 0;
var somaAjustesAprovados = 0;
var somaAjustesRejeitados = 0;

var somaInconsistenciasPendentes = 0;
var somaInconsistenciasAprovados = 0;

var somaAutorizacoes = 0;

var windows = 0;
var linux = 0;
var macos = 0;
var ios = 0;
var android = 0;
var dispositivoColaborador = 1

//Dados dos colaboradores
const colaboradores = [
  {
    foto: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    nome: "Felipe Moraes",
    cargo: "Gestor de RH",
    pontoDia: true,
    pontosBatidos: 4,
    horaExtra: "00:00",
    atraso: false,
    ferias: false,
    pontosPendentes: 0,
    pontosAprovados: 24,
    pontosRejeitados: 2,
    ajustesPendentes: 0,
    ajustesAprovados: 7,
    ajustesRejeitados: 3,
    inconsistenciasPendentes: 0,
    inconsistenciasAprovadas: 1,
    dispositivo: "Windows",
    autorizacaoDispositivo: false,
    entrada: "08:00",
    pausa: "12:00",
    retorno: "12:15",
    saida: "14:00",
    status: "Ativo",
  },
  {
    foto: "https://images.pexels.com/photos/1181230/pexels-photo-1181230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    nome: "Júlia Ribeiro",
    cargo: "FRONT-END",
    pontoDia: true,
    pontosBatidos: 3,
    horaExtra: "00:20",
    atraso: true,
    ferias: false,
    pontosPendentes: 0,
    pontosAprovados: 16,
    pontosRejeitados: 6,
    ajustesPendentes: 2,
    ajustesAprovados: 4,
    ajustesRejeitados: 5,
    inconsistenciasPendentes: 1,
    inconsistenciasAprovadas: 3,
    dispositivo: "Linux",
    autorizacaoDispositivo: true,
    entrada: "10:20",
    pausa: "14:00",
    retorno: "14:15",
    saida: "-",
    status: "Ativo",
  },
  {
    foto: "https://images.pexels.com/photos/3892920/pexels-photo-3892920.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3892920.jpg&fm=jpg",
    nome: "Mônica Silva",
    cargo: "Analista Financeiro",
    pontoDia: false,
    pontosBatidos: 0,
    horaExtra: "00:00",
    atraso: false,
    ferias: false,
    pontosPendentes: 0,
    pontosAprovados: 40,
    pontosRejeitados: 6,
    ajustesPendentes: 4,
    ajustesAprovados: 10,
    ajustesRejeitados: 4,
    inconsistenciasPendentes: 8,
    inconsistenciasAprovadas: 0,
    dispositivo: "Android",
    autorizacaoDispositivo: false,
    entrada: "00:00",
    pausa: "00:00",
    retorno: "00:00",
    saida: "00:00",
    status: "Inativo",
  },
  {
    foto: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    nome: "Rafael Silva",
    cargo: "Redator",
    pontoDia: false,
    pontosBatidos: 0,
    horaExtra: "00:00",
    atraso: false,
    ferias: false,
    pontosPendentes: 0,
    pontosAprovados: 8,
    pontosRejeitados: 2,
    ajustesPendentes: 0,
    ajustesAprovados: 2,
    ajustesRejeitados: 0,
    inconsistenciasPendentes: 0,
    inconsistenciasAprovadas: 2,
    dispositivo: "Windows",
    autorizacaoDispositivo: false,
    entrada: "00:00",
    pausa: "00:00",
    retorno: "00:00",
    saida: "00:00",
    status: "Inativo",
  },
  {
    foto: "https://images.pexels.com/photos/3861447/pexels-photo-3861447.jpeg?cs=srgb&dl=pexels-thisisengineering-3861447.jpg&fm=jpg",
    nome: "Fabiana Paula",
    cargo: "Programadora FULLSTACK",
    pontoDia: true,
    pontosBatidos: 3,
    horaExtra: "01:20",
    atraso: true,
    ferias: false,
    pontosPendentes: 1,
    pontosAprovados: 40,
    pontosRejeitados: 6,
    ajustesPendentes: 0,
    ajustesAprovados: 0,
    ajustesRejeitados: 5,
    inconsistenciasPendentes: 0,
    inconsistenciasAprovadas: 0,
    dispositivo: "iOS",
    autorizacaoDispositivo: false,
    entrada: "08:15",
    pausa: "12:00",
    retorno: "12:15",
    saida: "-",
    status: "Ativo",
  },
  {
    foto: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?cs=srgb&dl=pexels-fauxels-3182829.jpg&fm=jpg",
    nome: "Leando Souza",
    cargo: "Financeiro",
    pontoDia: false,
    pontosBatidos: 0,
    horaExtra: '03:12',
    atraso: false,
    ferias: true,
    pontosPendentes: 28,
    pontosAprovados: 0,
    pontosRejeitados: 0,
    ajustesPendentes: 0,
    ajustesAprovados: 0,
    ajustesRejeitados: 0,
    inconsistenciasPendentes: 0,
    inconsistenciasAprovadas: 0,
    dispositivo: "Android",
    autorizacaoDispositivo: true,
    entrada: "00:00",
    pausa: "00:00",
    retorno: "00:00",
    saida: "00:00",
    status: "Ativo",
  },
];

//Dia atual
var dataAtual = new Date();
let dataFormatada =  ((dataAtual.getDate())) + "/" + ((dataAtual.getMonth() + 1)) + "/" + dataAtual.getFullYear()


dadoColab.innerHTML = colaboradores.length

//Abrir aba
function abrirAba(primeiroEstilo, segundoEstilo, primeiroBotao, segundoBotao) {
  document.getElementById("informacoesPrincipais").style.display = primeiroEstilo;
  document.getElementById("abaColaboradores").style.display = segundoEstilo;
  document.getElementById(primeiroBotao).classList.remove("botaoClicado");
  document.getElementById(segundoBotao).classList.add("botaoClicado");
}

//Receber dados totais
var dadosGrafico = colaboradores.map(function(colaborador){
    if(colaborador.pontosBatidos > 1){
        colaboradorPresente ++
    } else{
        colaboradorAusente++
    }

    if(colaborador.pontosBatidos != 4){
        quantidadePontosAbertos++
    } else{
        pontosFechados++
    }

    if(colaborador.ferias == true){
        colaboradorFerias++
    }
    
    if(colaborador.atraso == true){
        colaboradorAtraso++
    }
    
    if(colaborador.horaExtra != '00:00'){
        colaboradorHoraExtra++
    }

    somaPontosPendentes += colaborador.pontosPendentes
    somaPontosAprovados += colaborador.pontosAprovados
    somaPontosRejeitados += colaborador.pontosRejeitados

    somaAjustesPendentes += colaborador.ajustesPendentes
    somaAjustesAprovados += colaborador.ajustesAprovados
    somaAjustesRejeitados += colaborador.ajustesRejeitados

    somaInconsistenciasPendentes += colaborador.inconsistenciasPendentes
    somaInconsistenciasAprovados += colaborador.inconsistenciasAprovadas

    somaAutorizacoes += colaborador.autorizacaoDispositivo

    if(colaborador.dispositivo == 'Windows'){
        windows++
        dispositivoColaborador += windows
    }

    if(colaborador.dispositivo == 'Linux'){
        linux++
        dispositivoColaborador += linux
    }

    if(colaborador.dispositivo == 'MacOS'){
        macos++
        dispositivoColaborador += macos
    }

    if(colaborador.dispositivo == 'iOS'){
        ios++
        dispositivoColaborador += ios
    }

    if(colaborador.dispositivo == 'Android'){
        android++
        dispositivoColaborador += android
    }
})

//Gráfico 
taxaDePresenca = colaboradorPresente * 100 /  colaboradores.length

var ul = document.querySelectorAll('#graficoDia ul li')

ul[0].style.height = taxaDePresenca + "%"
ul[0].addEventListener('mouseover', function(){
    alimentarDado('Taxa de presença:',  taxaDePresenca + "%")
})

ul[1].style.height = colaboradores.length - colaboradorPresente  + "rem"
ul[1].addEventListener('mouseover', function(){
    alimentarDado('Colaboradores sem presença:', colaboradores.length - colaboradorPresente )
})

ul[2].style.height = quantidadePontosAbertos * 2 + "rem"
ul[2].addEventListener('mouseover', function(){
    alimentarDado('Colaboradores com pontos em aberto:', quantidadePontosAbertos)
})

ul[3].style.height = pontosFechados * 2 + "rem"
ul[3].addEventListener('mouseover', function(){
    alimentarDado('Colaboradores com pontos fechados:', pontosFechados)
})

ul[4].style.height = colaboradorFerias * 2 + "rem"
ul[4].addEventListener('mouseover', function(){
    alimentarDado('Colaboradores de férias:', colaboradorFerias)
})

ul[5].style.height = colaboradorHoraExtra * 2 + "rem"
ul[5].addEventListener('mouseover', function(){
    alimentarDado('Colaboradores com hora extra:', colaboradorHoraExtra)
})

ul[6].style.height = colaboradorAusente * 2 + "rem"
ul[6].addEventListener('mouseover', function(){
    alimentarDado('Colaboradores com falta:', colaboradorAusente)
})

ul[7].style.height = colaboradorAtraso * 2 + "rem"
ul[7].addEventListener('mouseover', function(){
    alimentarDado('Colaboradores atrasados:', colaboradorAtraso)
})

//Informação do dia
function alimentarDado(texto, dado){
    informacaoExibida.innerHTML = `
        <p>${texto}</p>
            <span class="resultado">
            <p id="dadoExibir">${dado}</p>
        </span>
`}

//Informações mes vigente
informacaoSelecionada.innerHTML = `
    <div class="menuInformacoes" id="menuPontos">
        <li>Pontos pendentes <div class="dadoInformacao">${somaPontosPendentes}</div></li>
        <li>Pontos aprovados <div class="dadoInformacao">${somaPontosAprovados}</div></li>
        <li>Pontos rejeitados <div class="dadoInformacao">${somaPontosRejeitados}</div></li>
    </div>
    <div class="menuInformacoes" id="menuAjustes">
        <li>Ajustes pendentes <div class="dadoInformacao">${somaAjustesPendentes}</div></li>
        <li>Ajustes aprovados <div class="dadoInformacao">${somaAjustesAprovados}</div></li>
        <li>Ajustes rejeitados <div class="dadoInformacao">${somaAjustesRejeitados}</div></li>
    </div>
    <div class="menuInformacoes" id="menuInconsistencias">
        <li>Inconsistências pendentes <div class="dadoInformacao">${somaInconsistenciasPendentes}</div></li>
        <li>Inconsistências resolvidas <div class="dadoInformacao">${somaInconsistenciasAprovados}</div></li>
    </div>
    <div class="menuInformacoes" id="menuDispositivos">
        <li>Windows <div class="dadoInformacao">${windows}</div></li>
        <li>Linux <div class="dadoInformacao">${linux}</div></li>
        <li>MacOS <div class="dadoInformacao">${macos}</div></li>
        <li>iOS <div class="dadoInformacao">${ios}</div></li>
        <li>Android <div class="dadoInformacao">${android}</div></li>
    </div>
    <div class="menuInformacoes" id="menuAutorizacoes">
        <li>Autorizações de dispositivos pendentes <div class="dadoInformacao">${somaAutorizacoes}</div></li>
    </div>
`

//Alimentar perfil com informações
function addPerfil(i) {
  funcionariosCard.innerHTML = `
    <div id="cabecalhoFuncionario">
        <div class="imagemFuncionario">
            <img src="${colaboradores[i].foto}" alt="" srcset="">
                </div>
                    <div class="textoFuncionario">
                        <h4>${colaboradores[i].nome}</h4>
                        <p>${colaboradores[i].cargo}</p>
                    </div>
                    </div>
    
                    <div class="tabelaInformacoesPerfil">
                        <table class="informacoesPerfil">
                            <tbody>
                                <tr>
                                    <td>Status</td>
                                    <td>${colaboradores[i].status}</td>
                                </tr>
                                <tr>
                                    <td>Pontos pendentes</td>
                                    <td>${colaboradores[i].pontosPendentes}<td>
                                </tr>
                                <tr>
                                    <td>Pontos aprovados</td>
                                    <td>${colaboradores[i].pontosAprovados}<td>
                                </tr>
                                <tr>
                                    <td>Pontos rejeitados</td>
                                    <td>${colaboradores[i].pontosRejeitados}<td>
                                </tr>
                                <tr>
                                    <td>Ajustes pendentes</td>
                                    <td>${colaboradores[i].ajustesPendentes}<td>
                                </tr>
                                <tr>
                                    <td>Ajustes aprovados</td>
                                    <td>${colaboradores[i].ajustesAprovados}<td>
                                </tr>
                                <tr>
                                    <td>Ajustes rejeitados</td>
                                    <td>3${colaboradores[i].ajustesRejeitados}<td>
                                </tr>
                                <tr>
                                    <td>Dispositivo</td>
                                    <td>${colaboradores[i].dispositivo}<td>
                                </tr>
                                <tr>
                                    <td>Inconsistências pendentes</td>
                                    <td>${colaboradores[i].inconsistenciasPendentes}<td>
                                </tr>
                                <tr>
                                    <td>Inconsistências resolvidas</td>
                                    <td>${colaboradores[i].inconsistenciasAprovadas}<td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tabelaPonto">
                        <table class="ponto">
                            <tbody>
                                <caption><h4>Saldo: ${colaboradores[i].horaExtra}</h4></caption>
                                <caption><h4>Hoje, ${dataFormatada}:</h4></caption>
                                <tr>
                                <td></td>
                                    <td>Hora</td>
                                    <td>Descrição</td>
                                </tr>
                                <tr>
                                    <td><span class="iconify" data-icon="clarity:alarm-clock-solid" data-inline="false"></span></td>
                                    <td>${colaboradores[i].entrada}</td>
                                    <td>Entrada</td>
                                    </tr>
                                <tr>
                                    <td><span class="iconify" data-icon="clarity:alarm-clock-solid" data-inline="false"></span></td>
                                    <td>${colaboradores[i].pausa}</td>
                                    <td>Pausa</td>
                                </tr>
                                <tr>
                                    <td><span class="iconify" data-icon="clarity:alarm-clock-solid" data-inline="false"></span></td>
                                    <td>${colaboradores[i].retorno}</td>
                                    <td>Retorno</td>
                                </tr>
                                <tr>
                                    <td><span class="iconify" data-icon="clarity:alarm-clock-solid" data-inline="false"></span></td>
                                    <td>${colaboradores[i].saida}</td>
                                    <td>Saída</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
   `;
}

//Perfil do administrador
addPerfil(0);

//Abrir informações dos meses
function abrirInfo(
  infoAbrir,
  infoFecharA,
  infofecharB,
  infoFecharC,
  infoFecharD
) {
  document.getElementById(infoAbrir).style.display = "block";
  document.getElementById(infoFecharA).style.display = "none";
  document.getElementById(infofecharB).style.display = "none";
  document.getElementById(infoFecharC).style.display = "none";
  document.getElementById(infoFecharD).style.display = "none";
}

//Alimentar card dos colaboradores
var cardsColaboradores = colaboradores.map(function (card, indice) {
  document.getElementById("cardsColaboradores").innerHTML += `
    <div class="colaborador" onclick="addPerfil(${indice})">
        <img src="${card.foto}" alt="">
        <h3 id="nomeColaborador">${card.nome}</h3>
        <h4 id="cargoColaborador">${card.cargo}</h4>
    </div>
    `;
});

//Pesquisa dos colaboradores
pesquisa.addEventListener("keyup", function (e) {
  let search_item = e.target.value.toLowerCase();
  let name = document.querySelectorAll("#cardsColaboradores #nomeColaborador");

  name.forEach((item) => {
    if (item.textContent.toLowerCase().indexOf(search_item) != -1) {
      item.closest("div").style.display = "block";
    } else {
      item.closest("div").style.display = "none";
    }
  });
});
