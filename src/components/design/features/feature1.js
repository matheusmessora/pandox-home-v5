import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Feature1 = ({ image, onClick }) => (
  <div className="d-flex my-lg-5 py-lg-5">
    <div className="container justify-content-center align-self-center">
        <div className="row">
            <div className="col-lg-5">
                <img src={image} className="img-fluid img-border"/>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12">
                <h2 className="">Planos a partir de <br/>R$50 por mês.</h2>
                <p className="lead">
                  Nossa equipe especializa está pronta para realizar o desenvolvimento, otimização e melhoria do seu site de forma rápida e eficiente.<br />
                </p>
            </div>
        </div>
    </div>
  </div>
)

Feature1.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func
}

Feature1.defaultProps = {
  
}

export default Feature1
