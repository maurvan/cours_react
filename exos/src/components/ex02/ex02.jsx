import style from './ex02.module.css';
import PropTypes from 'prop-types';

const Product = (props) => {
    const {nom, prix, promo} = props;

    return (
        <tr>
            <td className={style.nomProduit}>
                {nom}
            </td>
            <td>
                € {prix}
            </td>
            <td className={style.promo}>
                {(promo === true) ? promo : ''}
            </td>
        </tr>
    )
}

const ProductList = (props) => {
    const productsJSX = props.products.map(
        p => <Product key={p.id} {...p} />
    )

    return (
        <table>
            <tbody>
                {productsJSX}
            </tbody>
        </table>
    )
}

ProductList.defaultProps = {
    products: []
}

ProductList.propTypes = {
    nom: PropTypes.string,
    prix: PropTypes.number
}

export default ProductList;