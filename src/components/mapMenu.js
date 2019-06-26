import React  from 'react';

export const Home  = () =>
    <section className='home'>
        <h1>Home</h1>
        <p>
<strong>Дальше следует абсолютный информациионый шум , я сам его не читал !</strong><br/>
Значимость этих проблем настолько очевидна, что курс на социально-ориентированный национальный 
проект играет важную роль в формировании дальнейших направлений развития проекта. 
Равным образом постоянный количественный рост и сфера нашей активности напрямую зависит от 
направлений прогрессивного развития? Дорогие друзья, рамки и место обучения кадров способствует 
подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.
Практический опыт показывает, что рамки и место обучения кадров влечет за собой процесс внедрения и 
модернизации дальнейших направлений развития проекта. Не следует, однако, забывать о том, что повышение уровня 
гражданского сознания играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных 
задач. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требует определения и 
точнения дальнейших направлений развития проекта. Повседневная практика показывает, что постоянный количественный 
рост и сфера нашей активности напрямую зависит от дальнейших направлений развития проекта?
        </p>
        <h2>Все еще не читал</h2>
        <p>
Задача организации, в особенности же повышение уровня гражданского сознания влечет за 
собой процесс внедрения и модернизации системы масштабного изменения ряда параметров!
Таким образом, сложившаяся структура организации играет важную роль в формировании существующих 
финансовых и административных условий! Разнообразный и богатый опыт выбранный нами инновационный путь играет 
важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. С другой стороны 
социально-экономическое развитие позволяет оценить значение системы обучения кадров,...
        </p>
        
    </section>

export const About = ()=>
    <section className='about'>
        <h1>About</h1>
    </section>


export const Contact = ()=>
    <section className='contact'>
        <h1>Для связи со мной</h1>
        <p>https://vk.com/im?sel=263370028</p>
        <p>https://www.instagram.com/semen_lypin/</p>
        <p>https://web.tlgrm.eu/#/im?p=@lur1e</p>
        <p>vorotnikov.german@yandex.ru</p>
        <p><a href="tel:8-952-202-9672" aria-label="Звоните в любое время" target="_blank" rel="noopener noreferrer">8-952-202-9672</a></p>
        <div className="footerBar">
          <a href="https://vk.com/id230124085" ><img src={require('../style/vk-logo.png')} className="VK"/></a>
          <a href="https://www.instagram.com/semen_lypin/"><img src={require('../style/inst-logo.png')} className="inst"/></a> 
          <a href="https://web.tlgrm.eu/#/im?p=@lur1e"><img src={require('../style/tel-logo.png')} className="telegram"/></a> 
        </div>
    </section>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>По ссылке ничего не обнаружено '{location.pathname}'</h1>
    </div>