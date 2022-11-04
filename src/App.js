import React from 'react';

class App extends React.Component {
  
  render() {
   
    return (
    
      <div>
          <div className="preloader">
              <div className="preloader-inner">
                  <div className="preloader-icon">
                      <span></span>
                      <span></span>
                  </div>
              </div>
          </div>
        
          <header className="header shop">
         
              <div className="topbar">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4 col-md-12 col-12">
                           
                          </div>
                          <div className="col-lg-8 col-md-12 col-12">
                             
                              <div className="right-content">
                                  <ul className="list-main">
                                      <li><i className="ti-alarm-clock"></i> <a href="#">Promoções</a></li>
                                      <li><i className="ti-user"></i> <a href="#">Minha conta</a></li>
                                      <li><i className="ti-power-off"></i><a href="#">Login</a></li>
                                  </ul>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="middle-inner">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-2 col-md-2 col-12">
                             
                              <div className="logo">                              
                              <i class="fa-solid fa-bags-shopping"></i>
                              </div>
                            
                              <div className="search-top">
                                  <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
                                
                                  <div className="search-top">
                                      <form className="search-form">
                                          <input type="text" placeholder="Buscar produtos..." name="search" />
                                          <button value="search" type="button"><i className="ti-search"></i></button>
                                      </form>
                                  </div>
                                 
                              </div>
                           
                              <div className="mobile-nav"></div>
                          </div>
                          <div className="col-lg-8 col-md-7 col-12">
                              <div className="search-bar-top">
                                  <div className="search-bar">
                                      <select>
                                          <option selected="selected">categorias</option>
                                          <option>tecnologia</option>
                                          <option>moda</option>
                                          <option>saúde</option>
                                      </select>
                                      <form>
                                          <input name="search" placeholder="Buscar....." type="search" />
                                          <button className="btnn"><i className="ti-search"></i></button>
                                      </form>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-3 col-12">
                              <div className="right-bar">
                                 
                                  <div className="sinlge-bar">
                                      <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                  </div>
                                  <div className="sinlge-bar">
                                      <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                  </div>
                                  <div className="sinlge-bar shopping">
                                      <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></a>
                                    
                                      <div className="shopping-item">
                                          <div className="dropdown-cart-header">
                                              <span>2 Itens</span>
                                              <a href="#">Ver Carrinho</a>
                                          </div>
                                          <ul className="shopping-list">
                                              <li>
                                                  <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                  <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                  <h4><a href="#">Bolsa feminina</a></h4>
                                                  <p className="quantity">1x - <span className="amount">R$99.00</span></p>
                                              </li>
                                              <li>
                                                  <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                  <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                  <h4><a href="#">Smartphone</a></h4>
                                                  <p className="quantity">1x - <span className="amount">R$35.00</span></p>
                                              </li>
                                          </ul>
                                          <div className="bottom">
                                              <div className="total">
                                                  <span>Total</span>
                                                  <span className="total-amount">R$134.00</span>
                                              </div>
                                              <a href="#" className="btn animate">verificar</a>
                                          </div>
                                      </div>
                                     
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
              <div className="header-inner">
                  <div className="container">
                      <div className="cat-nav-head">
                          <div className="row">
                              <div className="col-lg-3">
                                  <div className="all-category">
                                      <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIAS</h3>
                                      <ul className="main-category">
                                          <li><a href="#">Novos produtos <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                              <ul className="sub-category">
                                                  <li><a href="#">accessorios</a></li>
                                                  <li><a href="#">mais vendidos</a></li>
                                                  <li><a href="#">melhores ofertas</a></li>
                                                  <li><a href="#">tecnologia</a></li>
                                                  <li><a href="#">casa</a></li>
                                                  <li><a href="#">construção</a></li>
                                                  <li><a href="#">bolsas</a></li>
                                                  <li><a href="#">bebês</a></li>
                                                  <li><a href="#">eletrodomésticos</a></li>
                                              </ul>
                                          </li>
                                          <li className="main-mega"><a href="#">mais vendidos <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                              <ul className="mega-menu">
                                                  <li className="single-menu">
                                                      <a href="#" className="title-link">produtos para Crianças</a>
                                                      <div className="image">
                                                          <img src="https://via.placeholder.com/225x155" alt="#" />
                                                      </div>
                                                      <div className="inner-link">
                                                          <a href="#">Brinquedos</a>
                                                          <a href="#">carrinho </a>
                                                          <a href="#">livro de colorir</a>
                                                          <a href="#">bonecas</a>
                                                      </div>
                                                  </li>
                                                  <li className="single-menu">
                                                      <a href="#" className="title-link">Tecnologia</a>
                                                      <div className="image">
                                                          <img src="https://via.placeholder.com/225x155" alt="#" />
                                                      </div>
                                                      <div className="inner-link">
                                                          <a href="#">celulares e telefones</a>
                                                          <a href="#">câmeras e acessórios</a>
                                                          <a href="#">Tv</a>
                                                          <a href="#">jogos</a>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </li>

                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-9 col-12">
                                  <div className="menu-area">
                                     
                                      <nav className="navbar navbar-expand-lg">
                                          <div className="navbar-collapse">	
                                              <div className="nav-inner">	
                                                  <ul className="nav main-menu menu navbar-nav">
                                                          <li className="active"><a href="#">Home</a></li>
                                                          <li><a href="#">Produtos</a></li>												
                                                          <li><a href="#">Serviços</a></li>
                                                          <li><a href="#">seções<i className="ti-angle-down"></i><span className="new">New</span></a>
                                                              <ul className="dropdown">
                                                                  <li><a href="#">Carrinho</a></li>
                                                                  <li><a href="#">minha conta</a></li>
                                                              </ul>
                                                          </li>
                                                          <li><a href="#">Páginas</a></li>									
                                                          <li><a href="#">recentes<i className="ti-angle-down"></i></a>
                                                              <ul className="dropdown">
                                                                  <li><a href="#">pesquisas recentes</a></li>
                                                              </ul>
                                                          </li>
                                                          <li><a href="#">mais buscados</a></li>
                                                      </ul>
                                              </div>
                                          </div>
                                      </nav>
                                    	
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
          </header>
         
          <section className="hero-slider">
           
              <div className="single-slider">
                  <div className="container">
                      <div className="row no-gutters">
                          <div className="col-lg-9 offset-lg-3 col-12">
                              <div className="text-inner">
                                  <div className="row">
                                      <div className="col-lg-7 col-12">
                                          <div className="hero-text">
                                              <h1><span>AGORA 50% OFF </span>câmera</h1>
                                              <p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
                                              <div className="button">
                                                  <a href="#" className="btn">Comprar agora!</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
          </section>
        
          <div className="product-area most-popular section">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="section-title">
                              <h2>categorias</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12">
                          <div className="owl-carousel popular-slider">
                           
                              <div className="single-product">
                                  <div className="product-img">
                                      <a href="#">
                                          <img className="default-img" src="https://via.placeholder.com/330x330" alt="#" />
                                          <img className="hover-img" src="https://via.placeholder.com/330x330" alt="#" />
                                          
                                      </a>
                                  </div>
                                  <div className="product-content">
                                      <h3><a href="#">moda</a></h3>

                                  </div>
                              </div>
                           
                              <div className="single-product">
                                  <div className="product-img">
                                      <a href="#">
                                          <img className="default-img" src="https://via.placeholder.com/330x330" alt="#" />
                                          <img className="hover-img" src="https://via.placeholder.com/330x330" alt="#" />
                                          
                                      </a>
                                  </div>
                                  <div className="product-content">
                                      <h3><a href="#">moda</a></h3>

                                  </div>
                              </div>
                            
                              <div className="single-product">
                                  <div className="product-img">
                                      <a href="#">
                                          <img className="default-img" src="https://via.placeholder.com/330x330" alt="#" />
                                          <img className="hover-img" src="https://via.placeholder.com/330x330" alt="#" />
                                          
                                      </a>
                                  </div>
                                  <div className="product-content">
                                      <h3><a href="#">moda</a></h3>

                                  </div>
                              </div>
                           
                              <div className="single-product">
                                  <div className="product-img">
                                      <a href="#">
                                          <img className="default-img" src="https://via.placeholder.com/330x330" alt="#" />
                                          <img className="hover-img" src="https://via.placeholder.com/330x330" alt="#" />
                                          
                                      </a>
                                  </div>
                                  <div className="product-content">
                                      <h3><a href="#">moda</a></h3>

                                  </div>
                              </div>
                             
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         
         
          <section className="shop-blog section">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="section-title">
                              <h2>Parte da Rapha</h2>
                          </div>
                      </div>
                  </div>


              </div>
          </section>
        
          <footer className="footer">
             
              <div className="footer-top section">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-5 col-md-6 col-12">
                              
                              <div className="single-footer about">
                                  <div className="logo">
                                      <a href="#">Footer parte da Rapha</a>
                                  </div>
                                  <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                  <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+0123 456 789</a></span></p>
                              </div>
                             
                          </div>
                          <div className="col-lg-2 col-md-6 col-12">
                             
                              <div className="single-footer links">
                                  <h4>Information</h4>
                                  <ul>
                                      <li><a href="#">About Us</a></li>
                                      <li><a href="#">Faq</a></li>
                                      <li><a href="#">Terms & Conditions</a></li>
                                      <li><a href="#">Contact Us</a></li>
                                      <li><a href="#">Help</a></li>
                                  </ul>
                              </div>
                            
                          </div>
                          <div className="col-lg-2 col-md-6 col-12">
                            
                              <div className="single-footer links">
                                  <h4>Customer Service</h4>
                                  <ul>
                                      <li><a href="#">Payment Methods</a></li>
                                      <li><a href="#">Money-back</a></li>
                                      <li><a href="#">Returns</a></li>
                                      <li><a href="#">Shipping</a></li>
                                      <li><a href="#">Privacy Policy</a></li>
                                  </ul>
                              </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-6 col-12">
                            
                              <div className="single-footer social">
                                  <h4>Get In Tuch</h4>
                                
                                  <div className="contact">
                                      <ul>
                                          <li>Ludhiana.</li>
                                          <li>Punjab, India.</li>
                                          <li>therichpost.com</li>
                                          <li>+0000000000</li>
                                      </ul>
                                  </div>
                                
                                  <ul>
                                      <li><a href="#"><i className="ti-facebook"></i></a></li>
                                      <li><a href="#"><i className="ti-twitter"></i></a></li>
                                      <li><a href="#"><i className="ti-flickr"></i></a></li>
                                      <li><a href="#"><i className="ti-instagram"></i></a></li>
                                  </ul>
                              </div>
                             
                          </div>
                      </div>
                  </div>
              </div>
            
              <div className="copyright">
                  <div className="container">
                      <div className="inner">
                          <div className="row">
                              <div className="col-lg-6 col-12">
                                  <div className="left">
                                      <p>Copyright © 2021 <a href="#" target="_blank">Jassa</a>  -  All Rights Reserved.</p>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-12">
                                  <div className="right">
                                      <img src="assets/images/payments.png" alt="#" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>

      </div>
)
};
}

export default App;
