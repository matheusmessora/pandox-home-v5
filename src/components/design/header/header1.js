import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header1 = ({ image, onClick }) => (
    <div className="container-fluid justify-content-center align-self-center">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <h1 className="text-white display-3">Criação de websites.</h1>
                <p className="lead text-white">Nós ajudamos clientes a aumentar suas vendas através da criação e otimização de sites e campanhas de marketing digital.</p>
                <div className="text-center">
                  <button type="button" className="mt-3 btn btn-lg btn-outline-light" onClick={onClick}>
                    <span>Entre em contato</span>
                  </button>
                </div>
            </div>
            <div className="col-lg-6">
                <img src={image} className="d-none d-lg-block img-fluid img-border"/>
            </div>
        </div>
    </div>
)

Header1.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func
}

Header1.defaultProps = {
  image: ``,
}

export default Header1
