import React from "react";

const OrderHistory = () => {
  const orders = [];
  
  return (
    <main>
      <div className="flex justify-center items-center w-full px-4 md:w-4/5">
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            Order History
          </h4>

          {/* Header Section */}
          <div className="header flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            {/* Date Range Buttons */}
            <div className="button flex gap-2 md:gap-4 mb-4 md:mb-0">
              <button className="border border-green-500 text-green-500 px-4 py-1.5 md:px-6 md:py-2 rounded-md hover:text-white hover:bg-blue-700">
                Today
              </button>
              <button className="border border-green-500 text-green-500 px-4 py-1.5 md:px-6 md:py-2 rounded-md hover:text-white hover:bg-blue-700">
                Monthly
              </button>
              <button className="border border-green-500 text-green-500 px-4 py-1.5 md:px-6 md:py-2 rounded-md hover:text-white hover:bg-blue-700">
                Yearly
              </button>
            </div>

            {/* Calendar Section */}
            <div className="calendar flex flex-wrap gap-4 items-center">
              <div>
                <label
                  htmlFor="From"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  From
                </label>
                <input
                  type="date"
                  name="from-date"
                  id="from-date"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="To"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  To
                </label>
                <input
                  type="date"
                  name="to-date"
                  id="to-date"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {orders.length === 0 ? (
            <div className="text-center w-full px-4">
              <h1 className="text-2xl font-bold mb-6 text-gray-700">
                My Order History
              </h1>
              <div className="flex justify-center items-center mb-6">
                <img
                  src="https://digitalpathshalanepal.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
                  alt="No Data Available"
                  className="max-w-xs h-auto"
                />
              </div>
              <p className="text-xl text-gray-500">
                No Data Available in this Section
              </p>
            </div>
          ) : (
            <>Hello</>
          )}
        </div>
      </div>
    </main>
  );
};

export default OrderHistory;
