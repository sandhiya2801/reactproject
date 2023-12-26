import './style.css';
import contact from './image/contact.jpg'
import Header from './header.js'


function Contact(props){
  
    const {friends}=props;
    const nam = friends.map((friend_mad , i)=>{
        return(
                <tr key={i}>
                   <td>{i+1}</td>
                   <td >{friend_mad.name}</td>
                   <td >{friend_mad.Phone_number}</td>
                   <td >{friend_mad.Email}</td>
                </tr>
        );
    });
   const {name}=props;
  const conD = name.map((contact_detail) => {
        return (
            <div>
                  
                  <div>
                  <p>phone number:{contact_detail.Phone_number}</p>
                <p>email:{contact_detail.email}</p>
                <p>address:{contact_detail.address}</p>
                  </div>
                
            </div>


        );
      });

    return(
        <section>
            <Header />
            <p className=''>Contact Details</p>
            <div className="con">
                <div className='con2'>
                   <img src={contact} alt='contact image'/>
                </div>
                <div className='con2'>
                    {conD}
                </div>
            </div>
            <div className='tab'>
                <table>
                    <tr>
                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>Phone number</th>
                        <th>Email</th>
                    </tr>
                    {nam}
                </table>
            </div>


        </section>
        );
}
export default Contact;