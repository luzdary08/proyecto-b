import React, { useContext,  useEffect,  useReducer, useState } from "react";
import {Collapse} from 'react-bootstrap';
/// Link
import { Link } from "react-router-dom";
import {MenuList} from './Menu';
import { ThemeContext } from "../../../context/ThemeContext";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";



const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active : "",
  activeSubmenu : "",
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
    ChangeIconSidebar,
  } = useContext(ThemeContext);
  const date = new Date();
  
  const [state, setState] = useReducer(reducer, initialState);
  const [getMenu, setMenu] = useState([]);
  const handleMenuActive = status => {		
    setState({active : status});			
    if(state.active === status){				
      setState({active : ""});
    }   
  }
  const handleSubmenuActive = (status) => {		
    setState({activeSubmenu : status})
    if(state.activeSubmenu === status){
      setState({activeSubmenu : ""})			
    }    
  }

  //For scroll
  const [hideOnScroll, setHideOnScroll] = useState(true)
	useScrollPosition(
		({ prevPos, currPos }) => {
		  const isShow = currPos.y > prevPos.y
		  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
		},
		[hideOnScroll]
	)

  // ForAction Menu
  let path = window.location.pathname;
  path = path.split("/"); // /dashboard -> ['',dashboard]
  path = path[path.length - 1]; //dashboard


  useEffect(() => {
    const normal = JSON.parse(localStorage.getItem('userDetails'))
    setMenu(normal.menu)
    getMenu.forEach((data) => {
      data.children?.forEach((item) => {        
        if(path === item.to){         
          setState({active : data.title})          
        }
        item.children?.forEach(ele => {
          if(path === ele.to){
            setState({activeSubmenu : item.title, active : data.title})
          }
        })
      })
  })
  },[path]);

  return (
      <div
        onMouseEnter={()=>ChangeIconSidebar(true)}
        onMouseLeave={()=>ChangeIconSidebar(false)}
        className={`deznav ${iconHover} ${
          sidebarposition.value === "fixed" &&
          sidebarLayout.value === "horizontal" &&
          headerposition.value === "static"
            ? hideOnScroll > 120
              ? "fixed"
              : ""
            : ""
        }`}
    >
      
          <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
              {MenuList.map((data, index)=>{
                  let menuClass = data.classsChange;
                    if(menuClass === "menu-title"){
                      return(
                        <li className={menuClass}  key={index} >{data.title}</li>
                      )
                    }else{
                      return(				
                        <li className={`has-menu ${ state.active === data.title ? 'mm-active' : ''}${data.to === path ? 'mm-active' : ''}`}
                          key={index} 
                        >                          
                          {data.content && data.content.length > 0 ?
                            <>
                              <Link to={data.to} 
                                className="has-arrow ai-icon"
                                onClick={() => {handleMenuActive(data.title)}}
                              >								
                                  <i className={`${data.iconStyle}`} />
                                  <span className="nav-text">{data.title}
                                    <span className="badge badge-xs style-1 badge-danger ms-2">{data.update}</span>
                                  </span>                                  
                              </Link>
                          
                              <Collapse in={state.active === data.title ? true :false}>
                                <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                  {data.content && data.content.map((data,index) => {		
                                    
                                    
                                    return(	
                                        <li key={index}
                                          className={`${ state.activeSubmenu === data.title ? "mm-active" : ""}${data.to === path ? 'mm-active' : ''}`}                                    
                                        >
                                          {data.content && data.content.length > 0 ?
                                              <>
                                                <Link to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                                  onClick={() => { handleSubmenuActive(data.title)}}
                                                >
                                                  {data.title}
                                                </Link>
                                                <Collapse in={state.activeSubmenu === data.title ? true :false}>
                                                    <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                                      {data.children && data.children.map((data,index) => {
                                                        return(	                                                    
                                                          <li key={index}>
                                                            <Link className={`${path === data.to ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                                          </li>
                                                        )
                                                      })}
                                                    </ul>
                                                </Collapse>
                                              </>
                                            :
                                            <Link to={data.to} 
                                              className={`${data.to === path ? 'mm-active' : ''}`}                                                
                                            >
                                              {data.title}
                                            </Link>
                                          }
                                          
                                        </li>
                                      
                                    )
                                  })}
                                </ul>
                              </Collapse>
                            </>      
                            :
                            <Link  to={data.to} className={`${data.to === path ? 'mm-active' : ''}`}>
                                <i className={`${data.iconStyle}`} />
                                <span className="nav-text">{data.title}
                                  <span className="badge badge-xs style-1 badge-danger ms-2">{data.update}</span>
                                </span>                                
                            </Link>
                          }
                        </li>	
                      )
                  }
              })}  
            </ul>    
          </div>
        
      </div>
    );
  
}

export default SideBar;
