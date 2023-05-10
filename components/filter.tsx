"use client"

import React, { useEffect } from "react"

export default function Filters() {
  return (
    <>
      <div className="m-5 flex justify-center">
        <button
          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 block rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          type="button"
          data-modal-toggle="defaultModal"
        >
          Toggle modal
        </button>
      </div>

      <form
        id="defaultModal"
        aria-hidden="true"
        className="h-modal fixed inset-x-0 top-0 z-50 hidden w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-md md:h-auto">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="flex items-start justify-between rounded-t px-6 py-4">
              <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Show carriers first by:
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="space-y-4 px-4 md:px-6">
              <div className="flex items-center justify-between">
                <div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" className="peer sr-only" />
                    <div className="peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600 peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 dark:border-gray-600 dark:bg-gray-700"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      The last rate
                    </span>
                  </label>
                </div>

                <div>
                  <select
                    id="last-rate-select"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-2 pr-10 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                  >
                    <option>Min</option>
                    <option>Max</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      value=""
                      className="peer sr-only"
                      checked
                    />
                    <div className="peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600 peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 dark:border-gray-600 dark:bg-gray-700"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Number of vehicles
                    </span>
                  </label>
                </div>

                <div>
                  <select
                    id="vehicles-select"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-2 pr-10 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                  >
                    <option>Min</option>
                    <option>Max</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" className="peer sr-only" />
                    <div className="peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600 peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 dark:border-gray-600 dark:bg-gray-700"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Number of trips with us
                    </span>
                  </label>
                </div>

                <div>
                  <select
                    id="trips-select"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-2 pr-10 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                  >
                    <option>Min</option>
                    <option selected>Max</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" className="peer sr-only" />
                    <div className="peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600 peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 dark:border-gray-600 dark:bg-gray-700"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Number of cars
                    </span>
                  </label>
                </div>

                <div>
                  <select
                    id="cars-select"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-2 pr-10 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                  >
                    <option>Min</option>
                    <option>Max</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 rounded-b p-6 dark:border-gray-600">
              <button
                type="submit"
                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                Apply
              </button>
              <button
                type="reset"
                className="hover:text-primary-700 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
