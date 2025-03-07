"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { FaCircleInfo, FaWallet } from "react-icons/fa6";

const Withdraw = () => {
  const router = useRouter();
  return (
    <div className="flex-1   rounded-lg">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Withdrawals
        </h1>

        <div className="p-4 mb-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-full mb-4 sm:mb-0">
              <span className="text-xl text-green-500"><FaWallet/></span>
            </div>

            <div className="sm:ml-4 text-left">
              <p className="text-sm font-medium text-gray-600">
                Current Balance is Rs 0.00
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900">
                You have{" "}
                <span className="text-green-600 font-bold">Rs 0.00</span> and
                this is insufficient balance to withdraw
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start sm:items-center m-4 sm:m-8">
          <span className="text-lg mr-2 sm:mr-3 text-green-500"><FaCircleInfo size={15}/></span>
          <p className="text-sm text-gray-600">
            You can change your <span onClick={()=>router.push("/dashboard/settings")} className="text-green-500 cursor-pointer font-medium">Withdraw Preference</span>
          </p>
        </div>

        <div className="flex flex-col items-center py-8 sm:py-12">
          <img
            src="https://digitalpathshalanepal.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
            alt="No Data"
            className="w-36 h-auto sm:w-auto mb-4"
          />

          <p className="text-sm sm:text-lg text-gray-500 text-center">
            No Data Available in this Section
          </p>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
