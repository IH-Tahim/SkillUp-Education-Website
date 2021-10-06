import React from 'react';
import { Container } from 'react-bootstrap';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Newslatter = () => {
    return (
        <div>
            <Container>
                <div className="w-75 m-auto bg-secondary rounded-3 bg-opacity-25 py-5">
                    <h2 className="text-center primary_clr">Subscribe to Our Newslatter</h2>
                    <div className="input-group m-auto w-75">
                        <input type="text" className="form-control position-relative rounded-pill my_height" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-secondary rounded-pill position-absolute end-0 my_z_index" type="button" id="button-addon2"><span className="plane-icon"><FontAwesomeIcon icon={faPaperPlane} /></span></button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Newslatter;