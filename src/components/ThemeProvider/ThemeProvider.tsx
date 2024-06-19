"use client";
import { Children, useEffect , useState  } from "react";

import ThemeContext from "@/components/context/themeContext";


const ThemeProvider = ({children}: {children: React.ReactNode;}) => {
const themeFromStorage:boolean = typeof 
localStorage !=='undefined' && localStorage.getItem('hotel-theme') ? 
JSON.parse(localStorage.getItem('hotel-theme')!) : false;

const [darkTheme,setDarkTheme] = useState<boolean>(themeFromStorage);
// const valus = JSON.parse(localStorage.getItem('hotel-theme')!)
// console.log(valus);
// const [renderComponent,setrenderComponent] = useState<boolean>(themeFromStorage);

// useEffect (()=>{
//  setrenderComponent(true);
// },[]);
// if(!renderComponent) return <></>
return(
  <ThemeContext.Provider value={{darkTheme, setDarkTheme }}>
    <div className={`${darkTheme? 'dark': ''} min-h-screen`}>
       <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
        {children}
       </div>
    </div>
   
  </ThemeContext.Provider>
)
};
export default ThemeProvider;


