import React, { useEffect, useState } from "react";
import Navbar from "../../SHares/Navbar";
import { FaChevronRight, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

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
  }, [newId]); //  newId as a dependency here

  //card carosel change by event handler

  return (
    <div className="overflow-hidden">
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
              background: "rgb(12 12 12 / 65%)",
              pointerEvents: "none", // This makes the background non-interactive
            }}
          >
            <div className=" container mx-auto flex gap-5">
              <div id="dtls" className="mt-52 ms-20 text-white">
                <h1 className="lg:text-7xl md:text-4xl mb-9 font-semibold">
                  {sLocation?.destination}
                </h1>
                <p className="lg:w-9/12 lg:pe-16 my-7">
                  {sLocation?.description}
                </p>
                <Link to={`/booking/${sLocation?._id}`}>
                  <button
                    style={{ pointerEvents: "auto" }}
                    className="flex gap-2 items-center justify-center bg-orange-500 px-7 py-2 rounded-md hover:bg-orange-700"
                  >
                    Booking <FaArrowRight />
                  </button>
                </Link>
              </div>

              <div className="mt-36 " id="cardCarosel">
                <div className="flex mb-28 gap-10 overflow-hidden">
                  {datas.map((data) => (
                    <div
                      key={1}
                      className="card rounded-md overflow-hidden w-72 h-80 relative bg-base-100 shadow-xl"
                    >
                      <img
                        src={data?.image}
                        width={"100%"}
                        style={{ height: "100%" }}
                        alt="Shoes"
                      />

                      <div
                        className=" absolute w-full h-full top-0"
                        style={{ background: "rgb(0 0 0 / 30%)" }}
                      >
                        <h2 className="font-semibold absolute bottom-5 px-2 text-center text-white text-4xl">
                          {data?.destination}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
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
