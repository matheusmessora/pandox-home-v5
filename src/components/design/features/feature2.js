import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Feature2 = ({ image, onClick }) => (
  <div className="bg-dark d-flex border-bottom border-brand-accent"  style={{
    "backgroundImage": 'url('+image+')',
    "backgroundSize": "cover"
  }}>
      <div className="container py-5 text-white justify-content-center align-self-center">
        <div className="row mb-5">
          <div className="col">
            <h2 className="display-4">Nossos diferenciais</h2>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-5 mx-lg-auto col-md-12">
                <hr />
                <h3>Time especializado</h3>
                <p className="lead">Nosso time já trabalhou nas mais diversas empresas brasileiras, passando por grandes e-commerces esportivos, portais de notícias e agências de viagens.</p>
            </div>
            <div className="col-lg-5 mx-lg-auto col-md-12">
                <hr />
                <h3>Qualidade acima de tudo</h3>
                <p className="lead">Nosso foco é a mais alta qualidade na prestação de serviço para a sua empresa.</p>
            </div>
            <div className="col-lg-5 mx-lg-auto col-md-12">
                <hr />
                <h3>Suporte</h3>
                <p className="lead">Problemas? Você pode mandar um e-mail, ligar ou mandar uma mensagem pelo WhatsApp para o nosso time.</p>
                <div className="text-right">
                <button type="button" className="mr-auto btn btn-outline-light" onClick={onClick}>
                  <span>Entre em contato</span>
                </button>
                </div>
            </div>
        </div>
      </div>
  </div>
)

Feature2.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func
}

Feature2.defaultProps = {
  
}

export default Feature2
