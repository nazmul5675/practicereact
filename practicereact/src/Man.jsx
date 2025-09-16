const Man = ({ man }) => {
    const { name, phone, email } = man;
    return (
        <div className="card">
            <h3>Name : {name} </h3>
            <h3>phone : {phone} </h3>
            <h3>
                email : {email}
            </h3>
        </div>
    );
};

export default Man;