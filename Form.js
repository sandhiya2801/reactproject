import React, {useState} from 'react';


function Form(props) {
    const order_detail={name:'',email:'',phone:'',address:'',order:''};
    const [inputValue, setInputValue] = useState(order_detail);    

    const handleinput = (e) => {
        const {name , value} = e.target;
        setInputValue({...inputValue , [name]:[value]});
       
      }

  return (
    <section style={{backgroundColor:"white"}}>
        <div>
            <form style={{border:"3px solid black"}}
            onSubmit={
                event=>{
                    event.preventDefault();
                    props.add(inputValue);
                    setInputValue(order_detail); 
                }
            }>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' value={inputValue.name} onChange={handleinput} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' name='email'value={inputValue.email} onChange={handleinput} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type='number' name='phone'value={inputValue.phone} onChange={handleinput} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type='text' name='address' value={inputValue.address} onChange={handleinput}/>
                </div>
                <div>
                    <label>order:</label>
                    <input type='text' name='order'value={inputValue.order}  onChange={handleinput}/>
                </div>
                <div style={{textAlign:"center",padding:"20px"}}>
                    <button >Place Order</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Form