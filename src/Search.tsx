import './index.css'
import { Price } from './Price';

export default function Search() {

    interface Product {
        id: number;
        title: string;
        price: number;
        inStock: boolean;
    }

    const products: Product[] = [
        { id: 1, title: "Футболка", price: 999, inStock: true },
        { id: 2, title: "Кроссовки", price: 5999, inStock: false },
        { id: 3, title: "Шапка", price: 799, inStock: true }
    ];

    const avalibale = products.filter(p => !p.inStock);


    return (
        <div className='border w-200 text-center mt-20 m-auto'>
            <ul>
                {/* Товары в наличии */}
                
                {products
                    .filter(el => el.inStock)
                    .map(el => (
                        <li key={el.id} className='mb-2'>
                            <h3>{el.title}</h3>
                            <p>Цена: {Price(el.price)}</p>
                        </li>
                    ))
                }

                {/* Товары не в наличии */}

                {avalibale ? avalibale.map(el => (
                    <li key={el.id} className='mb-2'>
                        <h3>Товара "{el.title}" нет в наличии!</h3>
                        <p>Цена: <del>{Price(el.price)}</del></p>
                    </li>
                )) : null}
            </ul >
        </div >
    )
}