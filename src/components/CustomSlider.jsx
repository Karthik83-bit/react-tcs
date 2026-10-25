const metricLabels = {
    salesImpacted: 'Sales impacted',
    averageSales: 'Average sales',
    notSold: 'Not sold',
}

export function CustomSlider(props) {
    const { metric, value } = props
    return (
        <div className="metric-row">
            <div className="metric-label-line">
                <label htmlFor={`metric-${metric}`}>{metricLabels[metric]}</label>
                <strong>{value}%</strong>
            </div>
            <input
                className="metric-range"
                type="range"
                value={value}
                id={`metric-${metric}`}
                name={metric}
                min="0"
                max="100"
                disabled
                aria-label={`${metricLabels[metric]}: ${value}%`}
            />
        </div>
    )
}
