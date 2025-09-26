import "../styles/Table.css";

function Table({ tabularData = [] }) {
    if(tabularData.length === 0) {
        return (
            <p className="no-data">No data available</p>
        )
    }

    return (
        <table className="stats-table">
            <thead>
                <tr className="header-row">
                    <th className="header-cell">Rating</th>
                    <th className="header-cell">Total Problems Solved</th>
                    <th className="header-cell">Solved by Myself</th>
                    <th className="header-cell">Solved By Editorial</th>
                </tr>
            </thead>
            <tbody>
                {
                    tabularData.map((record) => (
                        <tr className="data-row" key={record.rating}>
                            <td className="data-cell">{record.rating}</td>
                            <td className="data-cell">{record.totalProblemsSolved}</td>
                            <td className="data-cell">{record.myselfPercentage}</td>
                            <td className="data-cell">{record.editorialPercentage}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Table;