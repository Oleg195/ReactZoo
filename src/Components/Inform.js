import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Inform.css'
export class Inform extends Component {
  render() {
    return (

<div  style={{ backgroundPosition: "centre", display:"flex"}}>
        <div className="fon Htext" style={{ backgroundPosition: "centre", display:"flex"}}>
          <img src="https://vozmidruga38.ru/wp-content/uploads/2019/11/logo-Druzya-dlya-dushi-v-png-prozrach-fon.png" width="500" height="450" />
          <p className='textp'
            style={{
              width: "65%",
              height: "65%",
              textAlign:"center",
            }}
          >
            Зоомагазин "Друзья для души" предлагает широкий ассoртимент
            качественных и сертифицированных кормов, а также других
            товары.<br/>Мы реализуем игрушки, аксессуары и лакомства для ваших животных.<br/>
            В нашем зоомагазине имеются товары для аквариумистики начиная от еды
            и оборудования для рыбок и заканчивая аквариумами и рыбками.<br/> 
            Мы в соц сетях:<br/>
<a href='#'>
<img src="https://phonoteka.org/uploads/posts/2021-04/1619706223_29-phonoteka_org-p-znachok-instagram-bez-fona-dlya-fotoshopa-29.png" width="45" height="30"/> 
</a> 
<a href='#'>
<img src="https://media.slid.es/uploads/182257/images/1392527/written1.png"  width="45" height="40"/> 
</a> 
<a href='#'>
<img src="https://pixy.org/src2/576/5761775.png"  width="45" height="40"/> 
</a> 
<a href='#'>
<img src="https://static.cdnlogo.com/logos/f/47/facebook-3.svg"  width="45" height="40"/> 
</a> 


{/* <a href='#'>
<img src=""  width="50" height="45"/> 
</a>  */}
<br/>
          <Link to="/products">Посмотреть товары</Link>
  
          </p> </div>

        </div>          
        



    )
  }
}

export default Inform