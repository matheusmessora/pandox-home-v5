import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <div className="h-100">
      <div className="h-100 pt-5 border-bottom border-brand-accent"
      style={{
        "background-image": "linear-gradient(#0033cb, #000d99)"
      }}
      >
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <span className="text-brand-accent text-uppercase font-weight-bold">Serviço</span>
                      <h1 className="text-white display-4 font-weight-bold">Olá!<br/>
                          Pronto para ter seu site na internet em até 7 dias?</h1>
                      <div className="text-center">
                        <button type="button" className="mt-3 btn btn-lg btn-outline-light"><h3>Sim, estou pronto!</h3></button>
                      </div>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                      <img src="first2.jpg" className="d-none d-lg-block img-fluid border"/>
                  </div>

              </div>
          </div>
      </div>

      <div className="h-100 pt-5" style={{
        "background-image": "url('money1.jpg')",
        "background-size": "auto 60%",
        "background-repeat": "no-repeat"
      }}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-5">
                      
                  </div>
                  <div className="col-lg-7 col-md-12">
                      <span className="text-brand-accent text-uppercase font-weight-bold">Preço</span>
                      <h1 className="display-4 font-weight-bold">Começa com R$20 por mês.<br/>
                          <span
                              className="d-none d-lg-block">Se você quiser mais, você paga apenas um extra.<br/></span>
                          Legal, né?</h1>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-brand h-100 pt-5 border-bottom border-brand-accent"  style={{
        "background-image": "url('last3.jpg')",
        "background-size": "cover"
      }}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-7 col-md-12 mt-5 pt-5 ">
                      <span className="text-brand-accent text-uppercase font-weight-bold">Diferencial</span>
                      <h1 className=" display-4 font-weight-bold px-2 text-white bg-dark-primary">Galeria de
                          fotos, mapa, formulário de contatos, tabela de preços e muito mais.</h1>
                  </div>
                  <div className="col-lg-4 offset-lg-1">
                    
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-brand-dark py-4">
          <div className="container">
              <div className="row">
                  <div className="col text-white text-center">
                      <h1 className="display-4">O seu site fica pronto em apenas 7 dias.</h1>
                  </div>
              </div>
          </div>
      </div>


      <footer className="p-5 text-white">
          <div className="container">
              <div className="row">
                <div className="col">
                  <h1>
                    <span className="border-bottom border-brand-accent">contato@pandox.com.br</span>
                  </h1>
                  <h4 className="text-white-50">(11) 99911-4400</h4>
                </div>
              </div>
              <div className="row mt-5">
                  <div className="col text-center">
                      Pandox - Serviços LTDA. | Desenvolvido por Pandox
                  </div>
              </div>

          </div>
      </footer>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
