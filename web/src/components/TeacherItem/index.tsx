import React from 'react'; 
import whasappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'; 
import api from '../../services/api';

export interface Teacher 
{
    id: number; 
    avatar: string; 
    bio: string; 
    cost: number; 
    name: string; 
    subject: string; 
    whatsapp: string;   
}

interface TeacherItemProps
{
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => 
{
    const createNewConnection = () => 
    {
        api.post('connections', 
        {
            user_id: teacher.id,
        });
    }
    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name}/>
                        <div>
                            <strong> {teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                    <p>
                    {teacher.bio}
                    <br/><br/>
                    Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. 
                    Cevadis im ampola pa arma uma pindureta. Mé faiz elementum girarzis, nisi eros vermeio.
                    </p>
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>{teacher.cost},00</strong>
                        </p>
                        <a 
                            target="__blank"
                            onClick={createNewConnection} 
                            href={`https://wa.me/${teacher.whatsapp}`}>
                            <img src={whasappIcon} alt="Whatssapp"/>
                            Entre em contato
                        </a>
                    </footer>
                </article>
    )
}

export default TeacherItem;