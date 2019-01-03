import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Feature4 = () => (
  <div className="bg-light d-flex py-5">
    <div className="container justify-content-center align-self-center">
        <div className="row">
            <div className="col text-center">
              <h2>Nossos serviços</h2>
              <p className="lead">Conheça mais sobre o que oferecemos a nossos clientes.</p>
            </div>
        </div>
        <div className="row mt-5">
            <div className="offset-lg-1 col-lg-5 col-md-12">
              <div class="media">
                  <i className="fas fa-globe-americas mr-3 text-brand" style={{ "fontSize": "2rem"}}></i>
                  <div class="media-body">
                    <h6>Desenvolvimento de sites</h6>
                    <p className="lead">
                      Criação de páginas, websites, landing-pages, e sites institucionais.<br />
                      Atendemos os mais diversos orçamentos e necessidades.
                    </p>
                  </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5 col-md-12">
                <div class="media">
                    <i className="fas fa-envelope mr-3 text-brand" style={{ "fontSize": "2rem"}}></i>
                    <div class="media-body">
                        <h6>E-mail profissional e Cloud Storage</h6>
                        <p className="lead">
                          Tenha um e-mail profissional com espaço de 100GB na nuvem, suporte 24x7 e SLA de 99,9%.
                        </p>
                        <p className="font-italic">Powered by Google Inc.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="offset-lg-1 col-lg-5 col-md-12">
                <div class="media">
                    <i className="fas fa-server mr-3 text-brand" style={{ "fontSize": "2rem"}}></i>
                    <div class="media-body">
                        <h6>Hospedagem e Gerenciamento</h6>
                        <p className="lead">
                          Seu website estará hospedado em um dos melhores datacenters do mundo, com instalações em São Paulo, Rio de Janeiro e no leste dos EUA.
                        </p>
                    </div>
                </div>
            </div>
            <div className="offset-lg-1 col-lg-5 col-md-12">
                <div class="media">
                    <i className="fas fa-users mr-3 text-brand" style={{ "fontSize": "2rem"}}></i>
                    <div class="media-body">
                        <h6>Gestão do seu website</h6>
                        <p className="lead">
                          Altere imagens, textos, gráficos e páginas, <span className="d-block font-weight-bold">sem pagar nada a mais por isso.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
)

Feature4.propTypes = {
  
}

Feature4.defaultProps = {
  
}

export default Feature4
