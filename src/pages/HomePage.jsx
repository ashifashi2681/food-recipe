import React from 'react'
import Layout from '../layout/Layout'
import InboxSection from '../components/homepage/InboxSection'
import HeroBanner from '../components/homepage/HeroBanner'
import Delicious from '../components/homepage/Delicious'
import SweetTooth from '../components/homepage/SweetTooth'
import PopularCategories from '../components/homepage/PopularCategories'
import LatestRecipes from '../components/homepage/LatestRecipes'



function HomePage() {
  return (
		<Layout>
			<div className="homepage">
				<HeroBanner />
				<Delicious />
				<SweetTooth />
				<PopularCategories />
				<InboxSection />
				<LatestRecipes />
			</div>
				<p className="not-available">
					Only Available for Desktop Size devices
				</p>
		</Layout>
  );
}

export default HomePage


