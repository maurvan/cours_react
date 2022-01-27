import style from './ex02.module.css';
import PropTypes from 'prop-types';

const Product = ({nom, prix, promo}) => (
    // pas de code ici, donc c'est simple et on peut en faire une lambda et enlever le return
    <tr className={style.trPromo}>
        <td className={style.nomProduit}>
            {nom}
        </td>
        <td className={style.prixProduit}>
            < DisplayPrice value={prix} />
        </td>
        <td className={style.promo}>
            {(promo === true) ? 'promo' : ''}
        </td>
    </tr>
)

const DisplayPrice = (props) => {
    // un constructeur permettant de créer des objets pour formater des nombres en fonction de la locale
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    const prix = new Intl.NumberFormat('fr-BE', { style: 'currency', currency: 'EUR' }).format(props.value)

    return (
        <span>{prix}</span>
    )
}

DisplayPrice.propTypes = {
    value: PropTypes.number.isRequired
}

// on divise la table en autant de parties qu'on veut, ce qu'on trouve facile
const TableHead = (props) => (
    <thead className={style.tabHead}>
        <th>Nom du produit</th>
        <th colSpan={2}>Prix</th>
    </thead>
)

const ProductList = (props) => {
    const productsJSX = props.products.map(
        p => <Product key={p.id} {...p} />
    )

    return (
        <table className={style.tabPromo}>
            < TableHead />
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
    nom: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    promo: PropTypes.bool.isRequired
}

export default ProductList;