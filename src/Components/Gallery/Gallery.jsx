import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};

const Gallery = ({ category }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/gallery")
        .then((res) => setGallery(res.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container mx-auto my-5 px-3 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols4 xl:grid-cols-5 cursor-pointer">
      {category
        ? gallery
            ?.filter((item) => item.category === category?.toLowerCase())
            .map((item, index) => (
              <Link to={`${item.id}`} key={index}>
                <div className="relative mx-auto shadow-md">
                  <img
                    className="w-full h-80 object-cover"
                    src={item.img}
                    alt={item.index}
                    loading="lazy"
                  />
                  <span className="absolute bottom-5 left-5 text-3xl text-white">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))
        : gallery?.map((item, index) => (
            <Link to={`${item.id}`} key={index}>
              <div className="relative mx-auto shadow-md">
                <img
                  className="w-full h-80 object-cover"
                  src={item.img}
                  alt={item.index}
                  loading="lazy"
                />
                <span className="absolute bottom-5 left-5 text-3xl text-white">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default connect(mapStateToProps)(Gallery);
