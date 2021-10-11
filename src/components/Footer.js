import {YoutubeOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined} from '@ant-design/icons';

export default function Footer(){
    return(
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <p className='footer-text'> «KUN.UZ» сайтида эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят ёзма розилиги билан амалга оширилиши мумкин. <br/>
            Гувоҳнома: №0987. Берилган санаси: 22.06.2015 йил. Муассис: «WEB EXPERT» МЧЖ. Таҳририят манзили: 100043, Тошкент шаҳри, К. Ёрматов кўчаси, 12-уй. Электрон манзил: info@kun.uz. <br/>
            Сайтда эълон қилинаётган муаллифлик мақолаларида келтирилган фикрлар муаллифга тегишли ва улар Kun.uz таҳририяти нуқтаи назарини ифода этмаслиги мумкин. <br/>
            Ⓣ - мақола ва материалларда қўйилган мазкур белги уларнинг тижорат ва реклама ҳуқуқлари асосида эълон қилинганлигини билдиради. </p>
            <nav className='social'>
              <a href="https://www.youtube.com/" className='social__item'> <YoutubeOutlined /> </a>
              <a href="https://www.facebook.com/" className='social__item'> <FacebookOutlined /> </a>
              <a href="https://www.twitter.com/" className='social__item'> <TwitterOutlined /> </a>
              <a href="https://www.instagram.com/?hl=ru" className='social__item'> <InstagramOutlined /> </a>
            </nav>
          </div>
        </div>
      </div>
    );
}