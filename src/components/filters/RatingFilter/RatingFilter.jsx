import React, { useEffect, useState } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const starsArray = [
  {
    id: 1,
    name: "star1",
    isFill: false,
  },
  {
    id: 2,
    name: "star2",
    isFill: false,
  },
  {
    id: 3,
    name: "star3",
    isFill: false,
  },
  {
    id: 4,
    name: "star4",
    isFill: false,
  },
  {
    id: 5,
    name: "star5",
    isFill: false,
  },
]
export default function RatingFilter({ setRating, rating }) {
  const [stars, setStars] = useState(starsArray)

  const handleStars = (index) => {
    console.log("innnnn", index)

    const updatedStars = stars.map((star) =>
      star.id <= index ? { ...star, isFill: true } : { ...star, isFill: false },
    )

    setRating(index)
    setStars(updatedStars)
  }
  useEffect(() => {
    if (!rating) {
      setStars(starsArray)
    }
  }, [rating])
  return (
    <div className="stars ">
      <div className="stars-container flex ">
        {stars.map((star) => (
          <button
            key={star.id}
            className="w-9 h-9 "
            onClick={() => handleStars(star.id)}
          >
            {star.isFill ? (
              <AiFillStar className="w-6 h-6 " />
            ) : (
              <AiOutlineStar className="w-6 h-6 text-gray-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
