import SearchList from "../layout/SearchList";
import { useEffect } from "react";


function SearchPage() {

    useEffect(() => {
        document.title = 'Search';
    }, []);

    return (
        < SearchList />
    )
}

export default SearchPage;
