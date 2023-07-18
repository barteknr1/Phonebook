import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../appBar/AppBar';
import { Suspense } from 'react';
import css from './Layout.module.css'

const Layout = () => {
    return (
        <div className={css.container}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default Layout