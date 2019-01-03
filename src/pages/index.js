import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import first2 from '../images/last1.jpg'
import teste from '../images/money11.jpg'
import picture from '../images/abstract.jpg'
import money from '../images/money-01.jpg'
import whatsapp from '../images/whatsapp.png'
import matheusmessora from '../images/matheusmessora.jpeg'
import rafaelasantos from '../images/rafaelasantos.jpeg'
import Feature1 from '../components/design/features/feature1'
import Feature2 from '../components/design/features/feature2'
import Header1 from '../components/design/header/header1'


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
            <Header1 image={first2} onClick={this.handleClick} />
          </div>
          <div className="d-flex my-5 py-5 h-50">
            <Feature1 image={money} onClick={this.handleClick} />
          </div>
          
          <Feature2 image={picture} onClick={this.handleClick} />


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
                          <p className="text-muted text-uppercase">Tecnologia</p>
                          <a href="https://www.linkedin.com/in/matheusmessora/"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg">
                        <div className="border py-2 px-4 text-center border-sm">
                          <img src={rafaelasantos} style={{height: "200px"}} className="mb-3 rounded border-brand-accent img-thumbnail" />
                          <p className="h4">Rafaela Santos</p>
                          <p className="text-muted text-uppercase">Vendas & Produtos</p>
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
                      <h3 className="d-none d-lg-inline border-bottom border-brand-accent">contato@pandox.com.br</h3>
                      <h4 className="d-inline d-lg-none border-bottom border-brand-accent">contato@pandox.com.br</h4>
                    </div>
                    <div className="mt-2">
                      <span className="d-block lead">Ligue ou mande uma mensagem para:</span>
                      <a className="d-block d-lg-none text-white"
                       href="https://wa.me/5511985519792">
                       <img src={whatsapp} className="mr-1" style={{height: "30px"}} /> (11) 98551-9792
                     </a>
                      <a className="d-none d-lg-block h4 text-white"
                       href="https://wa.me/5511985519792">
                       <img src={whatsapp} className="mr-1"  style={{height: "30px"}} /> (11) 98551-9792
                     </a>
                    </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                      <div className="col text-center text-white-50">
                          Pandox | <span className="">CNPJ: 26.929.452/0001-46</span>
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
