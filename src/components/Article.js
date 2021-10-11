import { Card } from 'antd';
import {CalendarOutlined} from '@ant-design/icons';

function NewsPicture(props) {
  const srcOfImage =  props.urlImg;
  if (props.urlImg) {
    return <img src={srcOfImage} alt="" className='img' />
  } else {
    return <div className="picture"> no picture </div>
  }
}

function Article (props){
    const { Meta } = Card;
    return(
        <Card hoverable className='card'>
          <NewsPicture urlImg={props.newObj.image} />
          <div className="box">
          <span className="pub-date"> <CalendarOutlined /> {props.newObj.pub_date} </span>
          <span className="category"> {props.newObj.category_name} </span>
          </div>
        <Meta title={props.newObj.title} description={props.newObj.description} />
        <a href={props.newObj.href} className='more'> Batafsil </a>
      </Card>
    );
}

export default Article;