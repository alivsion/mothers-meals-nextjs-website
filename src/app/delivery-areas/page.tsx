'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import pinCodesData from './hyderabad-pincodes.json'; // Adjust the path as needed

const DeliveryAreas: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Convert JSON data into an array of objects for easier rendering
    const areas = React.useMemo(
        () =>
            Object.entries(pinCodesData).flatMap(([pinCode, areaList]) =>
                areaList.map((area) => ({ name: area, pinCode }))
            ),
        [pinCodesData]
    );

    // Filter areas based on the search term
    const filteredAreas = areas.filter(
        (area) =>
            area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            area.pinCode.includes(searchTerm)
    );

    return (
        <>
            <Head>
                <title>Delivery Areas - Mother Meals</title>
                <meta
                    name="description"
                    content="Explore the areas in Hyderabad where we deliver fresh, homemade meals."
                />
                <meta
                    name="keywords"
                    content="delivery areas, Hyderabad, food delivery, homemade meals"
                />
                <meta property="og:title" content="Delivery Areas - Mother Meals" />
                <meta
                    property="og:description"
                    content="Explore the areas in Hyderabad where we deliver fresh, homemade meals."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.mothermeals.com/delivery-areas"
                />
                <meta property="og:image" content="/og-image-delivery-areas.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Delivery Areas - Mother Meals" />
                <meta
                    name="twitter:description"
                    content="Explore the areas in Hyderabad where we deliver fresh, homemade meals."
                />
                <meta name="twitter:image" content="/og-image-delivery-areas.jpg" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Delivery Areas",
                        }),
                    }}
                />
            </Head>
            <div className="min-h-screen  py-10 px-6 ">
                <div className="text-center mb-10  ">
                    <h1 className="text-5xl font-bold text-[#95063C] mb-4">
                        Delivery Areas
                    </h1>
                    <p className="text-lg text-[#E7154F]">
                        Explore the areas in Hyderabad where we deliver fresh, homemade meals.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-4xl mx-auto mb-6">
                    <input
                        type="text"
                        placeholder="Search by area or pin code..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-[#95063C] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E7154F] transition"
                    />
                </div>

                {/* Areas List */}
                <div className="max-w-4xl  mx-auto bg-white shadow-lg rounded-lg p-6">
                    {filteredAreas.length > 0 ? (
                        <div className="overflow-y-auto max-h-96">
                            <table className="w-full border-collapse border border-[#D2B161]">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#95063C] to-[#E7154F] text-white">
                                        <th className="py-3 px-4 text-left">Area</th>
                                        <th className="py-3 px-4 text-left">Pin Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAreas.map((area, index) => (
                                        <tr
                                            key={index}
                                            className={`${
                                                index % 2 === 0 ? "bg-[#fbeedb]" : "bg-white"
                                            } hover:bg-[#FBEEDB]`}
                                        >
                                            <td className="py-3 px-4 text-[#95063C]">{area.name}</td>
                                            <td className="py-3 px-4 text-[#E7154F]">{area.pinCode}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center text-[#95063C]">
                            No areas found for your search.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default DeliveryAreas;