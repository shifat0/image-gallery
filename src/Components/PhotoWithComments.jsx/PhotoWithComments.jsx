import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PhotoWithComments = () => {
  const [image, setImage] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/gallery/${params.id}`)
      .then((res) => setImage(res.data));
  }, [params.id]);
  return (
    <div className="container mx-auto my-5">
      <div className="relative mx-auto shadow-md">
        <img
          className="w-full h-80 object-cover"
          src={image.img}
          alt={image.title}
        />
        <span className="absolute bottom-5 left-5 text-6xl text-white">
          {image.title}
        </span>
      </div>

      <div className="my-10 px-5 sm:px-0">
        <span className="font-bold">Feedbacks</span>
        <hr />
        <div>
          <div className="flex gap-8 mt-5">
            <h5>Name</h5>
            <span className="italic">{new Date().toLocaleDateString()}</span>
          </div>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            possimus perspiciatis, minus unde voluptatum enim numquam optio
            reiciendis sint aliquam.
          </span>
        </div>
      </div>

      <div className="my-5 px-5 sm:px-0 flex flex-col gap-3">
        <label className="font-bold">Leave Your Feedback Here</label>
        <textarea
          name="feedback"
          cols="50"
          rows="4"
          className="border-2 border-[#557C55] rounded-lg"
        />
        <button className="bg-[#557C55] text-white px-5 py-1 rounded-md w-1/6 mx-auto">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PhotoWithComments;
