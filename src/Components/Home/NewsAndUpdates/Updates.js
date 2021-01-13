import React from 'react'
import { Card, CardText, CardBody, CardLink, CardTitle } from 'reactstrap';

import './Updates.css'

function Updates() {
    return (
        <>
            <Card className="updates">
                <CardBody>
                    <CardTitle tag="h5">News and Latest Updates</CardTitle>
                    <CardText>
                        <CardLink href="#">❖ Infrastructure and technical support</CardLink>
                    </CardText>
                    <CardText>
                        <CardLink href="#">❖ Financial support</CardLink>
                    </CardText>
                    <CardText>
                        <CardLink href="#">❖ Mentoring and coaching</CardLink>
                    </CardText>
                    <CardText>
                        <CardLink href="#">❖ Business networking</CardLink>
                    </CardText>
                    <CardText>
                        <CardLink href="#">❖ Product development and manufacturing </CardLink>
                    </CardText>
                    <CardText>
                        <CardLink href="#">❖ Support for product testing and certification </CardLink>
                    </CardText>
                    <CardText>
                        <CardLink href="#">❖ Media visibility  </CardLink>
                    </CardText>
                    <CardText>
                        <CardLink href="#">❖ System, simulation, modelling and visualization </CardLink>
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Updates
