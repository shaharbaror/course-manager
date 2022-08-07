import React, { useEffect } from "react";

import Bar from "./Bar";
import styles from "./BarManager.module.css";

import { useSelector, useDispatch } from "react-redux";
import { statsAction } from "../../store/stats-slice";

const BarManager = () => {

    const dispatch = useDispatch();
    const stats = useSelector(state => state.stats);

    const contentChangeHandler = (amount) => {
        dispatch(statsAction.newContent(amount));
    };
    const speedChangeHandler = (amount) => {
        dispatch(statsAction.newSpeed(amount));
    };
    const priceChangeHandler = (amount) => {
        dispatch(statsAction.newPrice(amount));
    };

    useEffect(()=> {
        const price = stats.content*0.6 + stats.speed*0.4;
        dispatch(statsAction.changePrice(price));
    },[stats]);
  return (
    <div className={styles["bar_row"]}>
      <div className={styles.bars}>
        <Bar value={stats.content} onChange={contentChangeHandler} id="content" >Content</Bar>
      </div>
      <div className={styles.bars} >
        <Bar value={stats.speed} onChange={speedChangeHandler} id="speed">Speed</Bar>
      </div>
      <div className={styles.bars} >
        <Bar value={stats.price} onChange={priceChangeHandler} ids="price">Price</Bar>
      </div>
    </div>
  );
};

export default BarManager;
