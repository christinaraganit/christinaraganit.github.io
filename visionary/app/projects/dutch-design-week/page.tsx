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
          <p className="mb-6">
            This case study is not affiliated with Dutch Design Week as a client
            and this project was performed for educational purposes.
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
          Dutch Design Week (DDW) pre-event microsite in a device mockup
        </MediaTag>
      </section>
      <Spacer></Spacer>
      <section className="px-6 max-w w-full">
        <h2 className="text-3xl tracking-tight mb-4">My Role</h2>
        <div className="grid lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4">
              As a visual designer, I was responsible for ideating design
              concepts and studying design precedents to create a visual
              direction for DDW. I was also the main interaction designer for
              this project, so I was responsible for creating Figma mockups of
              our microsite to articulate its expressive interactions.
            </p>
            <span className="text-neutral-400 flex items-center gap-1.5 italic">
              Check out some of the highlights below
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            </span>
          </div>
          <div>
            <p className="mb-4">
              As the design lead of the team, I also took on the additional
              responsibility of overseeing the project from concept to
              completion, ensuring that we stay on schedule and that we meet our
              weekly deliverables. I also provided direction and guidance to the
              design team and identified opportunities for improvement. I also
              ensured the quality and consistency of design work.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS HERE */}

      <Spacer></Spacer>

      <section className="px-6 max-w w-full ">
        <h2 className="callout text-fuchsia-600 mb-4">
          What's Dutch Design Week?
        </h2>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <div>
            <p className="p-lg">
              Dutch Design Week is an event that showcases the work of emerging
              and established designers across a wide range of disciplines.
            </p>
          </div>
          <div>
            <p>
              Held in Eindhoven, Netherlands, this annual event attracts
              visitors from around the world and serves as a platform for
              innovation, experimentation, and collaboration.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/whats-ddw.jpg"
          width={2304}
          height={1645}
          alt="Dutch Design Week 2021"></Image>
        <MediaTag media="IMAGE">
          The 2021 Graduation Show Exhibit of Dutch Design Week, as highlighted
          in{" "}
          <a
            href="https://www.elledecor.com/it/best-of/a38055753/dutch-design-week-eindhoven-2021-netherlands/"
            className="inline flex-wrap group/link underline-offset-4 hover:text-fuchsia-600 focus:text-fuchsia-600">
            <span>this article</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline w-4 h-4 -translate-y-1.5 group-hover/link:-translate-y-2 group-hover/link:translate-x-0.5 transition-transform">
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </MediaTag>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full ">
        <h2 className="callout text-fuchsia-600 mb-4">Design Process</h2>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <div>
            <p className="p-xl">
              I dove into the works of Italian graphic designer Massimo
              Vignelli, identifying design principles inherent in his work.
            </p>
          </div>
          <div>
            <p className="mb-4">
              My focus was to identify design principles embedded in his work,
              and I did so by meticulously analyzing and gathering a
              comprehensive collection of his designs. We surfaced the following
              principles that Vignelli repeatedly showcased in his work:
            </p>
            <ul className="list-disc list-inside">
              <li>Clustering within negative space to create visual order</li>
              <li>
                Manipulating transparency of layers to create visual weight
              </li>
              <li>Contrasting type scales to create visual hierarchy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/vignelli-qualities.png"
          width={3200}
          height={1800}
          alt="Vignelli qualities"></Image>
        <MediaTag media="IMAGE">
          Principles we surfaced from Vignelli's work and sample work by
          Vignelli himself which embody these qualities
        </MediaTag>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full ">
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <div>
            <p className="p-xl">
              I read Ellen Lupton’s <i>Graphic Design: The New Basics</i> cover
              to cover to gain a thorough understanding of design principles.
            </p>
          </div>
          <div>
            <p className="mb-4">
              I identified design principles that could harmonize with those of
              Vignelli’s to share the visual direction for our client, Dutch
              Design Week. The principles we selected were:
            </p>
            <ul className="list-disc list-inside">
              <li>Scaling beyond the frame to create visual power</li>
              <li>Creating visual contrast with complementary hues</li>
              <li>Employing texture to create depth</li>
            </ul>
          </div>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full grid gap-6 lg:gap-20 lg:grid-cols-2">
        <p className="p-xl">
          But something wasn’t quite working in our early iterations, and I
          refused to tunnel vision.
        </p>
        <div>
          <p className="mb-6">
            The idea was to combine the principles that we studied from
            Vignelli’s designs and Lupton’s book to create something new, but
            something was missing from our early iterations—we just didn’t know
            what.
          </p>
          <p>
            I noticed that some of my teammates persistently focused on the same
            approach and made endless iterations in the hopes that something
            would land, but I took a step back and explored what other
            precedents we could study from.
          </p>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full grid gap-6 lg:gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-6">
            I put the project brief aside for a moment, wondering how I could
            craft a visually compelling direction for Dutch Design Week. I
            gathered over two hundred posters and graphics created by Dutch
            designers and studied their qualities.
          </p>
        </div>
        <p className="p-xl">
          This was game-changing. By drawing inspiration from Dutch design
          precedents, our visual design direction finally started to take shape.
        </p>
      </section>

      <Spacer></Spacer>
    </main>
  );
}
