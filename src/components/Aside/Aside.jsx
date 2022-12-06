import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";
import s from "./s.module.css";

const Aside = ({ tags, toggleNew, onLogout, isInit }) => {

 return (
  <aside className={s.aside}>
   <button onClick={toggleNew} className={s.btn_create}>Create New Task</button>
   <nav className={s.tags_nav}>
    <h2>Tags:</h2>
    <ul>
     <li className={s.current}><NavLink to='/'>All</NavLink></li>
     {tags?.length ? tags.map((e) => <li key={`${e}_key`}><NavLink to={`/tags/${e.replace(/ /g,"_")}`}>{e}</NavLink></li>) : isInit ? 'All tags displayed.' : <Loader noMinMax={true}/>}
    </ul>
   </nav>

   <div className={s.log_group}>
    <button type="button" className={s.btn_log} onClick={onLogout}>Log Out</button>
   </div>
  </aside>
 );
};

export default Aside;
