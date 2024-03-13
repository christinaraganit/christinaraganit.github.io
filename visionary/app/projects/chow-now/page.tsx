import Nav from "@/components/nav";
import Spacer from "@/components/spacer";
import HalfSpacer from "@/components/half-spacer";
import Image from "next/image";
import MediaTag from "@/components/media-tag";
import Link from "@/components/link";
import NavNotFixed from "@/components/nav-not-fixed";

export default function ChowNow() {
  return (
    <main className="max-w-[100vw] overflow-x-clip w-full flex flex-col items-center gap-4 lg:gap-10 pt-40 pb-32">
      <NavNotFixed />

      <section className="px-6 max-w w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-40">
        <div className="lg:col-span-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-6">
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
            <p>
              First Place Winner (out of 44 teams) and Best Design Award at
              cmd-f 2023
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 mt-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/chow-now/header.png"
          width={1920}
          height={1080}
          alt="UI of Chow Now"></Image>
        <MediaTag media="IMAGE">Final solution in a device mockup</MediaTag>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full">
        <h2 className="callout text-orange-600 mb-4">Content Warning</h2>
        <div className="grid w-full lg:grid-cols-2 gap-6 lg:gap-20">
          <p className="p-xl">
            The following content may contain mentions of domestic abuse and
            violence, which may be distressing or triggering for some
            individuals.
          </p>
          <div>
            <p className="mb-2">
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

      <section className="px-6 max-w w-full">
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
      
      <section className="max-w-full w-full">
        <div className="grid lg:grid-cols-2 p-6 pt-0 gap-6">
          <Image
            src="/chow-now/main-screens.png"
            width={3200}
            height={1800}
            alt="Chow Now UI"></Image>
          <Image
            src="/chow-now/screens.png"
            width={3200}
            height={1800}
            alt="Chow Now"></Image>
        </div>

        <div className="grid lg:grid-cols-2 p-6 pt-0 gap-6">
          <Image
            src="/chow-now/type-and-colors.png"
            width={3200}
            height={1800}
            alt="Type and colors of Chow Now"></Image>
          <Image
            src="/chow-now/images.png"
            width={3200}
            height={1800}
            alt="Presenting and winning Chow Now"></Image>
        </div>
      </section>
      <Spacer></Spacer>

      <section className="px-6 max-w w-full ">
        <h2 className="callout text-orange-500 mb-4">Problem Space</h2>
        <div className="grid gap-6 lg:gap-20 lg:grid-cols-2">
          <div>
            <p className="p-xl">
              In 2019, a woman in Ohio reported an incident of domestic abuse by{" "}
              <Link
                link="https://www.cnn.com/2019/11/26/us/what-to-do-if-you-cant-speak-to-911/index.html"
                text="pretending to order a pizza."
                color="orange"
                size="large"></Link>
            </p>
          </div>
          <div>
            <p>
              The discretion was imperative because the abuser was in the same
              room as her. Fortunately, the situation ended well for the caller,
              but according to April Heinze, 911 operations director for the
              National Emergency Number Association (NENA), there’s “no
              universal code language to let dispatchers know you’re in
              trouble”.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 max-w w-full grid lg:grid-cols-2 gap-6 lg:gap-20">
        <p className="p-lg">
          And it’s imperative that victims report cases of domestic violence
          discreetly, because attempting to leave puts them in danger.
        </p>
        <p>
          The most dangerous time for a victim of domestic violence is when they
          attempt to leave their abuser. Based on{" "}
          <Link
            link="https://www.ojp.gov/pdffiles1/nij/181867.pdf"
            text="interviews"
            color="orange"
            size="medium"></Link>{" "}
          with men who have murdered their wives, it appears that the most
          common events that trigger such violence are either threats of
          separation by their partners or actual separation.
        </p>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full">
        <div>
          <h2 className="callout text-orange-500 mb-4">Understanding Users</h2>
          <div className="grid lg:grid-cols-2 w-full gap-6 lg:gap-20">
            <div>
              <p className="p-xl">
                I conducted secondary research to uncover strategies for
                creating an app that could operate discreetly.
              </p>
            </div>

            <div>
              <p className="">
                According to research from{" "}
                <Link
                  link="https://www.policyschool.ca/wp-content/uploads/2017/06/Domestic-Violence-Boutilier-Jadidzadeh-Esina-Wells-Kneebone.pdf"
                  text="the University of Calgary"
                  color="orange"
                  size="medium"></Link>{" "}
                and{" "}
                <Link
                  link="https://journals.sagepub.com/doi/full/10.1177/0022427813494843"
                  text="Lancaster University"
                  color="orange"
                  size="medium"></Link>
                , reports of domestic violence incidents increase during major
                sporting events. Curious, I began to explore the habits and
                behaviors of sports enthusiasts and encountered{" "}
                <Link
                  link="https://www.predicthq.com/blog/nfl-viewership"
                  text="a survey of 2,500 NFL fans"
                  color="orange"
                  size="medium"></Link>
                , where 76% reported that ordering food was a part of their
                plans for watching the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>
      <section className="p-6 lg:py-0 max-w w-full">
        <section className="text-center flex flex-col items-center p-6 py-12 lg:p-16 bg-[#FFF4EB] rounded-2xl">
          <h2 className="callout text-orange-500 mb-4">Design Challenge</h2>
          <p className="text-xl lg:text-4xl max-w-3xl tracking-tight text-balance">
            How might we offer victims of domestic violence a discreet way to
            report incidents of abuse and facilitate their access to the
            necessary aid?
          </p>
        </section>
      </section>
      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="callout text-orange-500 mb-4">Solution</h2>
          <p className="large-title mb-4">Chow Now</p>
          <p className="max-w-2xl p-lg font-light">
            is an app disguised as a typical food delivery application which
            enables victims of domestic violence to confidentially report
            incidents of abuse to local authorities with discretion, ensuring
            their safety while avoiding suspicion from their abusers.
          </p>
        </div>
      </section>
      <HalfSpacer></HalfSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-orange-500 mb-4">Proposed Feature</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            Enhancing the efficiency of reporting incidents with location
            services
          </p>
          <p className="mb-4 lg:mb-0">
            By requesting the user's location with location services, Chow Now
            streamlines the reporting process of domestic violence incidents to
            local authorities and emergency contacts, which is crucial for
            victims as it enables faster and more accurate response times.
          </p>
        </div>
      </section>
      <section className="max-w px-6 w-full">
        <Image
          width={1600}
          height={900}
          src="/chow-now/solution-1.png"
          alt="Chow Now requests the location of the user"
          className="mb-2"></Image>
        <MediaTag media="IMAGE">
          A dialog appears, requesting the user's location.
        </MediaTag>
      </section>

      <HalfSpacer />

      <section className="max-w w-full px-6">
        <h2 className="callout text-orange-500 mb-4">Proposed Feature</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            Facilitating the ability to report incidents of domestic violence
          </p>
          <p className="mb-4 lg:mb-0">
            Users can report incidents of domestic violence to local authorities
            by placing an order from any “restaurant”. Subsequently, users can
            provide crucial details regarding the involved parties, the nature
            of the emergency, and the incident's timing.
          </p>
        </div>
      </section>
      <section className="max-w px-6 w-full">
        <Image
          width={1600}
          height={900}
          src="/chow-now/solution-2.png"
          alt="Chow Now requests the location of the user"
          className="mb-2"></Image>
        <MediaTag media="IMAGE">
          A user attempts to report an incident by "placing an order" from a
          restaurant.
        </MediaTag>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-orange-500 mb-4">Proposed Feature</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            Providing discretion by allowing toggling between different views
          </p>
          <p className="mb-4 lg:mb-0">
            These view toggling controls maximize discretion. To appear
            inconspicuous, relevant information about local restaurants is
            displayed, such as its available orders.
          </p>
        </div>
      </section>
      <section className="max-w px-6 w-full">
        <Image
          width={1600}
          height={900}
          src="/chow-now/solution-3.png"
          alt="Chow Now requests the location of the user"
          className="mb-2"></Image>
        <MediaTag media="IMAGE">
          A user can toggle between different views to avoid raising the
          suspicion of their abuser.
        </MediaTag>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-orange-500 mb-4">Proposed Feature</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            Guiding users with a comprehensive onboarding flow
          </p>
          <p className="mb-4 lg:mb-0">
            In Chow Now, certain controls deviate from the standard of typical
            takeout delivery apps. This intentional design choice enables users
            to access resources and report incidents of abuse to local
            authorities while prioritizing discretion. A thorough onboarding
            flow provides users with a clear understanding of how to navigate
            the app effectively.
          </p>
        </div>
      </section>
      <section className="max-w px-6 w-full">
        <Image
          width={1600}
          height={900}
          src="/chow-now/onboarding.png"
          alt="Onboarding screens of Chow Now"
          className="mb-2"></Image>
        <MediaTag media="IMAGE">
          The screens of the onboarding flow of Chow Now.
        </MediaTag>
      </section>

      <Spacer></Spacer>
      <section className="max-w w-full px-6">
        <h2 className="callout text-orange-500 mb-4">
          Learnings and Takeaways
        </h2>
        <div className="grid w-full gap-6 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            One big takeaway from this project was the importance of
            prioritization, as some features are more integral to the MVP than
            others.
          </p>
          <p>
            Something I did well was deciding very quickly what key features
            needed to be done. However, I should have retained this mindset as I
            was coding. I spent almost three hours trying to figure out how to
            change the default font of the app as it was my first time learning
            React Native, and honestly, I never quite figured it out. That was
            not the best use of the very little time I had...
          </p>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w w-full px-6">
        <h2 className="callout text-orange-500 mb-4">Reflection</h2>
        <div className="grid w-full gap-6 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            I was uncertain about taking on this project for the hackathon, but
            I’m immensely grateful that I did.
          </p>
          <div>
            <p className="mb-6">
              In my second-year Information Design class, we were tasked with{" "}
              <a
                href="../projects/cheekys-cannabis-merchants"
                className="hover:text-orange-500 focus:text-orange-500">
                ideating and designing a digital product to address a user need
              </a>
              . When I shared the idea of Chow Now with my TAs, they expressed
              reservations due to the challenges involved in researching this
              subject. However, I saw it as an opportunity and decided to
              proceed with the project for the hackathon.
            </p>
            <p>
              Looking back, I am immensely grateful for that choice. I believe
              that designers have the responsibility to create meaningful
              solutions that address real needs and solve real problems.
              Engaging in research within this problem space has been an
              invaluable learning journey for me, and I am honored that Chow Now{" "}
              <Link
                text="won both 1st Place and Best Design at cmd-f 2023"
                link="https://www.linkedin.com/posts/christinaraganit_i-showed-up-at-nwpluss-cmd-f-hackathon-this-activity-7041606342070980608-JFHO?utm_source=share&utm_medium=member_ios"
                color="orange"
                size="medium"></Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
