import { useEffect, useRef, useState } from "react";

export default function usePopUp() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect( () => {
        const handler = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsVisible(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return [isVisible, setIsVisible, ref] 
}