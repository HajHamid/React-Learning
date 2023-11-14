

function Table({ data, config, keyFn }) {

    const renderTableHeader = config.map((column) => {
        return <th key={column.label} className="p-3">{column.label}</th>
    })

    const renderTableRow = data.map((row) => {
        const renderTableCell = config.map((column) => {
            return (
                <td className="p-2" key={column.label}>{column.render(row)}</td>
            )
        })

        return <tr className="border-b" key={keyFn(row)}>{renderTableCell}</tr>
    })

    return (
        <div>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">{renderTableHeader}</tr>
                </thead>

                <tbody>{renderTableRow}</tbody>
            </table>
        </div>
    )
}

export default Table