import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <h1 className='header-text'>
                    Dishes
                </h1>
            </div>
        );
    }
}

export default Header;