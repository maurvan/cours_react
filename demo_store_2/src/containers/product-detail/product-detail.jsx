import { useSelector } from "react-redux";
import PriceDisplay from "../../components/price-display/price-display";
import style from './product-detail.module.css';

const ProductDetail = () => {

    const selectedProduct = useSelector(s => s.productCategory.selectedProduct)

    if(selectedProduct === null) {
        return (
            <div>
                <p>Pas de produit selectionné</p>
            </div>
        )
    }

    return (
        <>
            <h2>Detail du produit</h2>
            <div className={style.card}>
                <h4>{selectedProduct.name}</h4>
                <p>< PriceDisplay value={selectedProduct.price} /></p>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <p className={style.desc}>{selectedProduct.description}</p>
            </div>
        </>
    )
}

export default ProductDetail;