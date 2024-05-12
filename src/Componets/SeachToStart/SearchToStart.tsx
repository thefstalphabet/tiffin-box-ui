import React from "react";
import { landingPage } from "../../Assets";
export default function SearchToStart() {
  return (
    <div className="subContainer p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">So many reasons to start</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-40 h-40 mb-4"
            src={landingPage}
            alt="Image not found"
          />
          <h1 className="text-lg font-bold text-center">Teach your way</h1>
          <p className="text-center">
            Publish the course you want, in the way you want, and always have
            control of your own content.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-40 h-40 mb-4"
            src={landingPage}
            alt="Image not found"
          />
          <h1 className="text-lg font-bold text-center">Teach your way</h1>
          <p className="text-center">
            Publish the course you want, in the way you want, and always have
            control of your own content.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-40 h-40 mb-4"
            src={landingPage}
            alt="Image not found"
          />
          <h1 className="text-lg font-bold text-center">Teach your way</h1>
          <p className="text-center">
            Publish the course you want, in the way you want, and always have
            control of your own content.
          </p>
        </div>
      </div>
    </div>
  );
}
