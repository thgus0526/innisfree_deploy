import React from "react";
import Section1Com from "./main/Section1Com";
import Section2Com from "./main/Section2Com";
import Section3Com from "./main/Section3Com";
import Section4Com from "./main/Section4Com";
import Section5Com from "./main/Section5Com";
import Section6Com from "./main/Section6Com";
import Section7Com from "./main/Section7Com";
import Section8Com from "./main/Section8Com";
import Section9Com from "./main/Section9Com";

export default function MainCom ({viewProductMethod}) {
    return (
        <div id="main">
            <Section1Com />
            <Section2Com viewProductMethod={viewProductMethod}/>
            <Section3Com viewProductMethod={viewProductMethod}/>
            <Section4Com viewProductMethod={viewProductMethod}/>
            <Section5Com />
            <Section6Com />
            <Section7Com />
            <Section8Com viewProductMethod={viewProductMethod}/>
            <Section9Com />
        </div>
    )
}