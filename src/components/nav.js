import React from 'react';
import logo from '../Images/loco.png';
 
 function nav() {
     return (
         <div>
             <nav className="navbar ">
                 <div className="container-fluid">
                     <div className="navbar-header">

                         <a className="navbar-brand" href="#"><img className="loco" src={logo}></img> <small>
                             Powered By <span className="ok">Finstreet</span></small></a>
                     </div>
                     <ul className="nav navbar-nav mr-auto text-center">
                         <li className="active "> <button type="button" class="btn btn-default">INR</button></li>
                         <li className="active "> <button type="button" class="btn btn-default">BTC</button></li>
                         <li className="active "> <button type="button" class="btn btn-default">BUYBTC</button></li>
                        

                     </ul>

                     <ul className="nav navbar-nav navbar-right">
                         <li><button className="btn btn-success">Connect Telegram <i className="fab fa-telegram-plane"></i></button></li>
                         
                     </ul>
                 </div>
             </nav>
             

         </div>
     )
 }
 
 export default nav
 