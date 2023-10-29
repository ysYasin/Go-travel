import React, { useEffect, useState } from "react";
import Navbar from "../../SHares/Navbar";

const Home = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(
      `https://go-travel-server-eixjmn8b8-ysyasins-projects.vercel.app/locations`
    )
      .then((res) => res.json())
      .then((d) => setDatas(d));
  }, []);

  const images = datas.map((data) => data.image);

  return (
    <div className="">
      <div className="absolute -z-10 top-0 w-full">
        <div className="w-full relative">
          {images.map((img) => (
            <img key={img} width={"100%"} src={img} />
          ))}
          <div className="absolute w-full h-full bg-black opacity-20"></div>
        </div>
      </div>
      <Navbar className="z-20" isSearch={true}></Navbar>
    </div>
  );
};

export default Home;
