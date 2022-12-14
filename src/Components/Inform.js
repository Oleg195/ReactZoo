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
            качественных и сертифицированных кормов, а также другие
            товары.<br/>Мы реализуем игрушки, аксессуары и лакомства для ваших животных.<br/>  <br/>
            В нашем зоомагазине имеются также товары для аквариумистики, начиная от еды
            и оборудования и заканчивая аквариумами для обитателей подводного мира.<br/> <br/> 
            Мы в соц.сетях:<br/>
            <div className='Pa'>
<a href='https://vk.com/olegus_gromus'>
<img src="https://avatars.yandex.net/get-music-user-playlist/34120/298221175.1002.45849/m1000x1000?1554117113635&webp=false" width="40" height="30" className='Pa'/> 
</a> 
<a href='https://mail.ru/?ysclid=laz537k34v562750109'>
<img src="https://media.slid.es/uploads/182257/images/1392527/written1.png"  width="40" height="30"/> 
</a> 
<a href='#'>
<img src="https://pixy.org/src2/576/5761775.png"  width="40" height="30"/> 
</a> 
<a href='https://www.facebook.com/profile.php?id=100005675358373'>
<img src="https://static.cdnlogo.com/logos/f/47/facebook-3.svg"  width="40" height="30"/> 
</a> 
</div>

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