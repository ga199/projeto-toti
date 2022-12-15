import React from "react";
import './App.css';

function formulario() {
    return(
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
    )
 }
export default formulario;