import PriceDisplay from '../../components/price-display/price-display';
import style from './product-list.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct } from '../../store/actions/product-action';

const ProductListItem = (props) => (
    <li className={style.product} onClick={() => props.onSelected(props.id)}>
        <span className={style.name}>{props.name}</span>
        < PriceDisplay value={props.price} />
    </li>
)

const ProductList = () => {

    const products = useSelector(state => state.productCategory.products)
    const dispatch = useDispatch()

    const ProductsJSX = products.map(item => <ProductListItem {...item} key={item.id} onSelected={(id) => dispatch(selectProduct(id))} />)

    return (
        <div className={style.containerList}>
            <h2>Liste de produits</h2>
            <ul className={style.productList}>
                {ProductsJSX}
            </ul>
        </div>
    )
}

export default ProductList;