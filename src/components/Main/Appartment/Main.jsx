import React from "react";
import Slider from "./Components/Slider";
import Title from "./Components/Title";
import InfoBox from "./Components/InfoBox";
import HostInfo from "./Components/HostInfo";
import DescriptionCollapse from "./Components/DescriptionCollapse";
import EquipementCollapse from "./Components/EquipementCollapse";

const Main = () => {
    return (
        <main className="appartment-page">
            <Slider />
            <Title />
            <InfoBox />
            <HostInfo />
            <HostInfo />
            <DescriptionCollapse />
            <EquipementCollapse />
        </main>
    );
};

export default Main;