import './index.css'

export default function Card() {

    interface Product {
        id: number;
        title: string;
        price: number; // в рублях
        inStock: boolean;
    }

    const products: Product[] = [
        { id: 1, title: "Футболка", price: 999, inStock: true },
        { id: 2, title: "Кроссовки", price: 5999, inStock: false },
        { id: 3, title: "Шапка", price: 799, inStock: true }
    ];


    return (
        <div >
            {products.map(el => {
                return (
                    <div className="border text-center mb-5 p-3 w-200 m-auto">
                        <h3>{el.title}</h3>
                        <p>{el.price}</p>
                        <span className="stock-status">{el.inStock ? 'В наличии' : 'Не в наличии'}</span> 
                    </div>
                )
            })}
        </div>
    )
}