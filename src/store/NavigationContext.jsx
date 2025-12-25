import { createContext, useEffect, useState } from "react";


export const NavigationContext = createContext({
    currentPage: 'dashboard',
    navigate: () => {}
})

const currentPage = localStorage.getItem('page');


export default function NavigationContextProvider({children}) {
    const [page, setPage] = useState(currentPage ?? 'dashboard');

    function navigate(pageName) {
        setPage(pageName);
    }

    useEffect(() => {
        localStorage.setItem('page', page)
    }, [page])

    const value = {
        currentPage: page,
        navigate: navigate
    }
    
    return <NavigationContext value={value}>{children}</NavigationContext>
}