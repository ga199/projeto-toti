import React from 'react';
import './App.css';
import Card from './Components/Card'

function App() {


  return (
    


    <><><div className="App">

      <Card
        title='Otilia'
        imageUrl='./assets/trabalho.png'
        body='Sou Otilia uma mulher que inspira. Tive uma lesão medular há cinco anos escovando meu o dente, foram dias difíceis mas como sou uma guerreira somente minhas pernas pararam, eu não! Me adaptei ao meu trabalho e aprendi um novo método de costurar sempre transformando os problemas em solução. Com os retalhos de tecido confecciono laços e roupas pet. Tenho uma risada linda e netos também! Eu olho para o ceú com gratidão pois sei o quanto inspira!' 
        />

    </div>

      <div className="App">
        <Card
          title='Luciene Aparecida'
          imageUrl=''
          body='Sou ganhadora do terceiro lugar concurso de café FLoriada premiada do grupo 3 corações. O café na minha vida tem uma importancia muito grande e todo ser humano que quer fazer uma história diferente pode, ver meu senho realizado, o café meu sendo distribuido pelo Brasil inteiro é uma satisfação do nosso trabalho, hoje eu me sinto uma mulher empoderada, uma mulher realizada.' />
      </div></>
      
      <div className="App">
        <Card
          title='Zica Assis'
          imageUrl=''
          body='Imperio da beleza que rende mais 140 milhões por ano, 46 unidade espalhadas no Brasil e 1 em Nova York, venho de uma familia muito humilde, minha mãe era lavadeira, ela dividia os pratos de comida para mim e meus doze irmãos certinhos e muitos vezes ela ficava sem comer porque não tinha aos nove anos tive que começar a trabalhar como babá para ajudar com o sustento da minha casa, comecei a trabalhar como faxineira aos 19 anos numa area nobre na qual fui obrigada a cortar meus cabelos cacheados, após isso fiz um curso de salão tentei de tudo para recuperar meus cabelos, trabalhava em tres casas como faxineira, pasava roupa para as pessoas, atendia meu marido e tres filhos e alem disso todos os dias fazia testes com tratamentos caseiros para recuperar meus cabelos depois de 10 anos ao receber um elogio da minha prima sobre meus cabelos percebi que por fim estava dando certo mas precisava de algo muito importante para realizar meu sonho: dineiro e foi assim que convenci a meu marido de vender o unico bem da familia, um fusca branco no qual ele fazia taxi no bairro por R$ 3.000,0 o suficiente na época para produzir minha primeira linha de produtos e alugar um barraco velho de dois comodos para abrir meu proprio salão' />
      </div></>

  );

}

export default App;
