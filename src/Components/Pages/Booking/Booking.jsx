import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../SHares/Navbar";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import "./Booking.css";

const Booking = () => {
  const data = useLoaderData();
  // Initialize state variables
  const [startTravel, setStartTravel] = useState(null);
  const [endTravel, setEndTravel] = useState(null);

  // Define the onSelect callback function
  const handleChange = (start, end) => {
    // Update state with selected dates
    const travelS = start;
    const travelE = end;
    setStartTravel(travelS);
    setEndTravel(travelE);
  };

  const handleSubmititeBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const origin = form.origin.value;
    const destination = form.destination.value;

    console.log(origin, destination, startTravel, endTravel);
  };

  return (
    <div>
      <div className="">
        <div className="absolute top-0 w-full">
          <div className="w-full relative" style={{ height: "100vh" }}>
            <img width={"100%"} style={{ height: "100%" }} src={data?.image} />
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
              <div className=" md:flex gap-5">
                <div className="mt-52 w-6/12 ms-20 text-white">
                  <h1 className="lg:text-7xl md:text-4xl mb-9 font-semibold">
                    {data?.destination}
                  </h1>
                  <p className="lg:w-9/12 lg:pe-16 my-7">{data?.description}</p>
                </div>

                <div className="mt-36 w-6/12" style={{ pointerEvents: "auto" }}>
                  <div className="flex mb-28 gap-10">
                    <form
                      onSubmit={handleSubmititeBooking}
                      className="bg-white me-auto p-10 rounded-lg"
                    >
                      <label
                        htmlFor="origin"
                        className="text-xl font-medium mb-2"
                      >
                        Origin
                      </label>
                      <div>
                        <input
                          style={{
                            background: "#F2F2F2",
                            border: "none",
                            outline: "none",
                          }}
                          className="rounded-md w-full py-2 my-2 text-2xl font-medium px-4"
                          type="text"
                          name="origin"
                          placeholder="You'r location"
                        />
                      </div>
                      <label
                        htmlFor="destination"
                        className="text-xl font-medium mb-2"
                      >
                        Destination
                      </label>
                      <div>
                        <input
                          style={{
                            background: "#F2F2F2",
                            border: "none",
                            outline: "none",
                          }}
                          className="rounded-md w-full py-2 my-2 text-2xl font-medium px-4"
                          type="text"
                          name="destination"
                          placeholder="You'r Destination"
                        />
                      </div>
                      <RangeDatePicker
                        startDate={new Date()}
                        endDate={new Date()}
                        dateFormat="D"
                        monthFormat="MMM YYYY"
                        onChange={(startDate, endDate) =>
                          handleChange(startDate, endDate)
                        }
                        startWeekDay="monday"
                      />
                      <button
                        type="submit"
                        className="bg-rose-500 w-full py-3 text-xl font-medium hover:bg-rose-700 text-center text-white rounded-md my-4"
                        // onClick={handleDateChanging}
                      >
                        Start Booking
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
