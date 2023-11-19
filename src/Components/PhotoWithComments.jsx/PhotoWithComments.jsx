import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    username: state.username,
    userId: state.userId,
  };
};

const PhotoWithComments = ({ username, userId }) => {
  const [image, setImage] = useState({});
  const params = useParams();
  const [feedback, setFeedback] = useState({
    feedback: "",
    username: username,
    userId: userId,
    imageId: params.id,
    date: new Date(),
  });
  const [fetchedFeedback, setFetchedFeedback] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/gallery/${params.id}`)
      .then((res) => setImage(res.data));

    axios
      .get(`http://localhost:5000/feedbacks?imageId=${params.id}`)
      .then((res) => setFetchedFeedback(res.data));
  }, [params.id]);

  const handleChange = (e) => {
    setFeedback((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/feedbacks", feedback).then((res) =>
      setFetchedFeedback((prev) => {
        return [...prev, res.data];
      })
    );
  };

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
        {fetchedFeedback.map((feedback) => (
          <div key={feedback.id}>
            <div className="flex gap-8 mt-5">
              <h5>{feedback.username}</h5>
              <span className="italic">
                {new Date(feedback.date).toLocaleDateString()}
              </span>
            </div>
            <span>{feedback.feedback}</span>
          </div>
        ))}
      </div>

      <form className="my-5 px-5 sm:px-0 flex flex-col gap-3">
        <label className="font-bold">Leave Your Feedback Here</label>
        <textarea
          name="feedback"
          cols="50"
          rows="4"
          className="border-2 border-[#557C55] rounded-lg"
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="bg-[#557C55] text-white px-5 py-1 rounded-md w-1/5 sm:w-1/6 mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(PhotoWithComments);
