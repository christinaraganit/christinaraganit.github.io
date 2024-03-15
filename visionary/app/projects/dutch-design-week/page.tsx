import Nav from "@/components/nav";
import Image from "next/image";
import Spacer from "@/components/spacer";
import HalfSpacer from "@/components/half-spacer";
import MediaTag from "@/components/media-tag";
import NavNotFixed from "@/components/nav-not-fixed";
import Link from "@/components/link";
import QuarterSpacer from "@/components/quarter-spacer";

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
      <div className="flex flex-col gap-2 px-6 max-w w-full">
        <div className="max-w w-full">
          <section className="w-full bg-[#C1F42A] relative aspect-video">
            <Image
              src="/ddw/macbook.png"
              width={3200}
              height={1800}
              alt="Macbook mockup"
              className="absolute z-10 pointer-events-none"
            ></Image>
            <div className="w-[67.7%] relative top-[12.3444444%] left-[16.25%] h-[75.3%] flex items-center bg-black">
              <video
                width={1600}
                height={900}
                src="/ddw/exhibit.mp4"
                loop
                muted
                autoPlay
              ></video>
            </div>
          </section>
        </div>
        <MediaTag media="VIDEO">
          The details page of the exhibition <i>Rootfull</i> in the pre-event
          microsite.
        </MediaTag>
      </div>
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

      <section className="mt-6 gap-6 grid px-6 w-full">
        <div className="lg:grid-cols-2 grid gap-6">
          <Image
            src="/ddw/posters.png"
            width={3200}
            height={1800}
            alt="Posters created for Dutch Design Week"
          ></Image>
          <div className="max-w w-full">
            <section className="w-full bg-[#FFCE2B] relative aspect-video">
              <Image
                src="/ddw/macbook.png"
                width={3200}
                height={1800}
                alt="Macbook mockup"
                className="absolute z-10 pointer-events-none"
              ></Image>
              <div className="w-[67.6%] relative top-[12.3444444%] left-[16.25%] h-[75.3%] overflow-y-scroll custom-scrollbar scroll-desktop">
                <Image
                  src="/ddw/landing-page.png"
                  width={2160}
                  height={8489}
                  alt="Landing page"
                  className="object-cover object-top"
                ></Image>
              </div>
            </section>
          </div>

          <Image
            src="/ddw/highlight-3.png"
            width={3200}
            height={1800}
            alt="Asset created for Dutch Design Week"
          ></Image>

          <Image
            src="/ddw/colors.png"
            width={3200}
            height={1800}
            alt="Asset created for Dutch Design Week"
          ></Image>

          <Image
            src="/ddw/typography.png"
            width={3200}
            height={1800}
            alt="Asset created for Dutch Design Week"
          ></Image>

          <Image
            src="/ddw/highlight-2.png"
            width={3200}
            height={1800}
            alt="Asset created for Dutch Design Week"
          ></Image>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full ">
        <h2 className="callout text-fuchsia-500 mb-4">
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
          alt="Dutch Design Week 2021"
        ></Image>
        <MediaTag media="IMAGE">
          The 2021 Graduation Show Exhibit of Dutch Design Week, as highlighted
          in{" "}
          <a
            href="https://www.elledecor.com/it/best-of/a38055753/dutch-design-week-eindhoven-2021-netherlands/"
            className="inline flex-wrap group/link underline-offset-4 hover:text-fuchsia-500 focus:text-fuchsia-500"
          >
            <span>this article</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline w-4 h-4 -translate-y-1.5 group-hover/link:-translate-y-2 group-hover/link:translate-x-0.5 transition-transform"
            >
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
        <h2 className="callout text-fuchsia-500 mb-4">
          Design Process — Exploring Vignelli's Works
        </h2>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <div>
            <p className="p-xl">
              I dove into the works of Italian graphic designer Massimo
              Vignelli, identifying qualities inherent in his work.
            </p>
          </div>
          <div>
            <p className="mb-4">
              By meticulously analyzing and gathering a comprehensive collection
              of Massimo Vignelli's designs, I surfaced the following qualities
              which Vignelli repeatedly showcased in his work:
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
          src="/ddw/vignelli-qualities-annotated.png"
          width={3200}
          height={1800}
          alt="Vignelli qualities annotated"
        ></Image>
        <MediaTag media="IMAGE">
          An exploration of Vignelli's design works exported from my digital
          workspace, annotated with my notes.
        </MediaTag>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/vignelli-qualities.png"
          width={3200}
          height={1800}
          alt="Vignelli qualities"
        ></Image>
        <MediaTag media="IMAGE">
          Qualities we surfaced from Vignelli's work and sample work by Vignelli
          himself which embody these qualities.
        </MediaTag>
      </section>

      <HalfSpacer />

      <section className="px-6 max-w w-full ">
        <h2 className="callout text-fuchsia-500 mb-4">
          Design Process — Studying Ellen Lupton
        </h2>
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
              <li>Employing texture to create depth and dimension</li>
              <li>Scaling beyond the frame to create visual power</li>
              <li>Creating visual contrast with complementary hues</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/lupton-principles.png"
          width={3200}
          height={1800}
          alt="Vignelli qualities annotated"
        ></Image>
        <MediaTag media="IMAGE">
          Principles we surfaced from Ellen Lupton's{" "}
          <i>Graphic Design: The New Basics</i> and sample graphic designs which
          embody these principles.
        </MediaTag>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="w-full max-w px-6 grid gap-6 lg:gap-20">
        <div className="max-w-xl">
          {" "}
          <p className="p-lg mb-4">
            We ideated on visual design directions by creating concept posters
            of various Dutch Design Week exhibits, some of which were the
            following…
          </p>
          <p className="text-sm line-through">
            And thank God for iterations, because these look awful.
          </p>
        </div>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/iterations-1.png"
          width={3200}
          height={1800}
          alt="Vignelli qualities"
        ></Image>
        <MediaTag media="IMAGE">
          The first iterations of posters we created, combining visual qualities
          surfaced from Vignelli's work and principles we learned from Lupton's
          book.
        </MediaTag>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full">
        <h2 className="callout text-fuchsia-500 mb-4">
          Reflecting on Early Design Process
        </h2>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl mb-6">
            Something wasn't working in our early iterations, and I refused to
            tunnel vision.
          </p>
          <div>
            <p className="mb-6">
              The idea was to combine the principles that we studied from
              Vignelli’s designs and Lupton’s book to create a new, distinct
              visual direction, but something was missing from our early
              iterations—we just didn’t know what.
            </p>
            <p>
              I noticed that some of my teammates persistently focused on the
              same approach and made endless iterations in the hopes that
              something would land, but I took a step back and explored what
              other precedents we could study from.
            </p>
          </div>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full">
        <h2 className="callout text-fuchsia-500 mb-4">
          Design Process — Studying Dutch Design
        </h2>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <p>
            I put the project brief aside for a moment, wondering how I could
            craft a visually compelling direction for Dutch Design Week. I
            gathered over two hundred posters and graphics created by Dutch
            designers and studied their qualities. This was game-changing.
          </p>
          <div>
            <p className="p-xl">
              By drawing inspiration from Dutch design precedents, our visual
              design direction finally started to take shape.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/dutch-designs.png"
          width={3200}
          height={1800}
          alt="Dutch Designs"
        ></Image>
        <MediaTag media="IMAGE">
          Graphic works created by Dutch designers like Irma Boom, Experimental
          Jetset, Gerrit Noordzij, Rudy Vanderlans, Piet Zwart, Wim Crouwel, and
          Karel Martens. And yes—there's definitely <i>a lot</i> more where that
          came from.
        </MediaTag>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full">
        <h2 className="callout text-fuchsia-500 mb-4">
          Developing the Art Direction
        </h2>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            Iteration after endless iteration, we began to converge and elevate
            the visual design direction...
          </p>
          <div>
            <p className="">
              This direction was inspired by the modular typography, vibrant
              colors, and strict grid structure employed in designs created by
              Dutch designers such as Wim Crouwel, Rudy Vanderlans, and
              Experimental Jetset while embracing the principles we observed
              from Vignelli’s works and learned from Lupton’s teachings.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/final-posters.png"
          width={6019}
          height={1800}
          alt="Final iterations"
        ></Image>
        <MediaTag media="IMAGE">
          The final iterations of posters we created which led to the refinement
          of our art direction.
        </MediaTag>
      </section>

      <QuarterSpacer></QuarterSpacer>

      <section className="px-6 max-w w-full grid lg:items-center gap-6 lg:gap-20 lg:grid-cols-3">
        <section className="lg:col-span-1">
          <h3 className="callout text-fuchsia-500 mb-4">Color</h3>
          <p>
            The bright and vibrant colors were inspired by the bold and
            experimental characteristics of Dutch design. The high saturation is
            visually intriguing at first sight, but also has potential to
            integrate itself within semantic qualities.
          </p>
        </section>

        <section className="flex flex-col gap-2 lg:col-span-2">
          <Image
            src="/ddw/colors.png"
            width={3200}
            height={1800}
            alt="Colors used in visual design direction"
          ></Image>
          <MediaTag media="IMAGE">
            The various colors employed in our visual design direction.
          </MediaTag>
        </section>
      </section>

      <QuarterSpacer></QuarterSpacer>

      <section className="px-6 max-w w-full ">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-20">
          <div>
            <h3 className="callout text-fuchsia-500 mb-4">SK Quadratica</h3>
            <p>
              The structural uniformity of the characters in this typeface
              created by{" "}
              <Link
                text="Shriftovik Foundry"
                link="https://www.behance.net/gallery/115425685/SK-Quadratica-Free-Font"
                color="fuchsia"
                size="medium"
              ></Link>{" "}
              enforces the modular grid structure of our art direction.
            </p>
          </div>

          <div>
            <h3 className="callout text-fuchsia-500 mb-4">DAMN</h3>
            <p>
              Created by{" "}
              <Link
                text="Daria Fisko"
                link="https://www.behance.net/gallery/162660829/Damn-Free-Sans-Serif-Font"
                color="fuchsia"
                size="medium"
              ></Link>
              , the typeface DAMN is a geometric sans-serif with elongated ovals
              present in its letterform, creating visual contrast when used with
              SK Quadratica.
            </p>
          </div>

          <div>
            <h3 className="callout text-fuchsia-500 mb-4">Futura</h3>
            <p>
              A font as old as time, this geometric sans-serif font is employed
              as body text not only for its strong and powerful appearance, but
              also for its versatility and legibility.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/ddw/typefaces.png"
          width={3200}
          height={1800}
          alt="Final iterations"
        ></Image>
        <MediaTag media="IMAGE">
          The typefaces used in our art direction for our final project—SK
          Quadratica, DAMN, and Futura.
        </MediaTag>
      </section>

      <QuarterSpacer></QuarterSpacer>

      <section className="px-6 max-w w-full grid lg:items-center gap-6 lg:gap-20 lg:grid-cols-3">
        <section className="lg:col-span-1">
          <h3 className="callout text-fuchsia-500 mb-4">Image Treatment</h3>
          <p>
            The half-tone effect, monochrome color scheme and superimposition of
            the image altogether creates an illusion of depth and an intriguing
            figure ground relationship between the type, image, and background.
          </p>
        </section>

        <section className="flex flex-col gap-2 lg:col-span-2">
          <Image
            src="/ddw/image-treatment.png"
            width={3200}
            height={1800}
            alt="Visualization of the image treatment employed throughout our art direction"
          ></Image>
          <MediaTag media="IMAGE">
            A visualization of the image treatment employed throughout our art
            direction. From left to right: an untouched image, the same image
            with the halftone effect, and the image with duotone colors.
          </MediaTag>
        </section>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full">
        <h2 className="callout text-fuchsia-500 mb-4">
          Designing the Microsite
        </h2>

        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            Our microsite aimed to entice visitors to attend the next iteration
            of Dutch Design Week.
          </p>
          <div className="">
            <p className="mb-6">
              I worked with our UX researchers and content designers to identify
              the target audience for our microsite, which we eventually chose
              to tailor towards potential eventgoers visiting the website before
              the event. Information, ranging from general to specific, informs
              the user about whether the event and what aspects of the event
              would be of interest to them.
            </p>
            <p>
              With our microsite, the design challenge that we aimed to tackle
              was…
            </p>
          </div>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <section className="text-center flex flex-col items-center p-6 py-12 lg:p-16 bg-fuchsia-100/50">
          <h2 className="callout text-fuchsia-500 mb-4">Design Challenge</h2>
          <p className="text-xl lg:text-4xl max-w-3xl tracking-tight text-balance">
            How might we help visitors schedule their experience at Dutch Design
            Week to streamline their pre-event planning journey and ensure they
            don’t miss out on any part of the event and city culture that might
            be of interest to them?
          </p>
        </section>
      </section>

      <HalfSpacer></HalfSpacer>

      <div id="landing-page" className="scroll-mt-20">
        <section className="w-full px-6 max-w">
          <h2 className="callout text-fuchsia-500 mb-4">Landing page</h2>
          <p className="max-w-xl">
            The landing page gives users an overview of all resources the
            microsite provides, as well as a dropdown menu for users who want to
            directly navigate to specific pages. The landing page serves as a
            learning tool that directs the user to the itinerary and ticket
            purchasing resources.
          </p>
        </section>

        <div className="flex flex-col gap-2 px-6 max-w w-full">
          <div className="max-w w-full">
            <section className="w-full bg-[#FAFAFA] relative aspect-video">
              <Image
                src="/ddw/macbook.png"
                width={3200}
                height={1800}
                alt="Macbook mockup"
                className="absolute z-10 pointer-events-none"
              ></Image>
              <div className="w-[67.7%] relative top-[12.3444444%] left-[16.25%] h-[75.3%] overflow-y-scroll custom-scrollbar scroll-desktop">
                <Image
                  src="/ddw/landing-page.png"
                  width={2160}
                  height={8489}
                  alt="Landing page"
                  className="object-cover object-top"
                ></Image>
              </div>
            </section>
          </div>
          <MediaTag media="SCROLLABLE">
            A scrollable view of the microsite's landing page.
          </MediaTag>
        </div>
      </div>

      <HalfSpacer></HalfSpacer>

      <div>
        <section className="w-full px-6 max-w">
          <h2 className="callout text-fuchsia-500 mb-4">
            Planning with the itinerary
          </h2>
          <p className="max-w-xl">
            The itinerary page is a planning tool that provides information
            about event dates and times, transportation methods, and other
            resources all on one platform to help users customize an experience
            tailored to their interests and needs.
          </p>
        </section>

        <section className="w-full flex flex-col gap-2 px-6 max-w">
          <Image
            alt="Itinerary"
            width={3200}
            height={1800}
            src="/ddw/itinerary.png"
          ></Image>
          <MediaTag media="IMAGE">
            A user's itinerary, presenting all the events that they would like
            to attend.
          </MediaTag>
        </section>
      </div>

      <HalfSpacer></HalfSpacer>

      <div className="w-full px-6 max-w">
        <section className="">
          <h2 className="callout text-fuchsia-500 mb-4">
            Purchasing event tickets
          </h2>
          <p className="max-w-xl">
            The ticket purchasing page features a 4 step process to help users
            reserve their spots at Dutch Design Week. Together with the
            itinerary tool, the visitor’s pre-event experience is streamlined.
          </p>
        </section>

        <section className="w-full flex flex-col gap-2 max-w">
          <Image
            alt="Itinerary"
            width={3200}
            height={1800}
            src="/ddw/select-ticket.png"
          ></Image>
          <MediaTag media="IMAGE">
            A user at the beginning of the ticket purchasing flow.
          </MediaTag>
        </section>
      </div>

      <HalfSpacer></HalfSpacer>

      <div>
        <section className="w-full px-6 max-w">
          <h2 className="callout text-fuchsia-500 mb-4">
            Highlighting the Rootfull exhibition
          </h2>
          <p className="max-w-xl">
            This page features extensive information about the exhibition
            Rootfull. This selective micro-view of a particular exhibition
            illustrates the kind of experience visitors get at DDW, and provides
            the user with a better understanding of how they want to build their
            schedule for their visit to the festival.
          </p>
        </section>

        <div className="flex flex-col gap-2 px-6 max-w w-full">
          <div className="max-w w-full">
            <section className="w-full bg-[#FAFAFA] relative aspect-video">
              <Image
                src="/ddw/macbook.png"
                width={3200}
                height={1800}
                alt="Macbook mockup"
                className="absolute z-10 pointer-events-none"
              ></Image>
              <div className="w-[67.7%] relative top-[12.3444444%] left-[16.25%] h-[75.3%] flex items-center bg-black">
                <video
                  width={1600}
                  height={900}
                  src="/ddw/exhibit.mp4"
                  loop
                  muted
                  autoPlay
                ></video>
              </div>
            </section>
          </div>
          <MediaTag media="VIDEO">
            What the visitor sees when learning more about the exhibition{" "}
            <i>Rootfull</i>.
          </MediaTag>
        </div>
      </div>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full">
        <h2 className="callout text-fuchsia-500 mb-4">Takeaways</h2>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl mb-6">
            My most important takeaway from this project is that as a designer,
            I cannot wait for divine inspiration.
          </p>
        </div>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <p className="mb-6">
            To create a unique and distinctive visual direction, I couldn't wait
            for the skies to open up and reveal exactly what I need to do. I
            found the importance of drawing inspiration from design precedents
            like Massimo Vignelli and discern what makes his work effective.
          </p>

          <p>
            Another important takeaway was to trust the process. I was able to
            explore different ideas, experiment with various techniques, and
            iterate on designs.{" "}
            <i className="font-semibold">
              One thing I did well was avoiding tunnel vision
            </i>{" "}
            by knowing when something wasn’t working and switching gears by
            taking a step back and exploring alternative solutions rather than
            persistently focusing on the same approach.
          </p>
        </div>
      </section>
    </main>
  );
}
