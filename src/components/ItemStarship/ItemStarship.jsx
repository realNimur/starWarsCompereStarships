import React, {useState} from 'react';
import './ItemStar.css';

const ItemStarship = ({name, model, toggleToCompareList}) => {
    const [toggleAddAndRemoveButton, setToggleAddAndRemoveButton] = useState('add');
    return (
        <div className="col s12 m4 ">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    {toggleAddAndRemoveButton === 'add' &&
                    <a className="btn-floating halfway-fab waves-effect waves-light"
                       href={"#!"}
                       onClick={() => {
                           setToggleAddAndRemoveButton('remove');
                           toggleToCompareList(name,toggleAddAndRemoveButton);
                       }}
                    >
                        <i className="material-icons">add</i>
                    </a>
                    }
                    {toggleAddAndRemoveButton === 'remove' &&
                    <a className="btn-floating halfway-fab waves-effect waves-light"
                       href={"#!"}
                       onClick={() => {
                           setToggleAddAndRemoveButton('add');
                           toggleToCompareList(name,toggleAddAndRemoveButton);
                       }}
                    >
                        <i className="material-icons">remove</i>
                    </a>
                    }
                    <p>{model}</p>
                </div>
            </div>
        </div>
    )
        ;
};

export default ItemStarship;