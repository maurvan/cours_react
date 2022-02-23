export const PRODUCT_SELECTION = 'product/selection' // -> la categorie/le type d'action (bonne pratique)

// Creation de méthode de générer les objects "action"
// -> une action est composée d'un type et potentiellement d'un payload (les données utiles)
export const selectProduct = (id) => ({
    type: PRODUCT_SELECTION,
    payload: id
})