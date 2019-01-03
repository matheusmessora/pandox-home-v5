import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import netshoes from '../../../images/netshoes.png'
import uol from '../../../images/uol.png'
import cvc from '../../../images/cvc.png'

const Client1 = () => (
  <div className="bg-light py-3">
      <div className="container">
          <div className="row">
              <div className="col text-center">
                  <img src={netshoes} className="d-inline-block mx-3 grayscale" style={{"max-width": "200px"}} />
                  <img src={uol} className="d-inline-block mx-3 grayscale" style={{"max-width": "120px"}} />
                  <img src={cvc} className="d-inline-block mx-3 grayscale" style={{"max-width": "120px"}} />
              </div>
          </div>
      </div>
  </div>
)

Client1.propTypes = {
  
}

Client1.defaultProps = {
  
}

export default Client1
