import { useState } from "react";

export function useFetchData(url) {
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    async function fetchData(){
        setLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }


    return [ loading, error, data, fetchData ];
}
