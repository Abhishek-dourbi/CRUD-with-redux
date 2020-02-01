import React, {useState} from 'react';
import {connect} from 'react-redux';
import { editDish, deleteDish } from "../../store/Actions";
import './ShowDishes.css';

const dishType = ['Veg', 'Non-Veg'];

const RenderElement = ({ isEdit, currentIndex, ele, onChangeDish, index }) => {
    if(isEdit && currentIndex === index) {
        return (
            <>
            <input defaultValue={ele.name} className='textInput' onChange={(e) => onChangeDish(e,'name')}/>
            {
                dishType.map(dish => {
                    return(
                        <label className='radio'>
                            <input type="radio" name="dishType" value={dish} defaultChecked={dish === ele.dishType} onChange={e => onChangeDish(e, 'dishType')} /> {dish}
                        </label>
                    )
                })
            }
            </>
        )
    } else {
        return (
            <>
                <p className='list-item'>{ele.name}</p>
                <p className='list-item-type'>{ele.dishType}</p>
            </>
        )
    }
}

const ShowDishesList = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [dishProp, setDishProp] = useState({name: '', dishType: ''});
    const editDish = (ele, index) => {
        setDishProp(ele);
        setIsEdit(true);
        setCurrentIndex(index);
    }

    const deleteDish = (index) => {
        const arr = props.data.dishes;
        arr.splice(index, 1)
        props.deleteDish(arr);
    }

    const onChangeDish = (e, prop) => {
        let obj = {};
        obj[prop] = e.target.value;
        setDishProp(prevState => {
            return {...prevState, ...obj}
        });
    }

    const saveEditDish = (index) => {
        const arr = props.data.dishes;
        arr[index] = dishProp;
        props.editDish(arr);
        setIsEdit(false);
    };

    return (
        <div>
            {
                props.data.dishes.map((ele, index) => {
                    return (
                        <div className='list-container'>
                            <RenderElement index={index} isEdit={isEdit} currentIndex={currentIndex} ele={ele} onChangeDish={onChangeDish}/>
                            <div>
                            <button className='edit-button' onClick={() => {
                                if(isEdit && currentIndex === index) {
                                    saveEditDish(index)
                                } else {
                                    editDish(ele, index)
                                }
                            }}>
                                {isEdit && currentIndex === index ? 'Save' : 'Edit'}
                            </button>
                            <button className='delete-button' onClick={() => {
                                if(isEdit) {
                                    setIsEdit(false)
                                } else {
                                    deleteDish(index)
                                }
                            }}>
                                {isEdit ? 'Cancel' : 'Delete'}
                            </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const ShowDishes = (props) => {
    return (
        <div className='show-dishes-container'>
            <h2 className='show-dishes-heading'>All Dishes</h2>
            {props.dish.dishes.length > 0 ?
                <ShowDishesList {...props} data={props.dish}/>
                :
                <div className='no-data'>
                    No dish added
                </div>
            }
        </div>
    );
}

const mapStateToProps = ({dish}) => ({
    dish
})

export default connect(mapStateToProps, { editDish, deleteDish })(ShowDishes);