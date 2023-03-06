import React from "react";
import CalcContainer from "../CalcContainer";
import Footer from "../Footer";
import Header from "../Header";
import "./AppContainer.sass";

const AppContainer = () => {
    return (
        <div className="app-container">
            <Header title={"Qnh To Qfe — Aviation Calculator"} />
            <CalcContainer />
            <Footer />
        </div>
    );
};

export default AppContainer;
