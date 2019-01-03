import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import first2 from '../images/last1.jpg'
import teste from '../images/money11.jpg'
import picture from '../images/abstract.jpg'
import money from '../images/money-01.jpg'
import whatsapp from '../images/whatsapp.png'
import matheusmessora from '../images/matheusmessora.jpeg'
import rafaelasantos from '../images/rafaelasantos.jpeg'

import Feature1 from '../components/design/features/feature1'
import Feature2 from '../components/design/features/feature2'
import Feature3 from '../components/design/features/feature3'
import Feature4 from '../components/design/features/feature4'

import Client1 from '../components/design/clients/client1'

import Team1 from '../components/design/team/team1'

import Header1 from '../components/design/header/header1'


console.log(first2)
class IndexPage extends Component {
  
  handleClick = event => {
    var loc = document.location.toString().split('#')[0];
    document.location = loc + '#contact';
    return false;
  }
  
  render() {
    return (
      <Layout>
        <SEO title="Pandox" keywords={[`criação de sites`, `desenvolvimento de sites`, `preciso de um site`]} />
        
        <div className="h-100">
          <div className="h-100 d-flex border-bottom border-brand-accent"
          style={{
            "background-image": "linear-gradient(#0033cb, #000d99)"
          }}
          >
            <Header1 image={first2} onClick={this.handleClick} />
          </div>
        
          <Feature4 image={money} onClick={this.handleClick} />
          <Feature1 image={money} onClick={this.handleClick} />
          
          <Feature2 image={picture} onClick={this.handleClick} />
          
          <Feature3 />

          <Team1 />
          
          <footer className="py-5 text-white">
              <div className="container" id="contact">
                  <div className="row">
                    <div className="col">
                    <div>
                      <h3 className="d-none d-lg-inline border-bottom border-brand-accent">contato@pandox.com.br</h3>
                      <h4 className="d-inline d-lg-none border-bottom border-brand-accent">contato@pandox.com.br</h4>
                    </div>
                    <div className="mt-2">
                      <span className="d-block lead">Ligue ou mande uma mensagem para:</span>
                      <a className="d-block d-lg-none text-white"
                       href="https://wa.me/5511985519792">
                       <img src={whatsapp} className="mr-1" style={{height: "30px"}} /> (11) 98551-9792
                     </a>
                      <a className="d-none d-lg-block h4 text-white"
                       href="https://wa.me/5511985519792">
                       <img src={whatsapp} className="mr-1"  style={{height: "30px"}} /> (11) 98551-9792
                     </a>
                    </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                      <div className="col text-center text-white-50">
                          Pandox | <span className="">CNPJ: 26.929.452/0001-46</span>
                      </div>
                  </div>

              </div>
          </footer>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
