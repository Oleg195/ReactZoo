import { event } from 'jquery'
import React, { useState,useEffect } from 'react'
import './Order.css'
import {setDoc,doc,onSnapshot,updateDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { RadioButton } from "./RadioButton";
import {db} from '../Firebase'

export default function Order(props) {

    const [operatorNum,setOperatorNum]=useState("")
    const [telNum,setTelNum]=useState("")
    const [errOperatorNum,setErrOperatorNum]=useState("none")
    const [errTelNum,setErrTelNum]=useState("none")
const [history,setHistory]=useState({})
const [userEmail,setUserEmail]=useState(props.userEmail)
const [userId,setUserId]=useState(props.userId)
const [paymentMethod, setPaymentMethod] = useState("COD");

const radioChangeHandler = (e) => {
  setPaymentMethod(e.target.value);
};
    

const telChange = (e)=>{
let tel =e.target.value
let newTel = tel.slice(0,7)
setTelNum(newTel)
}
const opChange = (e)=>{
    let tel =e.target.value
    let newTel = tel.slice(0,3)
    setOperatorNum(newTel)
    }


    async function setOrder(object) {
        await setDoc(doc(db, userEmail, "history"), object);
        
      };

      async function setStore(changedObject) {
        await setDoc(doc(db, userEmail, "cart"), changedObject);
        
      };
     

      async function updateHistory(newArray) {
        await updateDoc(doc(db, userEmail, "history"),{array:newArray});
        
      };
   
const auth=getAuth()
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        
  
  
            onSnapshot(doc(db, user.email, "history"), (doc) => {

                let historyS=doc.data()
                setHistory(historyS)
                
                
                    })
                
  
  
        } else {
          console.log("giris yoxdur")
  
        }
      })













  

  


    
}, [])


const orderFinish = (e)=>{
    e.preventDefault()
   
  
    let d=new Date()
    let day= d.getDate()
    let month =d.getMonth()
    month=month+1
    let year = d.getFullYear()
    let newDate =`${day}.${month}.${year}`
    


    if(telNum!==""&&operatorNum!==""){
        props.success()
    


        if(history===undefined){
          
            setOrder({array:[{ date:newDate,
                products:[...props.products],
                phone:`(+994) (${operatorNum}) ${telNum} `}]
               
            })
            
          
           
        }else{
           
            updateHistory([...history.array,{ date:newDate,
                products:[...props.products],
                phone:`(+994) (${operatorNum}) ${telNum} `}])
                
        }
           

        setStore({cartdata:[]})
        props.hideOrderBody()



       
    }else{
  if(telNum===""){
setErrTelNum("3px solid red")
  } else{
    setErrTelNum("none")

  }
if(operatorNum===""){
      setErrOperatorNum("3px solid red")
  }else{
    setErrOperatorNum("none")

  }
    }


}






    return (
        <div className="order animate__animated animate__fadeInDownBig " style={{display:props.show}}>
        <div className="order-body">

<h2 className='white'>Заказать</h2>
<h3 className='white' >Ваше Имя:</h3>
<input type="text" alt="Имя" style={{width:'250px'}}/>
<h3 className='white' >Ваша Фамилия:</h3>
<input type="text" alt="Фамилия" style={{width:'250px'}}/>
<br/>
<h3 className='white' >Ваш телефон:</h3>
<div className="tel-input">
<form onSubmit={orderFinish}>
    <div className="order-inputs">
<input type="text" id="country-number"  defaultValue="+997" />
<input type="number" id="operator-number"  placeholder="050" value={operatorNum}  onChange={opChange} style={{border:errOperatorNum}}/>
<input type="number" id="tel" placeholder="9993366"   value={telNum} onChange={telChange} style={{border:errTelNum}}/>
<br/>
<h3 className='white' >Ваш город:</h3>
<select className='centre'  style={{width:'250px',align: 'center'}}>
  <option>Абай</option>
  <option>Акколь</option>
  <option>Аксай</option>
  <option>Аксу</option>
  <option>Актау</option>
  <option>Актобе</option>
  <option>Алга</option>
  <option>Алматы</option>
  <option>Арал</option>
  <option>Аркалык</option>
  <option>Арыс</option>
  <option>Астана</option>
  <option>Атбасар</option>
  <option>Атырау</option>
  <option>Аягоз</option>
  <option>Байконур</option>
  <option>Балхаш</option>
  <option>Булаево</option>
  <option>Державинск</option>
  <option>Ерейментау</option>
  <option>Есик</option>
  <option>Есиль</option>
  <option>Жанаозен</option>
  <option>Жанатас</option>
  <option>Жаркент</option>
  <option>Жезказган</option>
  <option>Жем</option>
  <option>Жетысай</option>
  <option>Житикара</option>
  <option>Зайсан</option>
  <option>Зыряновск</option>
  <option>Казалинск</option>
  <option>Кандыагаш</option>
  <option>Капшагай</option>
  <option>Караганды</option>
  <option>Каражал</option>
  <option>Каратау</option>
  <option>Каркаралинск</option>
  <option>Каскелен</option>
  <option>Кентау</option>
  <option>Кокшетау</option>
  <option>Костанай</option>
  <option>Кулсары</option>
  <option>Курчатов</option>
  <option>Кызылорда</option>
  <option>Ленгер</option>
  <option>Лисаковск</option>
  <option>Макинск</option>
  <option>Мамлютка</option>
  <option>Павлодар</option>
  <option>Петропавловск</option>
  <option>Приозёрск</option>
  <option>Риддер</option>
  <option>Рудный</option>
  <option>Сарань</option>
  <option>Сарканд</option>
  <option>Сарыагаш</option>
  <option>Сатпаев</option>
  <option>Семей</option>
  <option>Сергеевка</option>
  <option>Серебрянск</option>
  <option>Степногорск</option>
  <option>Степняк</option>
  <option>Тайынша</option>
  <option>Талгар</option>
  <option>Талдыкорган</option>
  <option>Тараз</option>
  <option>Текели</option>
  <option>Темир</option>
  <option>Темиртау</option>
  <option>Туркестан</option>
  <option>Уральск</option>
  <option>Усть-Каменогорск</option>
  <option>Учарал</option>
  <option>Уштобе</option>
  <option>Форт-Шевченко</option>
  <option>Хромтау</option>
  <option>Шалкар</option>
  <option>Шар</option>
  <option>Шардара</option>
  <option>Шахтинск</option>
  <option>Шемонаиха</option>
  <option>Шу</option>
  <option>Шымкент</option>
  <option>Щучинск</option>
  <option>Экибастуз</option>
  <option>Эмба</option>
</select>
<h3 className='white' >Ваш адресс:</h3>
<input type="text" alt="Адресс" style={{width:'250px'}}/>
<h3 className='white' >Способ оплаты:</h3>

<div className="radio-btn-container" style={{ display: "flex" }}>
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={paymentMethod === "QuickPay"}
          label="Безналичный"
          value="QuickPay"
        />

        <RadioButton
          changed={radioChangeHandler}
          id="2"
          isSelected={paymentMethod === "COD"}
          label="Наличный"
          value="COD"
        />
      </div>
      {paymentMethod === "QuickPay" && (
        <input
          style={{ marginTop: "10px", width:'250px' }}
          type="text"
          placeholder="Введите номер карты"

        />)}
</div>
<br/>
<div className="order-buttons">
<input type="submit" id ="submit"value="Заказать" />
<input type="button" id ="cancel"value="Отменить" onClick={props.hideOrderBody}/>
</div>
</form>
</div>
        </div>
        </div>
    )
}
