import React from "react";

const gallary = [
  {
    id: 1,
    category: "animal",
    title: "Tiger",
    img: "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    category: "animal",
    title: "Lion",
    img: "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Gallery = () => {
  return (
    <div
      className="container mx-auto my-5 grid gap-4 
                grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 cursor-pointer"
    >
      {gallary.map((item, index) => (
        <div className="relative mx-auto shadow-md" key={index}>
          <img className="w-60 h-80" src={item.img} alt={item.index} />
          <span className="absolute bottom-5 left-5 text-3xl text-white">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
