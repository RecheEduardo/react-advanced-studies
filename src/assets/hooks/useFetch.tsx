import { useState, useEffect } from "react";

const useFetch = <T,>(url: string) => {

    const [ data , setData] = useState<T | null>(null);
    const [ error , setError] = useState<Error | null>(null);

    useEffect(() => {
      if(!url) return;
      
        fetch(url)
        .then((res) => res.json())
        .then((resData: T) => setData(resData))
        .catch((err) => setError(err));
    }, [url])

    return { data, error }
}

export default useFetch;