import Nav from "@/components/nav";
import Image from "next/image";
import Spacer from "@/components/spacer";
import HalfSpacer from "@/components/half-spacer";
import MediaTag from "@/components/media-tag";
import NavNotFixed from "@/components/nav-not-fixed";
import Link from "@/components/link";

export default function DutchDesignWeek() {
  return (
    <main className="max-w-[100vw] overflow-x-clip w-full flex flex-col items-center gap-4 lg:gap-8 pt-40 pb-32">
      <NavNotFixed></NavNotFixed>
      <section className="px-6 max-w w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-40">
        <div className="col-span-2">
          <h1 className="large-title mb-6">Dutch Design Week</h1>
          <p className="p-xl font-light mb-6">
            In this 5-week academic team project, I led a team of 5 in analyzing
            design qualities from design precedents to develop the design
            direction and eventually a pre-event microsite for Amsterdam-based
            Dutch Design Week.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-6">
          <div>
            <h2 className="callout mb-1">Team</h2>
            <p>
              Brianna Mei, Christina Raganit, Madeline Ho, Michael Dresler,
              Simon Wong Chung
            </p>
          </div>

          <div>
            <h2 className="callout mb-1">My Roles</h2>
            <p>UI Design, Interaction Design, Visual Design, Branding</p>
          </div>

          <div>
            <h2 className="callout mb-1">Course</h2>
            <p>IAT 235 | Information Design</p>
          </div>

          <div>
            <h2 className="callout mb-1">Duration</h2>
            <p>March 8–April 12, 2023 (5 weeks)</p>
          </div>
        </div>
      </section>
      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/case-study-header.png"
          width={3840}
          height={2160}
          alt="Cheekys UI"></Image>
        <MediaTag media="IMAGE">
          Dutch Design Week pre-event microsite in a device mockup
        </MediaTag>
      </section>
      <Spacer></Spacer>
      <p className="max-w w-full p-xl">
        This case study is currently in progress.<br></br> Please check back
        later!
      </p>
    </main>
  );
}
