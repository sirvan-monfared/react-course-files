import { createContext, useState } from "react";


export const NavigationContext = createContext({
    currentPage: 'dashboard',
    navigate: () => {}
})

export default function NavigationContextProvider({children}) {
    const [page, setPage] = useState("dashboard");

    function navigate(pageName) {
        setPage(pageName);
    }   

    const value = {
        currentPage: page,
        navigate: navigate
    }
    
    return <NavigationContext value={value}>{children}</NavigationContext>
}