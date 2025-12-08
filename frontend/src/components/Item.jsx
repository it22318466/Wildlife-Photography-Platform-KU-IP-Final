import React from "react";
import HeartBtn from "./HeartBtn";
import {
  MdCarCrash,
  MdHome,
  MdPeople,
  MdVideoCameraFront,
} from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { format, parse } from "date-fns";

const Item = ({ property }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`../collection/${property._id}`)}
      className="rounded-2xl p-5 bg-white hover:shadow-md transition-shadow duration-300 cursor-pointer flex flex-col h-full"
      style={{ minHeight: "440px" }}
    >
      <div className="pb-2 relative h-60">
        <img
          src={property.image}
          alt={property.title}
          className="rounded-xl h-full w-full object-cover"
        />
        <div className="absolute top-4 right-6">
          <HeartBtn id={property?._id} />
        </div>
      </div>
      <h5 className="bold-16 my-1 text-secondary">{property.city}</h5>
      <h4 className="medium-18 line-clamp-1">{property.title}</h4>
      <div className="flex gap-x-2 py-2">
        <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
          <MdHome />
          {property.facilities.bedrooms}
        </div>
        <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
          <MdPeople />
          {property.facilities.bathrooms}
        </div>
        <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
          <MdCarCrash />
          {property.facilities.parkings}
        </div>
        <div className="flexCenter gap-x-2 pr-4 font-[500]">
          <MdVideoCameraFront /> ✅
        </div>
      </div>
      <div className="flex-grow">
        <p className="pt-2 mb-2 line-clamp-3">{property.description}</p>
      </div>
      <div className="mt-4">
        <div className="mb-2 text-sm font-medium text-gray-500">
          Validity Time
        </div>
        <div className="flexBetween">
          <div className="bold-20">
            {format(parse(property.startTime, "HH:mm", new Date()), "h:mm a")} -{" "}
            {format(parse(property.endTime, "HH:mm", new Date()), "h:mm a")}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`../collection/${property._id}`);
            }}
            className="btn-secondary rounded-xl !py-1.5 !px-4 text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
