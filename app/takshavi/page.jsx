import React, { Suspense } from "react";
import Banner from "../../components/Takshavi/Banner";
import Content from "../../components/Takshavi/Content";
import Seo from "../../components/common/Seo";
import Contact from "@/components/HomePage/Contact";

const Page = () => {
  const pageTitle =
    "Takshavi by Ekaya Spaces - Tranquil 3-Bedroom Apartments in Frazer Town, Bengaluru";
  const pageDescription =
    "Discover Takshavi by Ekaya Spaces, a boutique residential development in Frazer Town’s Spencer Road, Bengaluru. Offering exclusive 3-bedroom apartments designed for tranquility and luxury, enjoy proximity to parks, schools, and amenities in a serene community setting";
  const MetaImage = "";
  const url = "https://ekaya-spaces.com/takshavi";

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Content />
        <Contact />
      </Suspense>
    </>
  );
};

export default Page;
