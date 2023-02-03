import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages Routes
import Dashboard from "./pages/Dashboard";
import Campaign from "./pages/Campaign";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import CreateNewCampaign from "./components/CreateNewCampaign";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/campaign" element={<Campaign />} />
                    <Route exact path="/createNewCampaign" element={<CreateNewCampaign />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/customers" element={<Customers />} />
                </Routes>
			</Fragment>
        </BrowserRouter>
    );
};

export default AppRoutes;