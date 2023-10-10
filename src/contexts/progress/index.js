import { createContext, useState, useContext } from "react"

 export const ProgressContext = createContext({})

 export const useProgressContext = () => {
   return useContext(ProgressContext);
 };

 export default function ProgressProvider({children}){
      const [progress, setProgress] = useState(0);

      const updateProgress = (newProgress) => {
        setProgress(newProgress);
      };
    return(
        <ProgressContext.Provider value={{progress, updateProgress}}>{children}</ProgressContext.Provider>
    )
}