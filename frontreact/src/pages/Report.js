import {getProductsService} from '../services/product'
import { Chart } from '../components/Chart';
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

export const Report = ({searchKey}) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProductsService(searchKey).then((data)=>{
      setProducts(data)
    }
    )
  }, [searchKey])

  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id='stockUnits'/></h1>
        <Chart data={products}/>
      </div>
    </section>
  );
};
