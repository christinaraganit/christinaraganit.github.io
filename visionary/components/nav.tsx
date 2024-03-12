"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Button from "./button";

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <nav
        id="navigation"
        className="fixed top-6 pointer-events-auto hidden z-20">
        <ul className="flex w-fit rounded-full bg-zinc-50/80 px-3 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <li>
            <a
              className="relative block px-3 py-2 transition hover:text-blue-500"
              href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="relative block px-3 py-2 transition hover:text-blue-500"
              href="/about">
              About
            </a>
          </li>
          <li>
            <a
              className="relative block px-3 py-2 transition hover:text-blue-500"
              href="/awards">
              Awards
            </a>
          </li>
          {/* <li>
            <a
              className="relative block px-3 py-2 transition hover:text-blue-500"
              href="/projects"
            >
              Projects
            </a>
          </li> */}

          <li>
            <a
              className="relative block px-3 py-2 transition text-blue-500 hover:text-blue-700"
              href="https://drive.google.com/file/d/1XdjiOlwxWced9ZCvzwyLcPiZANGwptAV/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <nav className="fixed block top-6 right-6 pointer-events-auto sm:hidden z-20">
        <button
          className="group flex w-fit rounded-full bg-white/80 px-4 py-2 text-sm font-medium
        text-slate-700 shadow-lg shadow-slate-800/5 ring-1 ring-zinc-900/5 backdrop-blur gap-1.5"
          onClick={() => setModalOpen(true)}>
          Menu
          <ChevronDownIcon
            width={20}
            height={20}></ChevronDownIcon>
        </button>

        <Dialog
          as="div"
          onClose={() => setModalOpen(false)}
          open={modalOpen}>
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            className="fixed inset-0 z-50 bg-zinc-800/50 backdrop-blur opacity-100 text-sm font-medium"
            aria-hidden="true"
          />
          <Dialog.Panel
            className="flex flex-row fixed inset-x-4 top-6 right-6 left-6
          z-50 origin-top rounded-3xl bg-white p-4 ring-1 ring-zinc-900/5 opacity-100 scale-100
          shadow-lg shadow-slate-800/5 backdrop-blur">
            <ul className="flex w-full flex-col text-sm pt-2 text-slate-700 font-medium">
              <li>
                <a
                  className="relative block px-3 py-2 transition hover:text-blue-500"
                  href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="relative block px-3 py-2 transition hover:text-blue-500"
                  href="/about">
                  About
                </a>
              </li>
              {/* <li>
                <a
                  className="relative block px-3 py-2 transition hover:text-blue-500"
                  href="/projects"
                >
                  Projects
                </a>
              </li> */}

              <li>
                <a
                  className="relative block px-3 py-2 transition hover:text-blue-700"
                  href="https://drive.google.com/file/d/1XdjiOlwxWced9ZCvzwyLcPiZANGwptAV/view?usp=sharing">
                  Resume
                </a>
              </li>
            </ul>
            <div className="flex justify-end h-fit">
              <a className="p-2">
                <button onClick={() => setModalOpen(false)}>
                  <XMarkIcon
                    width={20}
                    height={20}
                    className="text-slate-600 hover:text-blue-500"></XMarkIcon>
                </button>
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>

      <nav className="w-full bg-zinc-50/90 backdrop-blur-lg border-b border-zinc-200/60 fixed z-20 h-16 hidden sm:flex justify-between items-center left-1/2 -translate-x-1/2 top-0">
        <div className="px-6 flex items-center w-full max-w mx-auto">
          <div className="w-full">
            <div>
              <a
                href="/"
                className="w-fit block hover:scale-125 transition-transform">
                <Image
                  src="/headshot.png"
                  width={100}
                  height={100}
                  className="w-9 h-9 rounded-full"
                  alt="A UX Designer with glasses and curled bangs"></Image>
              </a>
            </div>
          </div>
          <div className="flex">
            <Button
              link="/"
              variant="tertiary"
              text="Home"></Button>
            <Button
              link="/about"
              variant="tertiary"
              text="About"></Button>
            <Button
              link="/awards"
              variant="tertiary"
              text="Awards"></Button>
            {/* <Button
              link="/projects"
              variant="tertiary"
              text="Projects"
            ></Button> */}
            <div className="pl-1.5">
              <Button
                link="https://drive.google.com/file/d/1qjVgedGo8Eb4xUUayLN1TlgdHEcQmimo/view?usp=sharing"
                variant="primary"
                text="Resume"></Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
