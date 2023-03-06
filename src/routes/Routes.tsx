import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "../constants/routes";
import ReceivePage from "../pages/ReceivePage";
import HistoryPage from "../pages/HistoryPage";
import MainPage from "../pages/MainPage";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import LandingPage from "../pages/LandingPage";
import SendPage from "../pages/SendPage";

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<MainPage/>}/>
                <Route path={ROUTES.MAIN} element={<MainPage/>}/>
                <Route path={ROUTES.LANDING} element={<LandingPage/>}/>
                <Route path={ROUTES.RECEIVE} element={<ReceivePage/>}/>
                <Route path={ROUTES.RECEIVE_WITH_PARAM} element={<ReceivePage/>}/>
                <Route path={ROUTES.NOT_FOUND} element={<PageNotFoundPage/>}/>
                <Route path={ROUTES.HISTORY} element={<HistoryPage/>}/>
                <Route path={ROUTES.SEND} element={<SendPage/>}/>
                <Route path={"/*"} element={<PageNotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
