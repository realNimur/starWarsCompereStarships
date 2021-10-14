import React from 'react';
import './ListStarships.css';
import ItemStarship from "../ItemStarship/ItemStarship";

const ListStarships = ({listStarships,toggleToCompareList}) => {
    return (
        <div className="row">
            {listStarships && listStarships.map((item,index) => <ItemStarship
                key={index}
                name={item.name}
                model={item.model}
                toggleToCompareList={toggleToCompareList}
            />)}
        </div>
    );
};

export default ListStarships;