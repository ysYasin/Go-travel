import React, { useEffect, useState } from "react";
import Navbar from "../../SHares/Navbar";
import { FaChevronRight, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const datas = useLoaderData();
  const [sLocation, setSlocation] = useState(null);
  const [id, setId] = useState(0);

  const loc_tn = datas.map((data) => data._id);
  const newId = loc_tn[id];

  const handleLeftBtn = (event) => {
    event.preventDefault();
    if (id === 0) {
      setId(loc_tn.length - 1);
    } else {
      setId(id - 1);
    }
  };

  const handleRightBtn = (event) => {
    event.preventDefault();
    if (id === loc_tn.length - 1) {
      setId(0);
    } else {
      setId(id + 1);
    }
  };

  useEffect(() => {
    fetch(
      `https://go-travel-server-eixjmn8b8-ysyasins-projects.vercel.app/locations/${newId}`
    )
      .then((res) => res.json())
      .then((data) => setSlocation(data));
  }, [newId]); // Add newId as a dependency here

  return (
    <div className="">
      <div className="absolute top-0 w-full">
        <div className="w-full relative" style={{ height: "100vh" }}>
          <img
            width={"100%"}
            style={{ height: "100%" }}
            src={sLocation?.image}
          />
          <div className="absolute top-0 z-20 w-full">
            <Navbar isSearch={true}></Navbar>
          </div>
          <div
            className=" absolute w-full h-full top-0 left-0"
            style={{
              background: "rgb(12 12 12 / 38%)",
              pointerEvents: "none", // This makes the background non-interactive
            }}
          >
            <div className="mt-52 container w-11/12 mx-auto flex gap-5">
              <div className="md:w-6/12 text-white">
                <h1 className="lg:text-7xl md:text-4xl mb-9 font-semibold">
                  {sLocation?.destination}
                </h1>
                <p className="lg:w-9/12 lg:pe-16 my-7">
                  {sLocation?.description}
                </p>
                <button
                  style={{ pointerEvents: "auto" }}
                  className="flex gap-2 items-center justify-center bg-orange-500 px-7 py-2 rounded-md hover:bg-orange-700"
                >
                  Booking <FaArrowRight />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleLeftBtn}
                    className="bg-white rounded-full p-2 text-center text-back text-2xl cursor-pointer my-3 opa p-4"
                    style={{ pointerEvents: "auto" }}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={handleRightBtn}
                    className="bg-white rounded-full p-2 text-center text-back text-2xl cursor-pointer my-3 opa p-4"
                    style={{ pointerEvents: "auto" }}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
