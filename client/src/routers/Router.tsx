import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Index from '../pages/Index';
import Tracker from '../pages/Tracker';
import Counts from '../pages/Counts';

function Router() {

    return (
        <div className="wrapper">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/tracker" element={<Tracker />} />
                    <Route path="/count" element={<Counts />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default Router;