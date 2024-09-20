import React from 'react';
import Header from '../components/Header/Header';
import OfferComponent from '../components/Offer/OfferComponent';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Book from '../components/Book/Book';
import MissionSection from '../components/Mission/MissionSection';
import CombinedSection from '../components/Combine/CombinedSection';



export default function Applayout() {
  return (
    <div>
        <Header/>
        <ProductGrid/>
        <OfferComponent/>
        {/* <Book/>
        <MissionSection/> */}
        <CombinedSection/>
    </div>
  )
}
