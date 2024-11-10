import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopoverOption() {
    return (
        <div className='row' style={{width: '80%', margin: '0 auto', paddingTop: '100px'}}>
            {['top', 'right', 'bottom', 'left'].map((placement) => (
                <div className='col-md-3'>
                <Card style={{marginLeft:'10px'}}>
                    <Card.Body>
                        <Card.Title>Popover {placement}</Card.Title>
                        <Card.Text>
                            <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                        <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                        <Popover.Body>
                                            <strong>Sample of popover!</strong> Check this sample.
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Button variant="secondary">Popover on {placement}</Button>
                            </OverlayTrigger>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            ))

            }

        </div>
    );
}

export default PopoverOption;