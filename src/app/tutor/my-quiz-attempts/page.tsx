import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen w-4/5">
                <div className="text-center w-full px-4">
                    <h1 className="text-4xl font-bold mb-6 text-gray-700">My Quiz Attempts</h1>
                    <div className="flex justify-center items-center mb-6">
                        <img src="https://digitalpathshalanepal.com/wp-content/plugins/tutor/assets/images/emptystate.svg" alt="No Data" className="max-w-full h-auto"/>
                    </div>
                    <p className="text-xl text-gray-500">No Data Available in this Section</p>
                </div>
            </div>
  )
}

export default page