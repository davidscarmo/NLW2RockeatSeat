import React from 'react'; 
import whasappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'; 

const TeacherItem = () => 
{
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/43228973?s=400&u=e5b7581417d3beeb4e539aa03adf7d9bc4129304&v=4" alt="David Carmo"/>
                        <div>
                            <strong> David Carmo</strong>
                            <span>Matemática</span>
                        </div>
                    </header>
                    <p>
                    Mussum Ipsum lover. 
                    <br/><br/>
                    Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. 
                    Cevadis im ampola pa arma uma pindureta. Mé faiz elementum girarzis, nisi eros vermeio.
                    </p>
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>80,00</strong>
                        </p>
                        <button>
                            <img src={whasappIcon} alt="Whatssapp"/>
                            Entre em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;