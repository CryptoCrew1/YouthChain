import { Navbar } from "../components";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";

import bgImage from "../assets/image.jpg"
import cardImage from "../assets/eventImg.jpg"

const EventScreen = () => {
    return (
        <div className='App'>
      <div style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'auto'
      }}>
        <div className='black-bg-transparent-60'>
          <Navbar name='Events' />
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex relative h-12 mt-16 items-center justify-between'>
            <input
              type="text"
              placeholder="Search for event"
              className="rounded-md border-2 border-white text-sm text-white py-1 w-1/3 px-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {dropdownButtons}
          </div>
        </div>
        <div className='bg-black min-h-screen '>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex relative items-center justify-between'>

            <div className='flex-col mt-10'>
              <ListView />
              <ListView />
              <ListView />
              <ListView />
            </div>

          </div>
        </div>

      </div>

    </div>
    );
}

export default EventScreen

const dropdownButtons = <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex space-x-5'>
  <Menu as="div" className="inline-block relative">
    <div>
      <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-transparent px-3 h-8 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-800">
        City
        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                'block px-4 py-2 text-sm'
              )}
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                'block px-4 py-2 text-sm'
              )}
            >
              Support
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                'block px-4 py-2 text-sm'
              )}
            >
              License
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
  <Menu as="div" className="inline-block relative ">
    <div>
      <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-transparent px-3 h-8 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-800">
        Industry
        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                  'block px-4 py-2 text-sm'
                )}
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                  'block px-4 py-2 text-sm'
                )}
              >
                Support
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-800 text-gray-300' : 'text-gray-400',
                  'block px-4 py-2 text-sm'
                )}
              >
                License
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
</div>

const ListView = () => {
    const [visibleItems, setVisibleItems] = useState(1);
  
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
  
            if (screenWidth >= 1200) {
                setVisibleItems(3);
            } else if (screenWidth >= 992) {
                setVisibleItems(3);
            } else if (screenWidth >= 768) {
                setVisibleItems(2);
            } else {
                setVisibleItems(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const items = Array.from({ length: visibleItems });
    return (
        <div className="overflow-x-hidden scrolling-touch">
            <div className='flex-col'>
                <p className="text-lg md:text-xl mt-4 font-bold text-left text-white">
                    MOST MOMENTUM
                </p>
                <p className="text-sx md:text-sm  text-left text-gray-400">
                    Offerings that have raised the most money in the last few days
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="outlined" className='rounded-md border border-cyan-400 text-white py-2 px-2 text-cyan-400'>See all</Button>
                </div>
                <div className="flex mt-5 flex-shrink-0 justify-between space-x-6">
                    {items.map((item, index) => (
                        <div key={index}>
                            {projectItem()}
                        </div>
                    ))}
                </div>
            </div>
  
        </div>
    );
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  function projectItem() {
    return <div className="mt-5 lg:w-[calc(100vw/3)] xl:w-[calc(100vw/4)]">
        <div className="relative">
            <a href="/event-details" target="_blank">
                <img src={cardImage} alt="MyRadar App Screenshot" className="w-full object-cover rounded-[15px]"/>

            </a>

        </div>
        <div className="py-3">
            <h2 className="text-xl font-bold text-white">Google event</h2>
            <h3 className="text-sm text-gray-400">Google Follows Microsoft in Unveiling AI Search Features - WSJ</h3>
        <div className="border-t border-dashed border-gray-300 w-full h-0 my-3"></div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-cyan-400">12 Aralık Salı, 5 Gün Sonra, Şişli, İstanbul</span>
          </div>
        </div>
      </div>
    </div>;
  }