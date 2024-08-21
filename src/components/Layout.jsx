import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom"
import Input from "./Input"
import useFetchData from "../hooks/useFetchData"
import usePagination from "../hooks/usePagination"
import useSearch from "../hooks/useSearch";

export default function Layout() {
    const [username, setUsername] = useState("github");
    const [search, setSearch] = useState("");
    const { userData, error, loading, repos } = useFetchData(username);
    const { viewAll, currentItems,viewAllRepos } = usePagination(repos)
    const { suggestions } = useSearch(search);

    const handleUsernameChange = (value) => {
        setSearch(value);
    };

    return(
        <div className="grid place-content-center grid-flow-row gap-[18vh] p-6 px-28 max-xl:px-12">
            <Input search={search}  handleUsernameChange={handleUsernameChange} />
            {suggestions && (
                    <NavLink className="absolute top-[12%] left-[24.8%]" to={`/${suggestions.name}`}>
                        <div className="mx-auto top-[11%]">
                            <div className="min-w-[50vw] bg-very-dark-gray p-3 rounded-xl flex items-center justify-start gap-6">
                                <img className="rounded-xl" width={80} src={suggestions.avatar_url} alt="user avatar" />
                                <div>
                                    <p className="text-grayish-white text-text-title">{suggestions.name}</p>
                                    <p className="text-grayish-white text-text-b">{suggestions.bio}</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
            )}
            <main>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData &&
                <Outlet context={{ userData, repos, viewAll, currentItems, viewAllRepos }} />
            }
            </main>
        </div>
    )
}