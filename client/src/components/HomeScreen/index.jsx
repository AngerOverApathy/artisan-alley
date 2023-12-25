import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import data from '../../../../server/data';
import './style.css';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/products');
            console.log(result.data)
            setProducts(result.data);
        };
        fetchData();
    }, []);
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
