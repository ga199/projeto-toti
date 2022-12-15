import React from 'react';

import React ,{useEffect}from "react";

import carrousel from "./carrousel";




const somos = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

return (
        <div>


            <div id="home">


                        <h1>QUEM SOMOS</h1>

                        <h3>CRIAR</h3>
                        <p>É uma plataforma para empoderar outras mulheres com mais de 40 anos de idade
                        de setores vulneráveis do Brasil</p>

                        <p>Com CRIAR, nosso objetivo é promover o fortalecimento das capacidades e talentos da população com mais de 40 anos de idade</p>
                        <p> Mulheres de setores vulneráveis e áreas segregadas, fornecendo-lhes ferramentas para alcançar seus
                        inclusão financeira e sócio-produtiva</p>
                            </div>

                            <carrousel></carrousel>

                <div className='homeMain'>

                    <div className='homeImage'>

                        <img src='./img/2.png'></img>
                    </div>



                    <div className='homeDescrip'>

                        <h2>Somos Totters</h2>


                        <p>  Somos migrantes da Venezuela e Haiti, motivados pelos princípios do Nu Institute,
                        decidimos fazer esta proposta considerando que metade da população do 
                        Brasil são mulheres. Desta população, um grande número está em setores 
                        vulneráveis que precisam de ajuda, como CRIAR, para ajudá-los a acreditar 
                        em si mesmos e para gerar a confiança de que podem ser bem sucedidos.
                        Este não é apenas um projeto para realizar uma tarefa, mas um projeto que 
                        alguns membros de nossa equipe desejam executar.</p>
                    </div >

                </div >



                <div className='Contenedor'>



                <h1> SOMOS</h1>
                <ul>
                    <li>Claude David Noel - Haiti</li>
                    <li>Fidelina Arteaga - Venezuela</li>
                    <li>Laury Angi Gonzalez - Venezuela</li>
                    <li>Luis Mendez - Venezuela</li>
                </ul>
                    </div>


                    </div>








    );
}

export default somos;


