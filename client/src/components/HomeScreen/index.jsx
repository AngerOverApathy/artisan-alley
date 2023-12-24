import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import data from '../../data';

export default function HomeScreen() {
    return (
        <>
            <main>
                <h1>Featured Products</h1>
                <div className='products'>
                    {data.products.map(product => (
                        <div className='product' key={product.slug}>
                            <img src={product.image} alt={product.name} />
                            <div className='product-info'>
                                <Link to={`/product/${product.slug}`}>
                                    <h3>{product.name}</h3>
                                </Link>
                                <p><strong>${product.price.toFixed(2)}</strong></p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
