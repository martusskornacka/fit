import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductsPage = ({ match }) => {

    return (
        <>
            <div>Oferta</div>
            <Product id={match.params.id} />
            <Link to="/products">Powrót do oferty</Link>
        </>
    )
}

export default ProductsPage;