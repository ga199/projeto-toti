import React from 'react';

import face from '../../imagem/f3.png';
import inst from '../../imagem/ig2.png';
import lkd from '../../imagem/icon-lin.png';
import gh from '../../imagem/icon-gt2.png';
import './App.css';


function envio() {
  return (
    <footer>
          <div className='ancora'>
              <ul className='lista-grupo'>
                  <li className='luis' />
                  <p>Luis G, Mendez M</p>
                  <a href="https://www.facebook.com/luisgabriel.mendezmontero"> <img src={face} alt="" /></a>
                  <a href="https://instagram.com/gabolucho69" ><img class="instagram" src={inst} alt="" /></a>
                  <a href="https://github.com/ga199"><img class="Twitter" src={gh} alt="" /></a>
    
    
                  <li className='laury'>
                    <p>laury A, González V</p>
                    
                    <a href="https://www.facebook.com/laury.gonzalezvelasquez"> <img src={face} alt="face" /> </a>
                    <a href="https://www.linkedin.com/in/laury-angi-gonzalez-velasquez-0027551b7/"><img class="linkiding" src={lkd} alt="lkd" /></a>
                    <a href="https://github.com/lauryangi"><img class="Twitter" src={gh} alt="tw" /></a>
                  </li>
    
                  <li className='fidelina'>
                    <p>Fidelina Arteaga</p>
                    
                    <a href="https://www.facebook.com/"> <img src={face} alt="" /> </a>
                    <a href="https://instagram.com/?hl=fr"><img class="instagram" src={inst} alt="" /></a>
                    <a href="https://github.com/gfidelinaArteaga"><img class="Twitter" src={gh} alt="" /></a>
                  </li>
    
                  <li className='claude'>
                    <p>Claude David Noel</p>
                    
                    <a href="https://www.facebook.com/"> <img src={face} alt="" /> </a>
                    <a href="https://instagram.com/"><img class="instagram" src={inst} alt="" /></a>
                    <a href="https://github.com/"><img class="Twitter" src={gh} alt="" /></a>
                  </li>
    
              </ul>
          </div>
          <div >
            <p>Deixe seu comentario</p>
            <form>
              <div>
                <label for="nome">NOME E SOBRENOME</label>
                <input type="text" id="nome" name="nome" placeholder="  Seu nome" required />
              </div>
              <div>
                <label for="email">E-MAIL</label>
                <input type="email" id="email" name="email" placeholder="  example@email.com" required />
              </div>
              <div>
                <label for="subject">SUBJECT</label>
                <input type="text" id="assunto" name="assunto" required />
              </div>
              <div>
                <label for="mensagem">MESSAGE</label>
                <textarea id="msg" name="subject" required></textarea>
              </div>
              <label class="button"><input type="submit" value="Submit" class="submit" id="button" /></label>
            </form>
          </div>        
    </footer>                  
  );
  
}

export default envio;


