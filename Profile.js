

function Profile(props){
    const {userName}=props;
    return(
        <div className="pro">
            <h4>NAME:{userName}</h4>
            <h4>PHONE NO:</h4>
            <h4>EMAIL ID:</h4>
            <h4>ADDRESS:</h4>


        </div>
        
    );
}
export default Profile;