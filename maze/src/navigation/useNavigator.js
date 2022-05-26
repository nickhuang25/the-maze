import {useRef, useContext, useState, useEffect} from 'react';
import { Context } from './provider';

const useOnScreen = ref => {
    const [isOnScreen, setOnScreen] = useState(false);
    const observer = new IntersectionObserver(
        ([entry]) => setOnScreen(entry.isIntersecting),
        {
            threshold: [0.25, 0.5, 0.75],
        }
    );

    useEffect(() => {
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        }
    });
    
    return isOnScreen;
};

export const useNavigator = linkId => {
    const ref = useRef(null);
    const {setActiveLinkId} = useContext(Context);
    const isOnScreen = useOnScreen(ref);

    useEffect(() => {
        if(isOnScreen) {
            setActiveLinkId(linkId);
        }
    }, [isOnScreen, setActiveLinkId, linkId]);

    return ref;
};