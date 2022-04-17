import { useEffect, useState } from "react"

let useService = () => {
    let [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    return [services, setServices];
}

export default useService;