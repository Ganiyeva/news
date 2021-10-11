import 'antd/dist/antd.css';
import './App.css';
import Header from './components/Header';
import newsarr from './news';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  const newsList = newsarr.map((el)=> {
    return <Article newObj={el}/>
  });
  return (
    <div className="wrapper">
      <Header />
        <section className='intro'>
            <div className='container'>
                <div className='row2'>
                  {newsList}
                </div>
            </div>
        </section>
      <Footer />  
    </div>
  );
}

export default App;