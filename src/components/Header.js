function Header(){
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <img src="img/kun-uz-logo.svg" alt="logo" className='logo' />
          <div className='nav'>
            <a href="/uz/news/category/uzbekiston" className='link'> O‘zbekiston </a>
            <a href="/uz/news/category/jahon" className='link'> Jahon </a>
            <a href="/uz/news/category/Iqtisodiyot" className='link'> Iqtisodiyot </a>
            <a href="/uz/news/category/Jamiyat" className='link'> Jamiyat </a>
            <a href="/uz/news/category/Fanvatexnika" className='link'> Fan va texnika </a>
            <input type="text" placeholder='Search' className='search' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;