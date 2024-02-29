import React from 'react';
import styles from "./Team.module.css";
export default function Team() {
  return (
    // <center>
    <div classNameName={styles.team}>
        <div className={styles.card} >
  <img src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=800" className={styles.top} alt="..."/>
  <div className={styles.body}>
    <h5 className="card-title">Developer - 1</h5>
    <p className="card-text">Hello , i am developer who develop this area . This is my area </p>
    <a href="#" className="btn btn-primary">About me </a>
  </div>
</div>
    </div>
   
  )
}
