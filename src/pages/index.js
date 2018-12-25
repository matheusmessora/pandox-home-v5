import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import first2 from '../images/last1.jpg'
import teste from '../images/money11.jpg'
import picture from '../images/picture.jpg'
import money from '../images/money-01.jpg'
import whatsapp from '../images/whatsapp.png'
import matheusmessora from '../images/matheusmessora.jpeg'
import rafaelasantos from '../images/rafaelasantos.jpeg'

console.log(first2)
class IndexPage extends Component {
  
  handleClick = event => {
    var loc = document.location.toString().split('#')[0];
    document.location = loc + '#contact';
    return false;
  }
  
  render() {
    return (
      <Layout>
        <SEO title="Pandox - Tecnologia para micro e pequenas empresas" keywords={[`criação de sites`, `desenvolvimento de sites`, `preciso de um site`]} />
        
        <div className="h-100">
          <div className="h-100 d-flex border-bottom border-brand-accent"
          style={{
            "background-image": "linear-gradient(#0033cb, #000d99)"
          }}
          >
              <div className="container justify-content-center align-self-center">
                  <div className="row">
                      <div className="col-lg-6 col-md-12">
                          <span className="text-brand-accent text-uppercase font-weight-bold">Criação de sites</span>
                          <h1 className="text-white display-4 font-weight-bold">Olá!<br/>
                              Pronto para ter seu site em 10 dias?</h1>
                          <div className="text-center">
                            <button type="button" className="mt-3 btn btn-lg btn-outline-light" onClick={this.handleClick}>
                              <span className="h3">Sim, estou pronto!</span>
                              </button>
                          </div>
                      </div>
                      <div className="col-lg-5 offset-lg-1">
                          <img src={first2} className="d-none d-lg-block img-fluid img-border"/>
                      </div>

                  </div>
              </div>
          </div>

          <div className="d-flex my-5 py-5 h-50">
              <div className="container justify-content-center align-self-center">
                  <div className="row">
                  
                      <div className="col-lg-5 offset-lg-1">
                          <img src={money} className="img-fluid img-border img-border-brand"/>
                      </div>
                      <div className="col-lg-6 col-md-12">
                          <span className="text-brand-accent text-uppercase font-weight-bold">Preço</span>
                          <h1 className="display-4 font-weight-bold">Planos a partir de R$30 por mês.</h1>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bg-brand h-100 d-flex border-bottom border-brand-accent"  style={{
            "backgroundImage": 'url('+picture+')',
            "backgroundSize": "cover"
          }}>
              <div className="container  justify-content-center align-self-center">
                  <div className="row">
                      <div className="col-lg-7 col-md-12">
                          <span className="text-brand-accent text-uppercase font-weight-bold">Diferencial</span>
                          <p className="h1 font-weight-bold px-2 text-white bg-dark-primary">
                          Integração com WhatsApp, galeria de
                              fotos, mapa, formulário de contatos, tabela de preços e muito mais.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bg-brand-dark py-4">
              <div className="container">
                  <div className="row">
                      <div className="col text-white text-center">
                          <h1 className="display-4">O seu site fica pronto em apenas 10 dias.</h1>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bg-white py-5">
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <h1>Time de especialistas</h1>
                    <p>Conheça o time que é apaixonado por ajudar micro e pequenas empresas a possuirem seu site na internet.</p>
                  </div>
                </div>
                  <div className="row">
                      <div className="col-md-12 col-lg">
                        <div className="border py-2 px-4 text-center border-sm">
                          <img src={matheusmessora} style={{height: "200px"}}  className="mb-3 rounded border-brand-accent img-thumbnail" />
                          <p className="h4">Matheus Messora</p>
                          <p className="text-muted text-uppercase">Diretor de Tecnologia</p>
                          <a href="https://www.linkedin.com/in/matheusmessora/"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg">
                        <div className="border py-2 px-4 text-center border-sm">
                          <img src={rafaelasantos} style={{height: "200px"}} className="mb-3 rounded border-brand-accent img-thumbnail" />
                          <p className="h4">Rafaela Santos</p>
                          <p className="text-muted text-uppercase">Diretora de Produtos</p>
                          <a href="https://www.linkedin.com/in/rafaela-santos-b31459a3"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                      </div>
                  </div>
              </div>
          </div>




          <footer className="py-5 text-white">
              <div className="container" id="contact">
                  <div className="row">
                    <div className="col">
                    <div>
                      <span className="d-none d-lg-inline h1 border-bottom border-brand-accent">contato@pandox.com.br</span>
                      <span className="d-inline d-lg-none h4 border-bottom border-brand-accent">contato@pandox.com.br</span>
                    </div>
                    <div className="mt-2">
                      <span className="d-block">Ligue ou mande uma mensagem para:</span>
                      <a className="d-block d-lg-none h5 text-white"
                       href="https://wa.me/5511999114437?text=I'm%20interested%20in%20your%20car%20for%20sale">
                       <img src={whatsapp} className="mr-1" style={{height: "30px"}} /> (11) 99911-4400
                     </a>
                      <a className="d-none d-lg-block h4 text-white"
                       href="https://wa.me/5511999114437?text=I'm%20interested%20in%20your%20car%20for%20sale">
                       <img src={whatsapp} className="mr-1"  style={{height: "30px"}} /> (11) 99911-4400
                     </a>
                    </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                      <div className="col text-center">
                          Pandox | CNPJ: 26.929.452/0001-46
                      </div>
                  </div>

              </div>
          </footer>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
