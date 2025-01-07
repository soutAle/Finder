import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { HeroSection } from "../component/home_components/HeroSection.jsx";
import { HighlightSection } from "../component/home_components/HighLightSection.jsx";
import { TestimonialSection } from "../component/home_components/TestimonialSection.jsx";
import { CallToAcction } from "../component/home_components/CallToAcction.jsx";
import { AboutUsSection } from "../component/home_components/AboutUsSection.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home-container container-fluid">
			<HeroSection />
			<HighlightSection />
			<AboutUsSection />
			<TestimonialSection />
			<CallToAcction />
		</div>
	);
};
