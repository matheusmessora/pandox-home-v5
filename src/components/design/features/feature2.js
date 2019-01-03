import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Feature2 = ({ image, onClick }) => (
  <div className="bg-dark h-100 d-flex border-bottom border-brand-accent"  style={{
    "backgroundImage": 'url('+image+')',
    "backgroundSize": "cover"
  }}>
      <div className="container py-5 text-white justify-content-center align-self-center">
        <div className="row mb-5">
          <div className="col">
            <h1 className="display-4">Nossos diferenciais</h1>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-5 mx-lg-auto col-md-12">
                <hr />
                <h3>Whatsapp</h3>
                <p className="lead">Suporte total ao Whatsapp em seu site.</p>
            </div>
            <div className="col-lg-5 mx-lg-auto col-md-12">
                <hr />
                <h3>Galeria de Fotos</h3>
                <p className="lead">Exiba suas fotos com albuns lindissimos.</p>
            </div>
            <div className="col-lg-5 mx-lg-auto col-md-12">
                <hr />
                <h3>Mapas</h3>
                <p className="lead">Integração total com GoogleMaps. Seus clientes saberão terão a certeza como encontrar sua empresa.</p>
            </div>
            <div className="col-lg-5 mx-lg-auto col-md-12">
                <hr />
                <h3>Tabela de Preços</h3>
                <p className="lead">Temos diversos modelos de tabela de preços, para seus clientes te ligarem o mais rápido possível.</p>
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
  image: ``,
}

export default Feature2
