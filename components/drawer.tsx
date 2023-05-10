import React from "react"

export default function drawer() {
  return (
    <>
      <div className="m-5 text-center">
        <button
          id="readProductButton"
          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
          type="button"
          data-drawer-target="readProductDrawer"
          data-drawer-show="readProductDrawer"
          aria-controls="readProductDrawer"
        >
          Read product
        </button>
      </div>

      <div
        id="readProductDrawer"
        className="fixed left-0 top-0 z-40 h-screen w-full max-w-xs -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
        aria-labelledby="drawer-label"
        aria-hidden="true"
      >
        <div>
          <h4
            id="drawer-label"
            className="mb-1.5 text-xl font-semibold leading-none text-gray-900 dark:text-white"
          >
            Apple iMac 25
          </h4>
          <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            $2999
          </p>
        </div>
        <button
          type="button"
          data-drawer-dismiss="readProductDrawer"
          aria-controls="readProductDrawer"
          className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
          <span className="sr-only">Close menu</span>
        </button>
        <dl>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Details
          </dt>
          <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
            Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Category
          </dt>
          <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
            Electronics/PC
          </dd>
        </dl>
        <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
          <button
            type="button"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            <svg
              aria-hidden="true"
              className="-ml-1 mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            Edit
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            <svg
              aria-hidden="true"
              className="-ml-1 mr-1.5 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Delete
          </button>
        </div>
      </div>
    </>
  )
}
