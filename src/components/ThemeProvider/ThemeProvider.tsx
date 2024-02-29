"use client"
import { useEffect, useState } from "react"
import ThemeContext from "@/context/themeContext"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    //^ Our Cases To make HandleSwitch theme function
    //* 1 First we have to check the in localstorage is there any theme set ?
    //* 2 make a switch  case for light and dark mode
    //* 3 make a render  function which will return jsx with currentTheme and will render the page

    const CheckLocalStorage: boolean = typeof localStorage !== "undefined" && localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')!) : false;

    const [darkTheme, setDarkTheme] = useState<boolean>(CheckLocalStorage)
    // if we have the  darkmode on then it should be true otherwise false
    const [IfWeHave_ThenRender, setIfWeHave_ThenRender] = useState(false);
    useEffect(() => {
        setIfWeHave_ThenRender(true)
    }, [])

    if (IfWeHave_ThenRender === false) return <></>

    return (
        < ThemeContext.Provider value={{ darkTheme, setDarkTheme }
        }>
            <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
                <div className='dark:text-white dark:bg-black bg-white text-[#1E1E1E]'>
                    {children}
                </div>
            </div>
        </ ThemeContext.Provider >
    )


}

export default ThemeProvider;