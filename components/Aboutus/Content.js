"use client";
import React, { useState, useRef, useEffect } from "react";
import configData from "../../config.json";

function Content() {
  const [Page, setData] = useState();

  const fetchPost = async () => {
    try {
      const postResponse = await fetch(`${configData.SERVER_URL}pages/30`);
      const postData = await postResponse.json();

      if (postResponse.ok) {
        setData(postData.content.rendered);
        //console.log(postData.content.rendered)
      } else {
        console.error(`Failed to fetch post. Status: ${postResponse.status}`);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="lg:mt-[100px] mt-5 mx-auto" data-aos="fade-up">
      <p
        className="poppins-light text-[18px] text-start pb-5"
        dangerouslySetInnerHTML={{ __html: Page }}
      />
    </div>
  );
}

export default Content;
