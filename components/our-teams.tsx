import React from "react"

import { Icons } from "./icons"

export default function Team() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Explore the whole collection of open-source web components
          </p>
        </div>
        <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
          <div className="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
            {" "}
            <a href="#">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Mullayam"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="">Mullayam</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Backend Web Developer
              </span>
              <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                Bonnie drives the technical strategy of the flowbite platform
                and brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mullayam-singh-921615264/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Icons.linkedIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Mullayam"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Icons.github />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <a href="#">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Amit Parmar</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Frontend Developer
              </span>
              <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                Jese drives the technical strategy of the flowbite platform and
                brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.linkedin.com/in/amit-parmar-665002221/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Icons.linkedIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AmitxParmar"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Icons.github />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
