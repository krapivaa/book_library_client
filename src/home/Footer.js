import React from 'react';
import {Row, Col} from 'reactstrap';


const Footer = () => {
    return ( 
        <footer className="footer">
     <Row>
         <Col>
         <p><b>&copy; Marina Ivanovskaya 2020</b></p>
         </Col>
         <Col>
         <a style={{float: 'right'}}
                  target="_blank"
                  href="https://twitter.com/VerasenCreate"
                  class="btn btn-default btn-md"
                  ><i class="fa fa-twitter" aria-hidden="true"></i
                  ><span class="network-name"><b> Twitter </b></span></a
                >
                </Col>
     </Row>
        </footer>
     );
}
 
export default Footer;