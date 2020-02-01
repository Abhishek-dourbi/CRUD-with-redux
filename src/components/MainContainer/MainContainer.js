import React, {Component} from 'react';
import AddDishes from '../AddDishes/AddDishes';
import ShowDishes from '../ShowDishes/ShowDishes';
import './MainContainer.css';

class MainContainer extends Component {
    render() {
        return (
            <div className='main-container'>
                <div className='sub-container'>
                    <AddDishes />
                </div>
                <div className='vertical-line'>
                </div>
                <div className='sub-container'>
                    <ShowDishes />
                </div>
            </div>
        );
    }
}

export default MainContainer;