import { useState } from "react";

export function useFetchData(url) {
    const [data,setData] = useState[null];
    const [error,setError] = useState[null];

    async function fetchData(){

        try {
            const response = await fetch(url);
            const json = response.json();
            setData(json);
        } catch (err) {
            setError(err);
        }
    }


    return [ error, data, fetchData ];
}
