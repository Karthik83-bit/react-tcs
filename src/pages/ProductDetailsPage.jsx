import { ProducDetail } from '../components/ProducDetail'
import { ProductListing } from '../components/ProductListing'
import { SalesDetail } from '../components/SalesDetail'

export function ProductDetailsPage(props) {
    const { state, dispatch, products } = props
    const selectedProduct = products.find((product) => product.id === state.productId)

    return (
        <div className="dashboard-page">
            <section className="page-heading">
                <div>
                    <p className="eyebrow">PERFORMANCE OVERVIEW</p>
                    <h1>Your product metrics</h1>
                    <p className="page-subtitle">Track sales performance across your catalog.</p>
                </div>
                <div className="date-chip"><span className="status-dot" /> Live data</div>
            </section>
            <div className="dashboard-grid">
                <ProducDetail product={selectedProduct} />
                <ProductListing
                    products={products}
                    dispatch={dispatch}
                    selectedProductId={state.productId}
                    selectedMetric={state.selectedMetric}
                />
                <SalesDetail dispatch={dispatch} selectedMetric={state.selectedMetric} />
            </div>
        </div>
    )
}
