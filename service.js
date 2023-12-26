import Header from './header.js'
// import Pizza from './image/cookly.webp';
// import Ima from './image/pepperoni.jpeg';
// import Pic from './image/tomatoes.jpg';
// import Pc from './image/chicken.webp';
// import Ul from './image/mashroom pizza.jpg';
import './App.css';

const TableBody =(props)=>{

     const {menuList} = props;

      const rows = menuList.map((menus , i)=>{
        return (<tr key={i}><td>{menus.title}</td></tr>)
      })

    return(
        <tbody>{rows}</tbody>
    )
}


function Service(){

    const menuList= [{
        title : 'Cookly Pizzass',
        price_regular:'250'
       },{
        title:'Pepperoni olive pizza',
        price_regular:'350'},{
        title:'tomatoes pizza',
        price_regular:'350'},
      ];

    return(
        <div>
            <Header />
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Rate</th>
                    <th>Order</th>
                </tr>
                <TableBody menuList={menuList} />

            </table>

            <div className='row'>
              <div className='col-md-5'>
                <p>lorem dxg gdgfg dfd dgdg</p>
              </div>
              <div className='col-md-7'>
                <p>lorem dxg gdgfg dfd dgdg</p>
              </div>  
            </div>
        </div>
    );
}

export default Service;