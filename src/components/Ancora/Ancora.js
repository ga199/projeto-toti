import React from 'react';
import { render } from '@testing-library/react';
import letra from '../../src/component/imagem/L.png';
import claude from '../../component/imagem/C.png';
import Fidelina from '../../component/imagem/F.png';
import face from '../../component/imagem/f3.png';
import inst from '../../component/imagem/ig2.png';
import lkd from '../../component/imagem/icon-lin.png';
import gh from '../../component/imagem/icon-gt2.png';


function ancora() {
    render('root') {
        return (
            <div className='ancora'>
                <ul className='lista-grupo'>
                    <li className='luis' />
                    <p>Luis G, Mendez M</p>
                    <img src={letra} alt="letra"/>
                    <a href="https://www.facebook.com/luisgabriel.mendezmontero"> <img src={face} alt="" /></a>
                    <a href="https://instagram.com/gabolucho69" target="_blank" rel="noopener"><img class="instagram" src={inst} alt="" /></a>
                    <a href="https://github.com/ga199" target="_blank" rel="noopener"><img class="Twitter" src={gh} alt="" /></a>


                    <li className='laury'>
                        <p>laury A, González V</p>
                        <img src={letra} alt="letra" />
                        <a href="https://www.facebook.com/laury.gonzalezvelasquez" target="_blank" rel="noopener"> <img src={face} alt="face" /> </a>
                        <a href="https://www.linkedin.com/in/laury-angi-gonzalez-velasquez-0027551b7/" target="_blank" rel="noopener"><img class="linkiding" src={lkd} alt="lkd" /></a>
                        <a href="https://github.com/lauryangi" target="_blank" rel="noopener"><img class="Twitter" src={gh} alt="tw" /></a>
                    </li>

                    <li className='fidelina'>
                        <p>Fidelina Arteaga</p>
                        <img src={Fidelina} alt="letra" />
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"> <img src={f3.png} alt="" /> </a>
                        <a href="https://instagram.com/?hl=fr" target="_blank" rel="noopener"><img class="instagram" src={ig2.png} alt="" /></a>
                        <a href="https://github.com/gfidelinaArteaga" target="_blank" rel="noopener"><img class="Twitter" src={tw2.png} alt="" /></a>
                    </li>

                    <li className='claude'>
                        <p>Claude David Noel</p>
                        <img src={claude} alt="letra" />
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"> <img src={f3.png} alt="" /> </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener"><img class="instagram" src={inst} alt="" /></a>
                        <a href="https://github.com/" target="_blank" rel="noopener"><img class="Twitter" src={gh} alt="" /></a>
                    </li>

                </ul>
            </div>
        );
    };    
};
export default ancora;