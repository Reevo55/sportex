import React from 'react'
import BasicFilters from './BasicFilters/BasicFilters'
import style from './Filters.module.css';
import BLight from '../../components/Button/ButtonLight'
import AdvancedFilters from './AdvancedFilters/AdvancedFilters';
import PriceRange from './PriceRange/PriceRange'

function Filters(props) {
    return (
        <div className={style.FilterContainer}>
            <AdvancedFilters 
                highestPriceClick={props.onclickHighestPrice}
                lowestPriceClick={props.onclickLowestPrice}
                highestOpinionClick={props.onclickHighestOpinion}
            />
            
            <BasicFilters onclick={props.catOnClick} categories={props.categories}/>

            <PriceRange 
                onMaxChange={props.onMaxChange}
                onMinChange={props.onMinChange}
                max={props.max}
                min={props.min}    
            />
            <div className={style.Buttons}>
        
                <div className={style.MarginTop}>
                    <BLight onclick={props.resetClick}>RESETUJ</BLight>
                </div>
            </div>
        </div>
    )
}

export default Filters
