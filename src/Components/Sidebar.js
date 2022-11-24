import React, {Component} from 'react'
import './Sidebar.css'
// import {Link} from 'react-router-dom'


class Sidebar extends Component{
   
    constructor(props){
        super(props)
        this.changeClass=this.changeClass.bind(this)
        this.state={Animals:"Animals",Fish:"Fish",Feed:"Feed",Birds:"Birds", Accessories:"Accessories",all:"active1",logout:""}
    }

     changeClass=(e)=>{
this.setState({Animals:"Animals",Fish:"Fish",Feed:"Feed",Birds:"Birds",Accessories:"Accessories",all:"all"})  
this.setState({[e.target.className]:"active1"})    

this.props.changeCategory(e.target.className)
    }
render(){
    return (
        <div className="sidebar  animate__animated animate__zoomInUp animate__delay-0.5s">
            <div className="sidebar-body">
                <div className="sidebar-content">
                    <div className="caption">
                    {/* <i className="fas fa-bars"></i> */}
                    {/* <img src={Shopping} style={{width:"30px"}} alt=""/> */}
                    <div className="icon"><ion-icon name="grid"></ion-icon></div>
                       <div className="catagory-name"> <h2>Разделы</h2> </div>
                    </div>
                    <div className="spans">

                    <span className={this.state.Animals}  onClick={this.changeClass.bind(this)}>Животные</span>

                    <span className={this.state.Fish}  onClick={this.changeClass.bind(this)}>Рыбы</span>
                    
                    <span className={this.state.Birds}  onClick={this.changeClass.bind(this)}>Птицы</span>

                    <span className={this.state.Accessories}  onClick={this.changeClass.bind(this)}>Аксессуары</span>

                    <span className={this.state.Feed}  onClick={this.changeClass.bind(this)}>Корма</span>


                    

                    <hr></hr>
                    <span className={this.state.all}  onClick={this.changeClass.bind(this)}>Все</span>
                    {/* <span className={this.state.logout}  onClick={this.changeClass.bind(this)}><span className="logout"><Link to="/">Çıxış et</Link></span> <i className="fas fa-sign-out-alt"></i> </span> */}


                    </div>
                   
                </div>
            </div>
        </div>
    )
}
}

export default  Sidebar;