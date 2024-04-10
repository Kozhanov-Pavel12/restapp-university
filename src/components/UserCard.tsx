import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { memo } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';

interface IUserProps {
    userItem: any
}

export const UserCard = memo(({ userItem }: IUserProps) => {
    const [show, setShow] = useState(false);    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="mb-4">
                <Card.Header>{`${userItem.first_name.toUpperCase()} ${userItem.last_name.toUpperCase()}`}</Card.Header>
                <Card.Body>
                  <Card.Title>{`Профессия - ${userItem.job_title}`}</Card.Title>
                  <Card.Text>
                    {`Почта: ${userItem.email}`}
                  </Card.Text>
                  <Card.Text>
                    {`Дата рождения: ${userItem.birthdate}`}
                  </Card.Text>
                  <Button variant="primary" onClick={handleShow}>Профиль пользователя</Button>
                </Card.Body>
            </Card>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                  {`${userItem.first_name.toUpperCase()} ${userItem.last_name.toUpperCase()}`}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="mb-3">
                       {`Место работы - ${userItem.company_name}`} 
                    </div>
                    <div className="mb-3">
                        {`Номер телефона - ${userItem.phone}`} 
                    </div>
                    <div>
                        {`Департамент - ${userItem.department}`} 
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
  );
})
