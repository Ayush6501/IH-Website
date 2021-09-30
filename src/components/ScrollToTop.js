import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
        console.log(window)
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    return null;
}
