import React from 'react'
import { memo } from 'react'
import Card from 'react-bootstrap/Card';

interface ICardProps {
  carItem: any
}

export const CarCard = memo(({ carItem }: ICardProps) => {
  return (
    <Card className="text-center mb-4" border="secondary">
        <Card.Header>
            <Card.Title>{carItem.car.toUpperCase()}</Card.Title>
        </Card.Header>
            <Card.Body>
              <Card.Text>{`Модель - ${carItem.car_model}`}</Card.Text>
              <Card.Text>{`Год выпуска - ${carItem.car_model_year}`}</Card.Text>
            </Card.Body>
        <Card.Footer className="text-muted">{`Цена -  ${carItem.price}`}</Card.Footer>
    </Card>
  );
})
