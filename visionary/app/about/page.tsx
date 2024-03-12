import Nav from "@/components/nav";
import Image from "next/image";
import MediaTag from "@/components/media-tag";
import NavNotFixed from "@/components/nav-not-fixed";
import Link from "@/components/link";

export default function About() {
  return (
    <main className="w-full flex justify-center items-center flex-col pt-0 sm:pt-16 pb-20">
      <NavNotFixed></NavNotFixed>
      <div className="mb-4 h-48 bg-blue-500 w-full"></div>

      <div className="max-w flex justify-left w-full absolute top-32">
        <Image
          alt="Christina in Italy"
          src="/me_in_italy.jpg"
          width={900}
          height={900}
          className="ml-6 lg:pl-0 w-48 h-48 rounded-full outline outline-8 outline-white border-[#fafafa]"></Image>
      </div>

      <section className="px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 max-w w-full">
        <div className="w-full max-w flex flex-col gap-3 mt-36 sm:mt-24">
          <div className="flex gap-4 items-center mb-1.5">
            <h1 className="title-1">Christina Raganit</h1>
            <p className="bg-zinc-200/40 flex items-center px-2.5 text-sm font-medium text-zinc-700 rounded-3xl h-fit py-1">
              she/her
            </p>
          </div>
          <p className="p-lg text-zinc-600 -mt-1">
            Meticulous and curious, this developer-turned designer spends most
            of her time on Figma and eating pizza at hackathons.
          </p>
          <div className="h-[1px] my-4 w-full bg-zinc-400/20"></div>
          <div className="flex gap-4 items-center text-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 fill-zinc-400">
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Vancouver, BC</span>
          </div>
          <div className="flex gap-4 items-center text-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 fill-zinc-400">
              <path
                fill-rule="evenodd"
                d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>

            <span>UX Designer at Felix Payment Systems</span>
          </div>

          <div className="flex gap-4 text-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mt-1 fill-zinc-400">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>

            <span className="block">
              Interactive Arts and Technology<br></br>Simon Fraser University
            </span>
          </div>

          <div className="flex gap-4 text-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mt-1 fill-zinc-400">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>

            <span className="block">
              Drinking bubble tea<br></br>
              Playing video games<br></br>
            </span>
          </div>
        </div>

        <section className="lg:mt-8 max-w w-full grid gap-6">
          <div className="px-8 py-6 lg:py-10 lg:px-12 rounded-3xl bg-white/60 border border-zinc-200/60">
            <p className="callout text-blue-500 mb-6">My Story</p>

            <p className="mb-6">
              I fell in love with design in the lecture halls of my computer
              science classes at BCIT. I initially dreamt of being a software
              developer so that I can build things that'll make the world a
              better place but it turns out, I wanted to design them, too.
            </p>

            <p className="mb-6">
              After graduating with my diploma in{" "}
              <Link
                text="Computer Systems Technology"
                link="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/"
                size="medium"
                color="blue"></Link>
              , I enrolled into the{" "}
              <Link
                text="Interactive Arts and Technology"
                link="https://www.sfu.ca/siat.html"
                size="medium"
                color="blue"></Link>{" "}
              program at Simon Fraser University, where I am currently
              sharpening my skills in design as a fourth-year student and
              leading the design team at{" "}
              <Link
                text="SFU Surge"
                link="https://sfusurge.com/"
                size="medium"
                color="blue"></Link>
              .
            </p>

            <p className="mb-2">
              When I am not tinkering away on Figma or attending a hackathon
              somewhere, you can usually find me...
            </p>
            <ul className="list-disc list-inside leading-relaxed">
              <li>Losing all my League of Legends games</li>
              <li>Jamming to my favorite blink-182 songs</li>
              <li>Reading stories about magic and dragons, and</li>
              <li>Eating chicken katsu curry with my boyfriend</li>
            </ul>

            <p></p>
          </div>
        </section>
      </section>
    </main>
  );
}
