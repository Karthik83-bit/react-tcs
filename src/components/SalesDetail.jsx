import { actionTypes } from "../utils/action";

export function SalesDetail(props) {
    const { dispatch, selectedMetric } = props;

    return (
        <section className="panel metric-filter-panel" aria-labelledby="metric-filter-heading">
            <p className="eyebrow">CUSTOMIZE VIEW</p>
            <h2 id="metric-filter-heading">Metric focus</h2>
            <p className="detail-copy">Choose which metric to highlight on each product card.</p>
            <label className="select-label" htmlFor="metric-select">Display metric</label>
            <select
                className="metric-select"
                name="metric"
                id="metric-select"
                value={selectedMetric}
                onChange={(event) => dispatch({
                    type: actionTypes.UPDATE_PRODUCT_SALES_DATA,
                    payload: { value: event.target.value },
                })}
            >
                <option value="salesImpacted">Sales impacted</option>
                <option value="averageSales">Average sales</option>
                <option value="notSold">Not sold</option>
            </select>
            <div className="insight-card">
                <span className="insight-icon" aria-hidden="true">↗</span>
                <div>
                    <strong>Quick insight</strong>
                    <p>Use the selector to compare the same metric across products.</p>
                </div>
            </div>
        </section>
    )
}
