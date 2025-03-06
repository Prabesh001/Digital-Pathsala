import React from "react";

const QAndAPage = () => {
  const data = [];
  return (
    <main className="flex w-full min-h-screen">
      <div className="w-full bg-white p-6 rounded-lg shadow-md max-w-4xl mx-4">
        <h4 className="text-xl font-semibold text-blue-900 mb-4">
          Question & Answer
        </h4>

        {/* Header Section */}
        <div className="header flex justify-between items-center mb-8">
          <div className="sort flex gap-4 py-4 items-center">
            <div className="select flex items-center gap-2">
              <span className="sortby text-sm font-medium text-gray-700">
                Sort by:
              </span>
              <select
                name="qa"
                id="qa"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
              >
                <option value="all">All (0)</option>
                <option value="read">Read (0)</option>
                <option value="unread">Unread (0)</option>
                <option value="important">Important (0)</option>
                <option value="archived">Archived (0)</option>
              </select>
            </div>
          </div>
        </div>

        {data.length === 0 ? (
          <div className="text-center w-full px-4">
            <h1 className="text-2xl font-bold mb-6 text-gray-700">
              Question & Answer
            </h1>
            <div className="flex justify-center items-center mb-6">
              <img
                src="https://digitalpathshalanepal.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
                alt="No questions available"
                className="max-w-xs h-auto"
              />
            </div>
            <p className="text-xl text-gray-500">
              No Data Available in this Section
            </p>
          </div>
        ) : (
          <>Data</>
        )}
      </div>
    </main>
  );
};

export default QAndAPage;
