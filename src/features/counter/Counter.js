import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,deDecrement } from '../../ations/Actions';

import styles from './Counter.module.css';

export function Counter() {
const myState = useSelector(state => state.myState)
const dispatch = useDispatch()
  return ( 
    <div>
   
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
         onClick={()=>dispatch(deDecrement())}
        >
          -
        </button>
        <span className={styles.value}> {myState}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={()=>dispatch(incNumber())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          
        />
        <button
          className={styles.button}
         
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
        
        >
          Add Async
        </button>
        
      </div>
    </div>
  );
}
