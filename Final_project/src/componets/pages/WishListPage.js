import { useEffect } from "react";
import WishList from '../layout/WishList';

function WishListPage() {
    useEffect(() => {
        document.title = 'Wish list';
    }, []);

    return (
        <WishList />
    )
}

export default WishListPage;
