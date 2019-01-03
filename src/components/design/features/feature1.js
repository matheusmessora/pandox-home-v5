import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Feature1 = ({ image, onClick }) => (
  <div className="container justify-content-center align-self-center">
      <div className="row">
          <div className="col-lg-5">
              <img src={image} className="img-fluid img-border"/>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-12">
              <h1 className="">Planos a partir de <br/>R$30 por mês.</h1>
              <p className="lead">
                Nossa equipe configura o seu site, faz a instalação, hospeda e cuida dele com carinho. Deixe toda a 
                tecnologia por nossa conta e foque o seu tempo na sua empresa.
              </p>
          </div>
      </div>
  </div>
)

Feature1.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func
}

Feature1.defaultProps = {
  image: ``,
}

export default Feature1
