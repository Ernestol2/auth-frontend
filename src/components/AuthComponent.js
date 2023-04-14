import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const token = cookies.get("TOKEN");



export default function AuthComponent() {
  const [message, setMessage] = useState();
  const [products, setProducts] = useState();

  const PRODUCTS_URL = 'https://dummyjson.com/products'

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://authentication-app-mern-railway-production.up.railway.app/auth-endpoint",
      headers: {
      Authorization: `Bearer ${token}`
      }
    };

    axios(configuration)
      .then((result) => setMessage(result.data.message))
      .catch((err) => err = new Error())  

    fetch(PRODUCTS_URL)
      .then(res => res.json())
      .then(data => { 
        setProducts(data.products)
      })
      .catch((e) => e = new Error())
  }, []);

  return (
    <div className="auth-page text-light">
      {message? (<h1 className='text-center'>Productos</h1>) : (null)}
      <div className='auth-page-container'>
        <div className='auth-sidebar col-4 col-lg-2' >
          <div>
            <h1>Smartphones</h1>
            <h6>30 resultados</h6>
          </div>
          <div>
            <input type="search"/>
            <button>Buscar</button>
          </div>
          <div>
            <h2>Modelos</h2>
            <p>Note 9 (15)</p>
            <p>Note 9 Pro(12)</p>
            <p>Note 10 (128gb) (5)</p>
          </div>
          <div>
            <h2>Memoria</h2>
            <p>Menos 128 GB</p>
            <p>256 GB o mas</p>
          </div>
          <div>
            <h2>Ubicacion</h2>
            <p>RM (Metropolitana)</p>
            <p>Bio Bio</p>
            <p>Valparaiso</p>
            <p>Coquimbo</p>
          </div>
          <div>
            <h2>Precio</h2>
            <p>Hasta $100.000</p>
            <p>$100.000 a $150.000</p>
            <p>Mas de $150.000</p>
          </div>
          <div>
            <h2>Memoria RAM</h2>
            <p>4 GB</p>
            <p>6 GB</p>
            <p>8 GB o mas</p>
          </div>
          <div>
            <h2>Compañia</h2>
            <p>Liberado</p>
            <p>Movistar</p>
            <p>Wom</p>
          </div>
        </div>
        <div className='prueba col-sm-11 col-md-8 col-lg-6'>
        { products?.map(({ brand, title, price, id, thumbnail }) => (
            <div key={id} className='auth-products' >
              <div>
                <img className='product-img m-2' src={thumbnail} alt={title} />
              </div>
              <div className='auth-product'>
                <h5>{title}</h5>
                <p>Vendido por {brand}</p>
                <h4>${price}</h4>
                <p>en 6 cuotas $ {Math.ceil(price/6)} sin interes</p>
                <p>Envio Gratis</p>
                <p>Articulo Nuevo</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

          
        

// eslint-disable-next-line no-lone-blocks
{/*
<div>
        </div>
        <div>
          { products?.map(({ brand, title, price, id, thumbnail }) => (
            <div key={id}>
              <img className='product-img' src={thumbnail} alt={title} />
            </div>
          ))}
        </div>
*/}
  

        
    
