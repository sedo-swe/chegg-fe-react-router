function Roster({ rosters, detailed}) {
    if (detailed) {
        const rows = rosters.map(({id, firstName, lastName, location}, index) => (
            <tr key={index}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{location}</td>
            </tr>
        ));
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
    else {
        const rows = rosters.map(({firstName}, index) => (
            <li key={index}>{firstName}</li>
        ));
        return (
            <ol>{rows}</ol>
        );
    }
}

export default Roster;