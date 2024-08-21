import { useState, useEffect } from "react";

const useFetchData = (username) => {
    const [userData, setUserData] = useState(null)
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(`https://api.github.com/users/${username}`);
                if(!response.ok){
                    throw new Error(`HTTP Status error: ${response.status}`)
                }
                const data = await response.json()
                setUserData(data)

                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!reposResponse.ok) {
                    throw new Error(`HTTP Status error: ${reposResponse.status}`);
                }
                const reposData = await reposResponse.json();
                setRepos(reposData);
            }catch (error) {
                setError("Invalid user name or URL request");
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    },[username])

    return { userData, repos, error, loading }
}

export default useFetchData