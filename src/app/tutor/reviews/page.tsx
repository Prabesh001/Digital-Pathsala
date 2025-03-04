"use client";
import Image from "next/image";

const ReviewsPage = () => {
  return (
    <div className="flex-1 text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Reviews</h2>
      <div className="max-w-xs mx-auto mb-6">
        <Image
          src="https://digitalpathshalanepal.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
          alt="No reviews"
          className="w-full"
          width={100}
          height={100}
        />
      </div>
      <p className="text-gray-500 text-lg">No reviews available yet</p>
    </div>
  );
};

export default ReviewsPage;
