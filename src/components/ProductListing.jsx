import { actionTypes } from '../utils/action'

const metricLabels = {
    salesImpacted: 'Sales impacted',
    averageSales: 'Average sales',
    notSold: 'Not sold',
}

export function ProductListing(props) {
    const { dispatch, products, selectedProductId, selectedMetric } = props

    return (
        <section className="panel product-panel" aria-labelledby="products-heading">
            <div className="panel-heading">
                <div>
                    <p className="eyebrow">CATALOG</p>
                    <h2 id="products-heading">Products</h2>
                </div>
                <span className="count-chip">{products.length} items</span>
            </div>
            <div className="product-grid">
                {products.map((product) => {
                    const isSelected = selectedProductId === product.id
                    const metricValue = product.productSalesData[selectedMetric] ?? 0

                    return (
                        <button
                            className={`product-card`}
                            key={product.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => dispatch({ type: actionTypes.CHOOSE_PRODUCT, payload: { productId: product.id } })}
                            style={{ backgroundColor: isSelected ? metricValue > 30 ? metricValue >= 50 ? "#9ceeb5" : "#ecd591" : "#f18c93" : "#ffffff" }}
                        >
                            <span className="product-card-top">
                                <span className="product-icon">{product.name.slice(-1).padStart(2, '0')}</span>
                                <span className={`selection-indicator${isSelected ? ' active' : ''}`} aria-hidden="true">✓</span>
                            </span>
                            <span className="product-name">{product.name}</span>
                            <span className="product-category">{product.category}</span>
                            <span className="product-card-bottom">
                                <span className="product-price">{product.price}</span>
                                <span className="product-metric">{metricLabels[selectedMetric]} <strong>{metricValue}</strong></span>
                            </span>
                        </button>
                    )
                })}
            </div>
        </section >
    )
}
