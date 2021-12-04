import React, { useEffect, useState } from 'react';
import {getProductsService} from '../services/product'
import { Card } from '../components/Card';
import { FormattedMessage } from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProductsService(searchKey).then((data)=>{
      setProducts(data)
    }
    )
  }, [searchKey])

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id='gallery'/></h1>
        <div className='home-card'>
          {products.map(product => (
            <Card key={product.id} name={product.name} picture={product.picture} price={product.price} isActive={product.isActive==='true'} />
          ))}
        </div>
      </div>
    </section>
  );
};
