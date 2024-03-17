import NavNotFixed from "@/components/nav-not-fixed";
import Spacer from "@/components/spacer";
import HalfSpacer from "@/components/half-spacer";
import QuarterSpacer from "@/components/quarter-spacer";
import Link from "@/components/link";
import Image from "next/image";
import MediaTag from "@/components/media-tag";

export default function ProudZebra() {
  return (
    <main className="max-w-[100vw] w-full flex flex-col items-center gap-4 lg:gap-8 pt-40 pb-32">
      <NavNotFixed></NavNotFixed>

      <section className="px-6 max-w w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-40">
        <div className="col-span-2">
          <h1 className="large-title mb-6">Proud Zebra</h1>
          <p className="p-xl font-light mb-6">
            In this week-long team project for the 2023 Eunoia UX Hackathon, I
            worked in a team of 4 to leverage the storytelling of Proud Zebra in
            their online store with the goal of driving engagement and
            empowering the 2SLGBTQIAP+ community. Out of 48 teams, our solution
            won 1st place!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-6">
          <div>
            <h2 className="callout mb-1">Team</h2>
            <p>Christina Raganit, Kaho Furukawa, Karishma Sen, Yuna Okada</p>
          </div>

          <div>
            <h2 className="callout mb-1">My Roles</h2>
            <p>UI Design, Interaction Design, Wireframing, Prototyping</p>
          </div>

          <div>
            <h2 className="callout mb-1">Duration</h2>
            <p>April 16–April 24, 2023 (1 week)</p>
          </div>

          <div>
            <h2 className="callout mb-1">Achievements</h2>
            <p>1st Place Winner (out of 48 teams)</p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          width={3200}
          height={1800}
          src="/proud-zebra/header.png"
          alt="Landing page"></Image>
        <MediaTag media="IMAGE">
          Redesigned landing page of Proud Zebra's online store in a device
          mockup.
        </MediaTag>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full">
        <h2 className="text-3xl tracking-tight mb-4">My Role</h2>
        <div className="grid lg:grid-cols-2 lg:gap-20">
          <div>
            <p>
              As the user interface designer and interaction designer, I was
              primarily responsible for creating mockups and wireframes on Figma
              and prototyping interactions to articulate the user flow of our
              proposed solutions.{" "}
            </p>
          </div>
          <div>
            <p className="mb-4">
              I adapted the branding and design language crafted by our visual
              designer into a library of interactive components and organized
              typography, color, and grid styles to ensure visual cohesion in
              the interface.
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
        </div>
      </section>

      <div className="mt-6 px-6">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-3 lg:col-span-2">
            <section className="w-full bg-[#f9ceff] relative aspect-video">
              <Image
                src="/proud-zebra/macbook-nav-only.png"
                width={3200}
                height={1800}
                alt="Macbook mockup"
                className="absolute z-10 pointer-events-none"></Image>
              <div className="w-[67.6%] relative translate-y-[32.2%] left-[16.25%] h-[66.1111%] overflow-y-scroll modern-scrollbar">
                <Image
                  src="/proud-zebra/product-page.png"
                  width={1280}
                  height={2249}
                  alt="Product page"
                  className="object-cover object-top"></Image>
              </div>
            </section>
          </div>
          <div className="w-full h-full grid grid-cols-3 col-span-3 lg:col-span-1 lg:grid-cols-2 lg:grid-rows-2 gap-6">
            <div className="w-full col-span-1 lg:col-span-2 grid grid-cols-6">
              <div className="bg-[#FF4F14] h-full"></div>
              <div className="bg-[#FFF0E9] h-full"></div>
              <div className="bg-[#4747F3] h-full"></div>
              <div className="bg-[#E3C6FF] h-full"></div>
              <div className="bg-[#01B99F] h-full"></div>
              <div className="bg-[#DAF85E] h-full"></div>
            </div>

            <Image
              src="/proud-zebra/love.png"
              width={1620}
              height={1842}
              alt="Two people in love"
              className="col-span-1 object-cover h-full"></Image>

            <Image
              src="/proud-zebra/product.png"
              width={1306}
              height={1306}
              alt="Pin from proud zebra"
              className="col-span-1 object-cover h-full"></Image>
          </div>
        </section>
        <section className="mt-6 flex flex-col lg:grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 h-full bg-[#4747f3]">
            <Image
              src="/proud-zebra/mobile-landing-small.png"
              width={1600}
              height={900}
              alt="Mobile landing page"
              className="object-cover h-full object-top"></Image>
          </div>
          <div className="lg:col-span-2 bg-[#DAF85E] aspect-video">
            <section className="bg-transparent relative aspect-video">
              <Image
                src="/proud-zebra/macbook.png"
                width={3200}
                height={1800}
                alt="Macbook mockup"
                className="absolute z-10 pointer-events-none"></Image>
              <div className="w-[67.67%] relative translate-y-[41%] left-[16.25%] h-[62.1111%] overflow-y-scroll modern-scrollbar">
                <Image
                  src="/proud-zebra/landing-page.png"
                  width={2160}
                  height={12310}
                  alt="Landing page"
                  className="object-cover object-top"></Image>
              </div>
            </section>
          </div>
        </section>
        <section className="mt-6 w-full flex justify-center bg-[#FF4F14]">
          <Image
            src="/proud-zebra/mobile-screens.png"
            width={1600}
            height={900}
            alt="Landing page"
            className="object-cover object-top"></Image>
        </section>
      </div>

      <Spacer></Spacer>

      <section className="max-w w-full px-6">
        <div className="grid lg:grid-cols-2 items-center lg:gap-20">
          <div>
            <h2 className="callout text-purple-500 mb-4">Our Client</h2>
            <p className="p-lg mb-6">
              Proud Zebra is a Vancouver-based small business owned by Delwin
              and Jimmy.
            </p>
            <p>
              Delwin and Jimmy are a queer couple who strive to create a
              welcoming and inclusive experience for all their customers, aim to
              raise awareness about LGBTQ+ issues that individuals face daily by
              creating accessories that empower and celebrate this community,
              enabling self-expression for all.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/proud-zebra/proud-zebra.webp"
              width={2032}
              height={1355}
              alt="Delwin and Jimmy"></Image>
            <MediaTag media="IMAGE">
              Delwin and Jimmy selling their products at British Columbia's 2023
              Pride Festival.
            </MediaTag>
          </div>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Problem Space</h2>
        <div className="grid lg:grid-cols-2  lg:gap-20">
          <p className="p-lg">
            Proud Zebra identified that their current digital touchpoints are
            not effectively engaging customers and driving sales.
          </p>
          <p className="">
            The small business noticed that their in-store and market experience
            is much more effective in promoting their products, story, and
            company values. As a team, we wondered how we might possibly enhance
            the customer experience for those shopping online.
          </p>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <section className="text-center flex flex-col items-center p-6 py-12 lg:p-16 bg-purple-200/30 rounded-2xl">
          <h2 className="callout text-purple-500 mb-4">Design Challenge</h2>
          <p className="text-xl lg:text-4xl max-w-3xl tracking-tight text-balance">
            How might we transform Proud Zebra's storytelling experience into a
            digital solution that empowers the LGBTQ+ community, drives
            engagement and fosters a sense of brand loyalty?
          </p>
        </section>
      </section>

      <HalfSpacer></HalfSpacer>
      <QuarterSpacer></QuarterSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Landing Page</h2>
        <div className="grid lg:grid-cols-2  lg:gap-20">
          <p className="p-xl">
            Balancing product offerings with brand story and values
          </p>
          <p className="">
            In organizing the content in the landing page to leverage the story
            of Proud Zebra, visitors can gain a deeper understanding of what
            this LGBTQ-owned small business does and stands for.
          </p>
        </div>
      </section>

      <div className="lg:-mt-4 flex flex-col gap-2 px-6 max-w w-full">
        <div>
          <section className="bg-transparent relative aspect-video">
            <Image
              src="/proud-zebra/macbook.png"
              width={3200}
              height={1800}
              alt="Macbook mockup"
              className="absolute z-10 pointer-events-none"></Image>
            <div className="w-[67.6%] relative translate-y-[39.9%] left-[16.25%] h-[62.5111%] overflow-y-scroll modern-scrollbar">
              <Image
                src="/proud-zebra/landing-page.png"
                width={2160}
                height={12310}
                alt="Landing page"
                className="object-cover object-top"></Image>
            </div>
          </section>
        </div>
        <MediaTag media="SCROLLABLE">
          A scrollable view of the redesigned landing page of Proud Zebra.
        </MediaTag>
      </div>

      <HalfSpacer></HalfSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Shop Page</h2>
        <div className="grid lg:grid-cols-2  lg:gap-20">
          <p className="p-xl">
            Personalizing product filtering to streamline product discovery
          </p>
          <p className="">
            By allowing users to sort through the different categories of
            products and filter by multiple identities, they can easily and
            quickly discover products that truly represent their authentic
            selves.
          </p>
        </div>
      </section>

      <section className="lg:-mt-4 max-w w-full px-6 flex flex-col gap-2">
        <div className="">
          <section className="w-full relative aspect-video">
            <Image
              src="/proud-zebra/macbook-nav-only.png"
              width={3200}
              height={1800}
              alt="Macbook mockup"
              className="absolute z-10 pointer-events-none"></Image>
            <div className="w-[67.7%] relative top-[21.444444%] left-[16.25%] h-[66.1111%]">
              <video
                width={1620}
                height={892}
                src="/proud-zebra/shop-page.mp4"
                loop
                muted
                autoPlay></video>
            </div>
          </section>
        </div>
        <MediaTag media="VIDEO">
          A visitor filters all the products in the catalog by their identity
          and searches only for enamel pins.
        </MediaTag>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Product Page</h2>
        <div className="grid lg:grid-cols-2  lg:gap-20">
          <p className="p-xl">
            Highlighting the meaningful stories behind each product
          </p>
          <p className="">
            Each product showcases the story behind it, highlighting its unique
            and meaningful background. We feature customer stories within the
            reviews section to foster community and connection.
          </p>
        </div>
      </section>

      <section className="lg:-mt-4 max-w w-full px-6 flex flex-col gap-2">
        <div className="">
          <section className="w-full relative aspect-video">
            <Image
              src="/proud-zebra/macbook-nav-only.png"
              width={3200}
              height={1800}
              alt="Macbook mockup"
              className="absolute z-10 pointer-events-none"></Image>
            <div className="w-[67.6%] relative top-[21.444444%] left-[16.25%] h-[66.1111%] overflow-y-scroll modern-scrollbar">
              <Image
                src="/proud-zebra/product-page.png"
                width={1280}
                height={2249}
                alt="Product page"
                className="object-cover object-top"></Image>
            </div>
          </section>
        </div>
        <MediaTag media="SCROLLABLE">
          A scrollable view of the product page for the Non-Binary Asexual Medal
          Pin, where you'll also be able to read the featured story of fictional
          customer @AceAdventurerArya.
        </MediaTag>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">About Page</h2>
        <div className="grid lg:grid-cols-2  lg:gap-20">
          <p className="p-xl">
            Leveraging the brand story and values of Proud Zebra
          </p>
          <p className="">
            To establish authenticity and trust between the company and the
            user, we highlighted the brand story and values of Proud Zebra.
            Similar to the in-person experience, this helps to foster a stronger
            engagement between the brand and its customers.
          </p>
        </div>
      </section>
      <div className="lg:-mt-4 flex flex-col gap-2 px-6 max-w w-full">
        <div>
          <section className="bg-transparent relative aspect-video">
            <Image
              src="/proud-zebra/macbook.png"
              width={3200}
              height={1800}
              alt="Macbook mockup"
              className="absolute z-10 pointer-events-none"></Image>
            <div className="w-[67.6%] relative top-[25.444444%] left-[16.25%] h-[62.1111%] overflow-y-scroll modern-scrollbar">
              <Image
                src="/proud-zebra/about-page.png"
                width={1280}
                height={3354}
                alt="Landing page"
                className="object-cover object-top"></Image>
            </div>
          </section>
        </div>
        <MediaTag media="SCROLLABLE">
          A scrollable view of the redesigned about page, telling the story of
          Proud Zebra.
        </MediaTag>
      </div>

      <Spacer></Spacer>

      <section className="max-w w-full px-6">
        <h2 className="p-xl mb-4">User Research Methodologies</h2>
        <div className="grid  lg:grid-cols-2 gap-6 lg:gap-20">
          <p>
            We anonymously surveyed 38 2SLGBTQIAP+ individuals between the ages
            of 18-39 with the goal of gaining an in-depth understanding of their
            perceptions on self-expression, involvement within the 2SLGBTQIAP+
            community, and behaviors when shopping at small businesses. We also
            interviewed 5 individuals to gain an in-depth understanding of their
            relationships with small businesses who are associated with the
            2SLGBTQIAP+ community.
          </p>
        </div>
      </section>
      <HalfSpacer></HalfSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Key Insight</h2>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20">
          <p className="p-lg">
            Consumers are more likely to purchase products from 2SLGBTQIAP+
            businesses if the brand story resonates with them.
          </p>
          <p>
            Participants expressed that the brand must communicate a genuine
            connection to the 2SLGBTQIAP+ community. When asked about brands
            targeting the community, interviewees emphasized that those not
            actively supporting the community despite marketing towards them are
            causing more harm than good.
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-2 max-w w-full px-6 ">
        <Image
          alt="Why people prefer shopping at small businesses"
          width={1600}
          height={900}
          src="/proud-zebra/survey-questions-purple.png"
          className="border border-zinc-200/60 rounded-2xl"></Image>
        <MediaTag media="IMAGE">
          Survey participants' responses to why they prefer shopping at small
          businesses.
        </MediaTag>
      </div>

      <HalfSpacer></HalfSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Key Insight</h2>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20">
          {" "}
          <p className="p-xl">
            Transparent commitment to diversity, equity, and inclusion fosters
            brand trust.
          </p>
          <p className="">
            The results from our survey confirmed our hypothesis that users were
            more compelled to trust brands who are transparent about their
            commitment to diversity, equity, and inclusion (DEI). The following
            are also some insights that we received:
          </p>
        </div>
      </section>

      <section className="max-w px-6 w-full grid sm:grid-cols-3 gap-6 lg:gap-6">
        <div className="bg-[#f6eefe]/60 p-6 lg:p-8 rounded-2xl">
          <h2 className="title-1 mb-3 text-purple-500">76%</h2>
          <p>of respondents believe that self-expression is important</p>
        </div>
        <div className="bg-[#f6eefe]/60 p-6 lg:p-8 rounded-2xl">
          <h2 className="title-1 mb-3 text-purple-500">69.4%</h2>
          <p>leaned towards trusting a brand with a strong DEI commitment</p>
        </div>
        <div className="bg-[#f6eefe]/60 p-6 lg:p-8 rounded-2xl">
          <h2 className="title-1 mb-3 text-purple-500">63.9%</h2>
          <p>emphasized the value of transparency in a company's values</p>
        </div>
      </section>

      <div className="flex flex-col gap-2 max-w w-full px-6 ">
        <Image
          alt="Why people prefer shopping at small businesses"
          width={1600}
          height={900}
          src="/proud-zebra/self-expression.png"
          className="border border-zinc-200/60 rounded-2xl"></Image>
        <MediaTag media="IMAGE">
          Survey participants' responses to why they prefer shopping at small
          businesses.
        </MediaTag>
      </div>

      <Spacer></Spacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">
          We Blundered, but We Learned From It
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20">
          <p className="p-xl">
            A mistake we made while writing the survey revealed the critical
            need for 2SLGBTQIAP+ individuals to be able to identify themselves
            with their preferred identities.
          </p>
          <div>
            <p className="mb-6">
              When our survey was first released, participants were asked what
              they identified as, but we had neither an exhaustive list of
              orientations and gender identities as well as the ability to
              select multiple options.
            </p>
            <p>
              “I’m both non-binary <i>and</i> a lesbian,” explains a
              participant. This respondent hated categorizing themselves as
              “Other”, as it made them feel marginalized and overlooked. I had a
              hunch for a feature that could improve product discovery for these
              individuals.
            </p>
          </div>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Secondary Research</h2>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20">
          <div>
            <p className="p-lg mb-6">
              From our secondary research, we discovered from{" "}
              <Link
                link=""
                color="purple"
                text="a survey of 2,367 2SLGBTQIAP+ adults"
                size="large"></Link>{" "}
              that they strongly prefer brands that support causes that align
              with their values.
            </p>
            <p className="mb-4">
              We performed secondary research to validate the findings of our
              survey. In doing so, we surfaced the following insights:
            </p>
          </div>
          <div className="">
            <ul className="list-disc list-inside leading-relaxed">
              <li className="mb-1.5">
                74% are likely to consider brands that support nonprofits and/or
                causes that are important to them as a LGBTQ+ person.
              </li>
              <li className="mb-1.5">
                71% said they are likely to remain loyal to a brand they believe
                to be very friendly and supportive to the LGTBQ+ community.
              </li>
              <li>
                With regard to advertising, 47% are more likely to consider
                purchasing a company's products or services when they see an
                advertisement that has been clearly tailored to "a gay audience
                with gay imagery and people and speaks to [them] as a gay
                person.”
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-2 max-w w-full px-6 ">
        <Image
          alt="Why people prefer shopping at small businesses"
          width={1600}
          height={900}
          src="/proud-zebra/lgbt-brands.png"
          className="border border-zinc-200/60 rounded-2xl"></Image>
        <MediaTag media="IMAGE">
          Findings from a 2011 poll which surveyed 2,367 LGBTQ+ adults on their
          likeliness to consider brands which support causes important to them.
        </MediaTag>
      </div>

      <Spacer></Spacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Brainstorming</h2>
        <div className="grid lg:items-center gap-6 lg:grid-cols-2 lg:gap-20 mb-6">
          <div>
            <p className="p-lg mb-6">
              We sought to highlight the brand story of Proud Zebra to build
              trust between the small business and potential customers. But how?
            </p>
            <p className="mb-6 ">
              Unsure how to solve the problem and deliver value for Proud Zebra,
              we began generating ideas on how we might highlight the brand
              story.
            </p>
            <p>
              The team had plenty of ideas, like starting a podcast and writing
              a weekly newsletter and adding a thank you note to every purchase.
              I was hesitant, however, because I considered feasibility
              foremost. I wanted to deliver a solution to Proud Zebra that they
              could implement, and they might not have the resources for a
              complex technical solution or something as time-consuming as a
              podcast or a newsletter.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              width={800}
              height={540}
              src="/proud-zebra/sketches.png"
              alt="Christina, Karishma, and Yuna exploring the brainstormed solutions"></Image>
            <MediaTag media="IMAGE">
              Christina, Karishma, and Yuna exploring the solutions the team
              came up with while brainstorming
            </MediaTag>
          </div>
        </div>
      </section>

      <Spacer></Spacer>

      {/* <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">
          Low fidelity wireframes
        </h2>
        <div className="grid lg:grid-cols-2">
          <p>
            Based on the solutions we explored while brainstorming, I created
            low-fidelity wireframes to prepare for the usability testing.
            Despite being low-fidelity, I knew some of the tasks in the
            usability testing would involve the selection of specific products;
            hence, I applied imagery from the Proud Zebra website into the
            navigational elements of the low-fidelity prototype so that the
            usability test would more closely mimic a real-world situation.
          </p>
        </div>
      </section>

      <Spacer></Spacer> */}

      <section className="max-w w-full px-6 grid lg:grid-cols-2">
        <div>
          <p className="p-xl mb-4">
            This part of the case study is still under construction.
          </p>
          <p>Please check back later!</p>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-purple-500 mb-4">Reflection</h2>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="p-xl mb-4">
              Take into careful consideration the constraints of your client.
            </p>
            <p className="">
              By doing so, my team and I were able to deliver a realistic
              solution that makes the most efficient use of the resources that
              Proud Zebra has. Our project had been criticized by other hackers
              for being “too simple” but in my view, the simplicity of our
              proposal and our willingness to work within the limitations of the
              small business highlight our deep understanding of the challenges
              faced by the small business.
            </p>
          </div>

          <div>
            <p className="p-xl mb-4">
              Think about the technical feasibility of your proposed UX
              solution.
            </p>
            <p className="">
              This is something that I do for every single one of my projects as
              a hackathon veteran with a software development background. I took
              charge in creating a development store on Shopify to prove that it
              can be done within the constraints of the small business, and one
              of the feedback that we received from the judges was that the test
              of feasibility was a great move for this project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
