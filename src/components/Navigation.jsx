import { NavLink} from "react-router-dom"
import home from '../assets/home.svg'
import user from '../assets/user-solid.svg'
import portfolio from '../assets/portfolio-solid.svg'
import blog from '../assets/blog.svg'
import resume from '../assets/student.svg'
import contact from '../assets/contact.svg'


import '../css/style.css'
export const Navigation =() =>{
    
    return (
        <div className="bg-indigo-950 text-white w-24 h-max py-5 ">
        <ul>
            <li>
               <div className="w-24 mb-5 hover:bg-indigo-900 py-1 px-auto flex justify-center">
               <NavLink  to ='/'>
                    <img className="icons" src={home}/>
                    <p>Home</p>
                </NavLink>
               </div>
            </li>
            <li>
                <div className="w-24 mb-5 hover:bg-indigo-900 py-1 px-auto flex justify-center">
                <NavLink  to ='/user'>
                    <img className="icons" src={user} />
                    <p className="text-left">User</p>
                </NavLink>
                </div>
            </li>
            <li>
                <div className="w-24 mb-5 hover:bg-indigo-900 py-1 px-auto flex justify-center">
                <NavLink to ="/portfolio">
                    <img className="icons mx-5" src={portfolio}/>
                    <p>Portfolio</p>
                </NavLink>
                </div>
            </li>
            <li>
                <div className="w-24 mb-5 hover:bg-indigo-900 py-1 px-auto flex justify-center">
                <NavLink to ='/blog'>
                <img className="icons" src={blog}/>
                <p >Blog</p>
                </NavLink>
                </div>
            </li>
            <li>
              <div className="w-24 mb-5 hover:bg-indigo-900 py-1 px-auto flex justify-center">
              <NavLink to ='/resume' >
                    <img src={resume} className="icons mx-5" />
                    <p>Resume</p>
                </NavLink>
              </div>
            </li>
            <li>
               <div className="w-24 mb-5 hover:bg-indigo-900 py-1 px-auto flex justify-center">
               <NavLink to ='/contact'>
                    <img className="icons mx-5" src={contact}/>
                    <p>Contact</p>
                </NavLink>
               </div >
            </li>
        </ul>
       
        </div>
    )
    
}