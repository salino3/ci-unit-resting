import React from "react"

export const usePolling = (pollingTime: number) => {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCount((c) => c + 1)
      }, pollingTime);
    
      return () => {
        window.clearInterval(interval);
      }
    }, [])
    

  return {
     count
  }
}
