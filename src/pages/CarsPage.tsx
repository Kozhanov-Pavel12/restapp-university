import React from 'react'
import Container from 'react-bootstrap/Container';
import { CarCard } from '../components/CarCard';
import { useCarsList } from '../hooks/useCarsList';

export const CarsPage = () => {
    const { cars } = useCarsList()

    return (
        <Container>
            {
                cars ? cars.map((e, index) => (
                    <CarCard carItem={e}/>
                )) : <div>Загрузка...</div>
            }
        </Container>
    );
};
