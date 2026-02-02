import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import "@smastrom/react-rating/style.css";
import type { IImage } from "../types";

interface ICarousel {
  listImage: IImage[];
}

export function Carousel({ listImage }: ICarousel) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative">
        <img
          className="rounded-lg border border-gray-200 size-80 object-contain shadow-xs"
          src={listImage[activeImage].url}
          alt="Product Image"
        />
        <div className="absolute text-[8px] right-2 bottom-2 items-center justify-center inline-flex rounded-md bg-gray-800 text-gray-100 overflow-hidden">
          <button
            className="px-1 border-r border-gray-700 cursor-pointer"
            onClick={() => {
              setActiveImage(activeImage - 1);
            }}
            disabled={activeImage < 1}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <text className="px-2 py-1 border-gray-700">
            {activeImage + 1 + "/" + listImage.length}
          </text>
          <button
            className="px-1 border-l border-gray-700 cursor-pointer"
            onClick={() => {
              setActiveImage(activeImage + 1);
            }}
            disabled={activeImage >= listImage.length - 1}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
      <div className="max-w-80 overflow-x-auto">
        <div className="flex flex-flex-nowrap gap-2 items-center justify-center">
          {listImage.map((item, index) => {
            return (
              <img
                onClick={() => {
                  setActiveImage(index);
                }}
                key={item.id}
                className={`rounded-lg size-10 object-scale-down shadow-xs min-w-10 cursor-pointer border ${activeImage === index ? "border-emerald-300" : "border-gray-200"}`}
                src={item.url}
                alt="Product Image"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
