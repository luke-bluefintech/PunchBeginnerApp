import './Table.css';

function Table() {
    return (
        <table>
            <tr>
                <th>Project</th>
                <th>Goal Amount</th>
                <th>Amount Reached</th>
                <th>Want to Support?</th>
            </tr>
            <tr>
                <td>Ilana</td>
                <td>800</td>
                <td>546</td>
                <td><button type="pledge">Pledge</button></td>
            </tr>
            <tr>
                <td>Luke</td>
                <td>1200</td>
                <td>753</td>
                <td><button type="pledge">Pledge</button></td>
            </tr>
        </table>
    )
};

export default Table;