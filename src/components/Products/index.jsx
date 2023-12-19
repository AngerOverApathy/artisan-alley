import React from 'react';
import data from '../../data';

export default function Products() {
    return (
        <>
        <main> 
            <h1>Featured Products</h1>
            {data.products.map(product => (
                <div>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </main>
        </>
    );
}
