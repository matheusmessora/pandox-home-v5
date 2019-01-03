import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header1 = ({ image, onClick }) => (
    <div className="container justify-content-center align-self-center">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <h1 className="text-white display-4 text-center">Pronto para ter seu site em 10 dias?</h1>
                <p className="lead text-white text-center">Nossa equipe está pronta para atender os mais variados desafios.</p>
                <div className="text-center">
                  <button type="button" className="mt-3 btn btn-lg btn-outline-light" onClick={onClick}>
                    <span>Sim, estou pronto!</span>
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
