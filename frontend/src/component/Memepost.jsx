import React from 'react'
import styles from './Memepost.module.css';
export default function Memepost() {
  return (
    <center>
    <div>
      <div class={styles.meme}>
      <div class="card" style={{width: "18rem;"}}>
  <img src="https://images.pexels.com/photos/11035465/pexels-photo-11035465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Meme-1</h5>
    <p class="card-text">Meme description : it only works on my system bcz its my meme 😂😂😂😂</p>
    <div className={styles.icons}></div>
    <a href="#" class="btn btn-primary">👍🏻</a>
    <a href="#" class="btn btn-primary">📖</a>
    <a href="#" class="btn btn-primary">🔔</a>
  </div>
</div>
</div>
    </div></center>
  )
}
