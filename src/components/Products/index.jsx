import React from 'react';
import data from '../../data';
import './style.css';

// export default function Products() {
//     return (
//         <>
//         <main> 
//             <h1>Featured Products</h1>
//                 <div className='products'>
//                     {data.products.map(product => (
//                         <div className='product' key={product.slug}>
//                             <img src={product.image} alt={product.name} />
//                             <div className='product-info'>
//                             <a href={`/product/${product.slug}`}>
//                                 <h3>{product.name}</h3>
//                             </a>
//                                 <p><strong>${product.price}</strong></p>
//                                 <button>Add to Cart</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//         </main>
//         </>
//     );
// }
