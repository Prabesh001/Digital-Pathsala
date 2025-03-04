import Image from 'next/image';
import React from 'react';

const CheckoutPage = () => {
  return (
    <main>
      <section className="bg-white py-8 antialiased md:py-16">
        <form className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Billing Details</h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstname" className="mb-2 block text-sm font-bold text-gray-900">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Sulav"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastname" className="mb-2 block text-sm font-bold text-gray-900">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Acharya"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="companyname" className="mb-2 block text-sm font-bold text-gray-900">
                      Company Name <sup>(optional)</sup>
                    </label>
                    <input
                      type="text"
                      id="companyname"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Digital Pathshala"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label htmlFor="select-country" className="block text-sm font-bold text-gray-900">
                        Country/Region*
                      </label>
                    </div>
                    <select
                      id="select-country"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option>Nepal</option>
                      <option value="IN">India</option>
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label htmlFor="select-state" className="block text-sm font-bold text-gray-900">
                        State*
                      </label>
                    </div>
                    <select
                      id="select-state"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option>Bagmati Province</option>
                      <option value="KP">Koshi Province</option>
                      <option value="MP">Madesh Province</option>
                      <option value="GP">Gandaki Pradesh</option>
                      <option value="KAP">Karnali Pradesh</option>
                      <option value="SP">Sudurpashchim Pradesh</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-bold text-gray-900">
                      Phone Number*
                    </label>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-bold text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                          className="iconify iconify--twemoji"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path fill="#22408B" d="M27.796 19L8 5v26h19.796L15.918 19z" />
                          <path fill="#DD2F45" d="M25 18L9 7.196V30h16L13.574 18z" />
                          <path
                            fill="#FFF"
                            d="M14.291 24.041l.586-.816l-1 .098l.1-1l-.817.586l-.414-.916l-.414.916l-.817-.586l.099 1l-1-.098l.586.816l-.916.414l.916.414l-.586.816l1-.098l-.099 1l.817-.586l.414.916l.414-.916l.817.586l-.1-1l1 .098l-.586-.816l.916-.414zm-1.546-7.147l.001.002l.001-.002l.018.002c1.468 0 2.66-1.13 2.784-2.567a3.2 3.2 0 0 1-1.595 1.442l-.175-.244l.611-.276l-.611-.276l.391-.545l-.668.066l.067-.668l-.546.391l-.276-.612l-.276.612l-.546-.391l.067.668l-.668-.066l.391.545l-.611.276l.611.276l-.167.233a3.203 3.203 0 0 1-1.566-1.431a2.795 2.795 0 0 0 2.763 2.565z"
                          />
                        </svg>
                        +977
                      </button>
                      <input
                        type="tel"
                        id="phone"
                        className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="1234567890"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="mb-2 block text-sm font-bold text-gray-900">
                      Street Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="house-00, xyz colony 265"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="postcode" className="mb-2 block text-sm font-bold text-gray-900">
                      Postcode/ZIP <sup>(optional)</sup>
                    </label>
                    <input
                      type="number"
                      id="postcode"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-900">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="hello@digitalpathshalanepal.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="payment" className="mb-2 block text-sm font-bold text-gray-900">
                      Payment File
                    </label>
                    <input
                      type="file"
                      id="payment"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Payment</h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <h4 className="text-center text-xl font-bold text-gray-400">Fonpay</h4>
                    <div className="flex items-center justify-center">
                      <img
                        src="https://digitalpathshalanepal.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-11.18.19-PM.webp"
                        alt="Fonpay"
                        width={144}
                        height={144}
                        className="h-36 w-36 object-cover"
                      />
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <h4 className="text-center text-xl font-bold text-gray-400">Esewa</h4>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/esewa.png"
                        alt="Esewa"
                        width={144}
                        height={144}
                        className="h-36 w-36 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500">
                      C Programming <span className="px-3 text-md font-bold text-black">x 1</span>
                    </dt>
                    <dd className="text-base font-bold text-gray-500">Rs 99.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500">Subtotal</dt>
                    <dd className="text-base font-bold text-black">Rs 99.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500">Shipping</dt>
                    <dd className="text-base font-bold text-gray-900">Free</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">Rs. 99.00</dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-950 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Complete Payment
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CheckoutPage;