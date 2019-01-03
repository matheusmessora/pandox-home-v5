import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import netshoes from '../../../images/netshoes.png'

import matheusmessora from '../../../images/matheusmessora.jpeg'
import rafaelasantos from '../../../images/rafaelasantos.jpeg'

const Client1 = () => (
  <div className="py-5">
      <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2>Conheça nosso time</h2>
            </div>
          </div>
          <div className="row">
              <div className="col-6 text-center">
                <img src={matheusmessora} style={{maxHeight: "200px"}}  className="mb-3 rounded border-brand-accent img-thumbnail" />
                <h4 className="font-weight-light">Matheus Messora</h4>
                <h6 className="mb-4 text-secondary">Tecnologia</h6>
                <a href="https://www.linkedin.com/in/matheusmessora/"><i class="fab fa-linkedin"></i> LinkedIn</a>
              </div>
              
              <div className="col-6 text-center">
                <img src={rafaelasantos} style={{maxHeight: "200px"}}  className="mb-3 rounded border-brand-accent img-thumbnail" />
                <h4 className="font-weight-light">Rafaela Santos</h4>
                <h6 className="mb-4 text-secondary">Marketing & Produto</h6>
                <a href="https://www.linkedin.com/in/rafaela-santos-b31459a3"><i class="fab fa-linkedin"></i> LinkedIn</a>
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
