import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addDish} from "../../store/Actions";
import './AddDishes.css'

const dishType = ['Veg', 'Non-Veg'];

const AddDishes = (props) => {
    const [dishProp, setDishProp] = useState({name: '', dishType: ''});

    const dishChange = (e, prop) => {
        let obj = {};
        obj[prop] = e.target.value;
        setDishProp(prevState => {
            return {...prevState, ...obj}
        });
    };

    const addDish = () => {
        console.log('dishProp', dishProp);
        const val = Object.keys(dishProp).every(ele => dishProp[ele] !== '')
        if(val) {
            props.addDish(dishProp);
            setDishProp({name: '', dishType: ''})
        } else {
            alert('Please fill all the entries')
        }
    };


    return (
        <div className='form'>
            <h2 style={{ textAlign: 'center', justifyContent: 'flex-start'}}>Add Dish</h2>
            <input onChange={(e) => dishChange(e, 'name')} placeholder='Dish Name' className='textInput' value={dishProp.name ? dishProp.name : ''}/>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {
                    dishType.map(dish => {
                        return(
                            <label>
                                <input type="radio" name="dishType" value={dish} checked={dish === dishProp.dishType} onChange={e => dishChange(e, 'dishType')} /> {dish}
                            </label>
                        )
                    })
                }
            </div>
            <button className='addBtn' onClick={addDish}>
                Submit
            </button>
        </div>
    );
}

export default connect(null, { addDish })(AddDishes);