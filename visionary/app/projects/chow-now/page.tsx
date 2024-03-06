import Nav from "@/components/nav";
import Spacer from "@/components/spacer";
import HalfSpacer from "@/components/half-spacer";
import Image from "next/image";
import MediaTag from "@/components/media-tag";

export default function ChowNow() {
  return (
    <main className="max-w-[100vw] overflow-x-clip w-full flex flex-col items-center gap-4 lg:gap-10 pt-40 pb-32">
      <Nav></Nav>

      <section className="px-6 max-w-[80rem] w-full lg:grid lg:grid-cols-3 lg:gap-40">
        <div className="col-span-2">
          <h1 className="large-title mb-6">Chow Now</h1>
          <p className="p-lg font-light mb-6">
            In 2019, a woman in Ohio reported an incident of domestic abuse by
            pretending to order a pizza, highlighting the need for victims to
            report such cases with discretion.
          </p>
          <p className="p-lg font-light mb-6">
            In the 23 hours spanning cmd-f 2023, Eunsaem and I designed and
            built an app disguised as a takeout delivery app, allowing victims
            to report incidents to local authorities without raising the
            suspicion of their abusers.
          </p>
        </div>

        <div className="grid gap-6">
          <div>
            <h2 className="callout mb-1">Team</h2>
            <p>Christina Raganit and Eunsaem Lee</p>
          </div>

          <div>
            <h2 className="callout mb-1">Roles</h2>
            <p>UI Design, UX Design, Frontend Development</p>
          </div>

          <div>
            <h2 className="callout mb-1">Event</h2>
            <p>cmd-f 2023 Hackathon | March 11–12, 2023 (23 hours)</p>
          </div>

          <div>
            <h2 className="callout mb-1">Achievements</h2>
            <p>First Place Winner (out of 44 teams) and Best Design Award</p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-[80rem] w-full flex flex-col gap-2">
        <Image
          src="/chow-now/header.png"
          width={1920}
          height={1080}
          alt="UI of Chow Now"
        ></Image>
        <MediaTag media="IMAGE">Final solution in a device mockup</MediaTag>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w-[80rem] w-full">
        <h2 className="callout text-orange-600 mb-4">Content Warning</h2>
        <div className="grid w-full lg:grid-cols-2 gap-6 lg:gap-20">
          <p className="p-xl">
            The following content may contain mentions of domestic abuse and
            violence, which may be distressing or triggering for some
            individuals.
          </p>
          <div>
            <p className="mb-4">
              Please proceed with caution and prioritize your well-being while
              reading. If you or someone you know is experiencing abuse, please
              reach out to the appropriate hotline or support service for
              assistance.
            </p>
            <ul className="list-disc list-inside">
              <li>VictimLinkBC: +1 (800) 563-0808</li>
              <li>Battered Women's Support Services: (604) 687-1867</li>
              <li>BC Society of Transition Houses: (604) 669-6943</li>
              <li>
                Domestic Violence and Abuse Support Services: (604) 640-7549
              </li>
              <li>South Asian Women's Centre: (604)-326-3000</li>
            </ul>
          </div>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w-[80rem] w-full">
        <h2 className="text-3xl tracking-tight mb-4">My Role</h2>
        <div className="grid lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4">
              As the user experience designer, I was primarily responsible for
              identifying a solution through secondary research. After defining
              the most crucial features to complete for our minimum viable
              product (MVP) for the hackathon submission, I created an
              interactive prototype of the final solution on Figma and coded the
              frontend using React Native and CSS.
            </p>
            <span className="text-neutral-400 flex items-center gap-1.5 italic">
              Check out some of the highlights below
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w-[80rem] w-full grid lg:grid-cols-2">
        <p className="p-xl">
          The rest of this case study is still in progress. Please check back
          later!
        </p>
      </section>
    </main>
  );
}
