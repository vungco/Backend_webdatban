import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu mỗi khi pathname thay đổi
    }, [pathname]);

    return null;
};

export default ScrollToTop;