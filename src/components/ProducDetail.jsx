import { CustomSlider } from './CustomSlider';

export function ProducDetail(props) {
    const { product } = props

    return (
        <section className="panel detail-panel" aria-labelledby="detail-heading">
            {product ? (
                <>
                    <div className="panel-heading detail-heading">
                        <div>
                            <p className="eyebrow">SELECTED PRODUCT</p>
                            <h2 id="detail-heading">{product.name}</h2>
                        </div>
                        <span className="product-icon detail-icon">{product.name.slice(-1).padStart(2, '0')}</span>
                    </div>
                    <p className="detail-copy">Sales performance at a glance</p>
                    <div className="metric-list">
                        {Object.entries(product.productSalesData).map(([metric, value]) => (
                            <CustomSlider key={metric} metric={metric} value={value} />
                        ))}
                    </div>
                </>
            ) : (
                <p className="empty-state">Select a product to view its performance.</p>
            )}
        </section>
    )
}
