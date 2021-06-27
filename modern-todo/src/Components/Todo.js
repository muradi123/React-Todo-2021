import React from 'react'
import TodoList from './TodoList'
import { useEffect, useState, useRef} from 'react';
const Todo = () => {
    const inputRef = React.createRef();
    const [toggle, setToggle] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleFunc = (index) => {
          setActiveIndex(index);
          setToggle(!toggle);
    }
    const [value, setvalue] = useState()
    const [item, setItem] = useState([])

    const clickHnadler = () => {
        let inputStaticValue = inputRef.current.value;
        if(inputStaticValue.length > 0) {
          let listItems = [...item, inputStaticValue];
          setItem(listItems)
        }
        
        inputRef.current.value = '';
    };
      
    const InputText = event => {
        let  inputValue = event.target.value;
        setvalue(inputValue)
        console.log(value)
        setvalue()
    };
    
    const editItem = (e) => {
       
        let itemEdit = e.target.parentElement.parentElement.parentElement.firstChild;
        itemEdit.setAttribute("contenteditable", "true");
        itemEdit.style.border = "2px solid black"
        itemEdit.style.borderRadius = "5px"
        console.log(itemEdit)
    }
    
    const save = (e) => {
      let itemEdit = e.target.parentElement.parentElement.parentElement.firstChild;
      itemEdit.setAttribute("contenteditable", "false");
      itemEdit.style.border = "0px solid black"
      itemEdit.style.borderRadius = "5px"
      console.log(itemEdit)
    }

    const removeHandler = (e) =>{
        e.target.parentElement.parentElement.remove()
    }
    
    return (
    <div className="background_container">

        <div className="header_section">
          <input type="text"
            ref={inputRef}
            placeholder="Write your todo" 
            className="mainLoginInput"
            maxLength="25"
            value={value}
            onChange={InputText}
            required
            />
          <button className="btn-hover color-9" onClick={clickHnadler}>Add</button>
        </div>

        <div className="main_section">
        <ul>
                {
                  item.map((item, index)=>
                   <li key={index}><span className="list_content">{item}</span>
                     <span className="close_tag" >
                       <div  onClick={() => toggleFunc(index)} className="center_div">
                        { activeIndex === index && toggle ?  
                          <img style={{marginRight: 10}} src="https://img.icons8.com/material-outlined/24/000000/save.png"
                               onClick = {save}
                          />  
                          :  
                          <img style={{marginRight: 10}} src="https://img.icons8.com/material-sharp/24/000000/edit--v3.png"
                               onClick= {editItem}
                          />
                        }
                       </div>
                        <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" 
                            onClick={removeHandler}
                        /> 
                     </span>
                   </li>)
                }
                </ul>
        </div>
    </div>
    )
}

export default Todo
