import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {BookCard} from "../../components/bookCard";
import {Navbar} from "../../components/navebar";
import {TopSection} from "./topSection";
import {BookingSteps} from "./bookingSteps";
import {AboutUs} from "./aboutUs";
import {Marginer} from "../../components/marginer";
import {TopCars} from "./topCars";
import {Footer} from "../../components/footer";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {

    return (
        <PageContainer>
            <Navbar/>
            <TopSection/>
            <Marginer margin="4em" direction="vertical"/>
            <BookCard/>
            <Marginer margin="4em" direction="vertical"/>
            <BookingSteps/>
            <Marginer margin="4em" direction="vertical"/>
            <AboutUs/>
            <Marginer margin="4em" direction="vertical"/>
            <TopCars/>
            <Footer/>
        </PageContainer>
    );
}
