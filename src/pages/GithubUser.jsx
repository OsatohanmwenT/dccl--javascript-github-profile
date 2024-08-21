import { useParams } from "react-router-dom"
import Card from "../components/Card"
import UserInfo from "../components/UserInfo"
import useFetchData from "../hooks/useFetchData"
import usePagination from "../hooks/usePagination"

export default function GithubUser() {
    const { user } = useParams()
    const { userData, repos } = useFetchData(user);
    const { currentItems, viewAll, viewAllRepos } = usePagination(repos);

    if (!userData) return <p>Loading...</p>;

    return(
        <section>
            <div className="flex flex-col items-start justify-center">
                <UserInfo userData={userData} />
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 grid-flow-row gap-8 mt-5">
                {(currentItems.length > 0 ? repos : repos).map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
            {!viewAll && <button onClick={viewAllRepos} className="text-grayish-white mt-5">View all repostories</button>}
        </section>
    )
}
