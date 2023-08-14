
const Table = ({ columns, data }) => {
    return (
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    {columns.map(({ name }) => (
                        <th key={name} scope="col">{name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((data, rowIndex) => (
                    <tr key={data.id}>
                        {columns.map(({ dataIndex, render }, index) => (
                            <td key={index}>
                                {render ? render(data[dataIndex], data, rowIndex) : data[dataIndex]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
