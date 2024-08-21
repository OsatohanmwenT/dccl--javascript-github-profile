import { useState } from "react";

const usePagination = (repos) => {
    const itemsPerPage = 4;
    const currentPage = 1;
    const [viewAll, setViewAll] = useState(false)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = viewAll ? repos : repos.slice(indexOfFirstItem, indexOfLastItem);

    const viewAllRepos = () => {
        setViewAll(true);
    };


    return {viewAll, setViewAll, currentItems, viewAllRepos}
}

export default usePagination