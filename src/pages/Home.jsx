import { useOutletContext } from "react-router-dom"
import Card from "../components/Card"
import UserInfo from "../components/UserInfo"

export default function Home() {
    const { userData, currentItems, viewAll, viewAllRepos } = useOutletContext()

    return(
        <section>
            <div className="flex flex-col items-start justify-center">
                <UserInfo userData={userData} />
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 grid-flow-row gap-8 mt-5">
                {currentItems.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
            {!viewAll && <button onClick={viewAllRepos} className="text-grayish-white mt-5">View all repostories</button>}
        </section>
    )
}