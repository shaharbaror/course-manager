import React from 'react';

import styles from './Bar.module.css';


const Bar = (props) => {

    const onChangeHandler = (event) => {
        props.onChange(event.target.value);
    }
    
    return <React.Fragment>
        <label htmlFor={props.id} >{props.children}</label>
        <input className={styles.input} type="range" onChange={onChangeHandler} value={props.value} max={100}  ids={props.id} />
    </React.Fragment>
}

export default Bar;