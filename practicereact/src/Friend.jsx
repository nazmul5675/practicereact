const Friend = ({ friend }) => {
    const { name, phone, email } = friend;
    return (
        <div className="card">
            <h3 className="card">Name : {name} </h3>
            <h3 className="card">phone :  {phone}</h3>
            <h3 className="card">
                email :{email}
            </h3>
        </div>
    );
};

export default Friend;