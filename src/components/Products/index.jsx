import React from 'react';
import data from '../../data';
import './style.css';

export default function Products() {
    return (
        <>
        <main> 
            <h1>Featured Products</h1>
                <div className='products'>
                    {data.products.map(product => (
                        <div className='product' key={product.slug}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
        </main>
        </>
    );
}
