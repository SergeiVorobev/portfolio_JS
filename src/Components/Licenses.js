import React, { Component } from 'react';

class Licenses extends Component {
  render() {

    if(this.props.data){
      var certificates = this.props.data.certificates.map(function(certificates){
        var certificateImage = 'images/licenses/'+certificates.image;
        return <div key={certificates.title} className="columns licenses-item">
           <div className="item-wrap">
            <a href={certificates.url} title={certificates.title}>
               <img alt={certificates.title} src={certificateImage} />
               <div className="overlay">
                  <div className="licenses-item-meta">
                 <h5>{certificates.title}</h5>
                     <p>{certificates.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="licenses">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Licenses and Certificates</h1>

            <div id="licenses-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {certificates}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Licenses;
