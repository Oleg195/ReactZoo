import React from 'react'
import { NavLink, Route, useHistory ,useLocation } from 'react-router-dom';


export default function Navbar(props) {
    const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  let history = useHistory();

const out = () =>{
    props.accountOut()
}


const signİn=()=>{
  history.push("/login");

}
    return (
        <div>
        <div className="navbar-body ">
          <div className="links">
            <NavLink className={splitLocation[1] === "products" ? "active" : "navlink"} to="/products" exact>Товары</NavLink>
            <NavLink className={splitLocation[1] === "cart" ? "active" : "navlink box-navlink"} to="/cart" exact><i className="fas fa-shopping-cart"></i><span className="order-count">{props.orderCount}</span>  <span className="box">Корзина</span> </NavLink>
            {props.out?(<span className="navlink quit" onClick={out} >Выход</span>):(<span className="navlink quit" onClick={signİn} >Войти</span>)}
          </div>
        </div>
        </div>
    )
}
