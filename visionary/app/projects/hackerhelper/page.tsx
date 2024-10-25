import NavNotFixed from "@/components/nav-not-fixed";
import Spacer from "@/components/spacer";
import MediaTag from "@/components/media-tag";
import Image from "next/image";
import HalfSpacer from "@/components/half-spacer";
import Review from "@/components/review";
import Tag from "@/components/tag";

export default function HackerHelper() {
  return (
    <main className="max-w-[100vw] w-full flex flex-col items-center gap-4 lg:gap-8 pt-40 pb-32">
      <NavNotFixed></NavNotFixed>
      <section className="px-6 max-w w-full grid grid-cols-1 lg:grid-cols-3 mb-4 gap-6 lg:gap-40">
        <div className="col-span-2">
          <h1 className="large-title mb-6">HackerHelper</h1>
          <p className="p-xl font-light mb-4">
            In a month-long class project with a team of 2 UX researchers, I led
            the interface and interaction design for a help request ticketing
            system to faciliate communication between hackathon participants and
            mentors, ensuring hackers receive the guidance they need in a timely
            manner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-6">
          <div>
            <h2 className="callout mb-1">Team</h2>
            <p>Christina Raganit, Celine August Santoso, Gurnisha Rehal</p>
          </div>

          <div>
            <h2 className="callout mb-1">My Roles</h2>
            <p>
              Product Design, User Interface Design, Interaction Design,
              Prototyping, Wireframing
            </p>
          </div>

          <div>
            <h2 className="callout mb-1">Course</h2>
            <p>IAT 334 - Interface Design</p>
          </div>

          <div>
            <h2 className="callout mb-1">Duration</h2>
            <p>July 2024 (1 month)</p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w w-full flex flex-col gap-2">
        <img
          width={1600}
          height={900}
          src="/hackerhelper/main.png"
          alt="HackerHelper"
          className="rounded-lg"
        ></img>
        <MediaTag media="IMAGE">
          Mobile and desktop user interfaces for HackerHelper
        </MediaTag>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full">
        <h2 className="text-3xl tracking-tight mb-4">My Role</h2>
        <div className="grid lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="lg:mb-4">
              As the user interface designer, my primary responsibilities were
              to build the interactive prototype for the desktop and mobile
              layouts of HackerHelper on Figma. To enforce consistency and
              improve my efficiency for prototyping, I built a library of
              reusable UI components (buttons, forms, inputs, etc.) in Figma
              that can be adapted for both desktop and mobile, complete with
              established typography styles, colors, and spacing values.
            </p>
            <span className="text-neutral-400 flex items-center gap-1.5 italic invisible lg:visible">
              Check out some of the highlights below
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            </span>
          </div>
          <div>
            <p className="mb-4">
              I also worked alongside our UX researchers to visualize the user
              flows for both platforms, leveraging my previous background as a
              frontend developer to build layouts, screens, and interactions on
              Figma that were technically feasible and able to be implemented
              effectively. I continuously refined and improved the interactive
              prototypes based on user feedback and the results from user
              testing.
            </p>
            <span className="text-neutral-400 flex items-center gap-1.5 italic visible lg:invisible pt-2 lg:pt-0">
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

      <div className="mt-6 px-6 grid gap-6 max-w-[100rem]">
        <section className="grid gap-y-6 md:gap-6 grid-cols-3">
          <div className="flex items-center bg-[#4F46E5] col-span-2 rounded-lg">
            <div className="mx-auto aspect-video rounded-lg overflow-hidden h-[87.5%] shadow-2xl">
              <video
                src="/hackerhelper/highlight-9.mp4"
                width={1600}
                height={900}
                autoPlay
                controls
                loop
              ></video>
            </div>
          </div>
          <div className="bg-[#FFC14D] flex items-center rounded-lg">
            <img
              width={1080}
              height={1080}
              src="/hackerhelper/highlight-11.png"
              alt="HackerHelper"
              className="col-span-1 rounded-lg w-[87.5%] mx-auto"
            ></img>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-5 gap-y-6 md:gap-6">
          <img
            width={1080}
            height={1080}
            src="/hackerhelper/highlight-1.png"
            alt="HackerHelper"
            className="col-span-2 rounded-lg"
          ></img>
          <div className="col-span-3 flex items-center bg-[#4F46E5] rounded-lg">
            <img
              src="/hackerhelper/highlight-6.png"
              className="w-[90%] mx-auto"
            ></img>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-6">
          <img
            src="/hackerhelper/highlight-5.png"
            alt="HackerHelper"
            className="col-span-2 rounded-lg"
          ></img>
          <div className="flex items-center bg-[#FFC14D] col-span-1 rounded-lg">
            <img
              src="/hackerhelper/highlight-4.png"
              alt="HackerHelper"
              className="w-[55%] mx-auto "
            ></img>
          </div>
        </section>
      </div>

      <Spacer></Spacer>

      <section className="px-6 max-w w-full mb-4">
        <h2 className="callout text-indigo-500 mb-4">What's a Hackathon?</h2>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
          <div>
            <p className="p-lg">
              A hackathon is an event where students create tech projects to
              solve challenges within a set time, like 24–72 hours.
            </p>
          </div>
          <div>
            <p>
              As a computer science graduate who has had countless learning
              opportunities in hackathons, I sought to enhance the hackathon
              experience by first understanding the goals, behaviors, and needs
              of the kinds of people who are involved in these
              events—participants, mentors, and organizers.
            </p>
          </div>
        </div>
      </section>

      <HalfSpacer />

      <section className="px-6 max-w w-full ">
        <h2 className="callout text-indigo-500 mb-4">
          Who's Who in a Hackathon?
        </h2>
        <div className="grid gap-6 lg:gap-4 lg:grid-cols-3">
          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="text-xl font-medium mb-2">Participants</h3>
            <p>
              Collaborate in teams with other participants to develop projects
            </p>
          </div>
          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="text-xl font-medium mb-2">Organizers</h3>
            <p>Students responsible for planning and managing the hackathon</p>
          </div>
          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="text-xl font-medium mb-2">Mentors</h3>
            <p>
              Experienced professionals who provide guidance and assistance to
              participants
            </p>
          </div>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full">
        <h2 className="callout text-indigo-500 mb-4">Design Discovery</h2>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
          <p className="p-lg mb-4">
            Exploring the hackathon domain to identify a problem we could solve
          </p>
        </div>
        <div className="grid gap-6 mb-12 lg:gap-12 lg:grid-cols-2">
          <p>
            As an avid hackathon participant who has attended over 16 hackathons
            since the beginning of my academic journey, I could have created a
            solution based on my personal preferences. Instead, I made sure each
            design decision was based on data from user surveys, interviews, and
            usability testing.
          </p>

          <p>
            In the process of exploring this domain, we surveyed a total of 34
            organizers, participants, and mentors and interviewed 4 organizers,
            2 participants, and 2 mentors. In each stage of the design process
            of this project,{" "}
            <b>
              I made sure I was not designing for myself even though I am part
              of the target audience
            </b>
            .
          </p>
        </div>
        <div className="grid gap-6 lg:gap-4 lg:grid-cols-3">
          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="title-1  mb-1.5">3</h3>
            <p>User groups surveyed</p>
          </div>
          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="title-1 mb-1.5">34</h3>
            <p>Survey participants</p>
          </div>
          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="title-1 mb-1.5">8</h3>
            <p>User interviewees</p>
          </div>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <section className="rounded-lg text-center flex flex-col items-center p-6 py-12 lg:p-16 bg-red-300/[12%]">
          <h2 className="callout text-red-500 mb-4">The Problem</h2>
          <p className="text-xl lg:text-3xl max-w-3xl tracking-tight text-balance">
            The current system for requesting mentor help is <i>error-prone</i>,
            often resulting in unanswered requests.{" "}
          </p>
        </section>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
          <div>
            <Tag color="red">
              Paint Point <span className="text-xs">|</span> 1
            </Tag>
            <p className="text-xl mb-4">
              For large hackathons, high volumes of help requests can result in
              messages being unintentionally ignored or forgotten.
            </p>
            <p>
              Mentors also struggle with identifying whether or not a hacker’s
              help request has been completed, further hindering them from
              providing efficient support.
            </p>
          </div>
          <div>
            <Tag color="red">
              Paint Point <span className="text-xs">|</span> 2
            </Tag>
            <p className="text-xl mb-4">
              Hackers struggle to describe issues clearly and provide context to
              the problem they are facing.
            </p>
            <p>
              Hackers, especially beginners, often find it difficult to
              articulate their problems and do not provide key information,
              which results in misunderstandings and delays in receiving
              effective help from mentors. This complicates mentors' ability to
              assess and address issues efficiently.
            </p>
          </div>
          <div>
            <Tag color="red">
              Paint Point <span className="text-xs">|</span> 3
            </Tag>
            <p className="text-xl mb-4">
              If a mentor finds a request too complex, their attempts to locate
              a mentor who can help add further clutter to the message channels.
            </p>
            <p>
              This increases the chances of hacker messages being
              unintentionally missed, ignored, or forgotten. Some mentors are
              also hesitant to communicate their inability to solve a problem
              because they are scared of seeming incompetent, which causes
              further delays for hackers hoping to receive guidance.
            </p>
          </div>
          <div>
            <Tag color="red">
              Paint Point <span className="text-xs">|</span> 4
            </Tag>
            <p className="text-xl mb-4">
              Hackers are unable to provide feedback to mentors on their
              mentorship.
            </p>
            <p>
              Hackers expressed that mentors who actively help and regularly
              check-in lead to a more positive hackathon experience. However,
              without a feedback system for mentors, when hackers receive
              inadequate support and mentorship, they cannot provide input to
              help mentors improve their skills. This is detrimental, as poor
              mentorship can deter hackers from participating in future
              hackathons.
            </p>
          </div>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full">
        <p className="text-center mx-auto p-lg mb-4">
          What does this mean for mentors and hackers?
        </p>
        <div className="grid gap-6 lg:gap-6 lg:grid-cols-3">
          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="text-lg font-medium mb-2">Hackers lose time</h3>
            <p>
              Delayed mentor assistance and lost requests causes frustration for
              hackers as they spend valuable time waiting for help.
            </p>
          </div>

          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="text-lg font-medium mb-2">Mentors get burnt out</h3>
            <p>
              Information overload on multiple requests complicates mentors’
              ability to assess issues efficiently and find relevant requests.
            </p>
          </div>

          <div className="bg-white rounded-xl border p-6 border-neutral-100">
            <h3 className="text-lg font-medium mb-2">Hackers get frustrated</h3>
            <p>
              Low mentorship quality or unresolved requests makes hackers feel
              unsupported and ignored.
            </p>
          </div>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <section className="rounded-lg text-center flex flex-col items-center p-6 py-12 lg:p-16 bg-[#4F46E5]/[6%]">
          <h2 className="callout text-indigo-500 mb-4">Design Challenge</h2>
          <p className="text-xl lg:text-4xl max-w-3xl tracking-tight text-balance">
            How might we effectively connect hackers facing challenges with
            suitable mentors to ensure they receive the proper support and
            guidance in a timely manner?
          </p>
        </section>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="px-6 max-w w-full">
        <h2 className="callout text-indigo-500 mb-4">Our Solution</h2>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
          <div>
            <p className="p-lg">
              HackerHelper is a help request ticketing system to facilitate
              communication between hackers and mentors, ensuring hackers
              receive the guidance they need in a timely manner.
            </p>
          </div>
          <div>
            <p className="mb-4">
              This web application is designed to be responsive on both desktop
              and mobile, allowing hackers to submit help requests from their
              laptops while mentors can view new requests on their mobile
              devices as they assist hackers around the venue.
            </p>
            <p>
              Marley the Mentor and Hiccup the Hacker will be guiding us through
              how HackerHelper is used!
            </p>
          </div>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <Tag color="indigo">
          Step <span className="text-xs">|</span> 1
        </Tag>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 mb-6">
          <div>
            <p className="p-xl">
              Hiccup gets stuck on a CSS problem and requires mentor assistance.
            </p>
          </div>
          <p>
            From our interviews with mentors, we discovered that hackers often
            struggle with describing their issues clearly and providing
            sufficient information when sending help requests, thus complicating
            mentors’ ability to efficiently address issues. The guided prompts
            ensure that Hiccup is providing information that mentors require to
            solve the problem the hacker is facing.
          </p>
        </div>
        <div>
          <div className="bg-[#FFC14D] rounded-lg aspect-video flex items-center mb-2">
            <div className="mx-auto aspect-video rounded-lg overflow-hidden h-[87.5%] shadow-2xl">
              <video
                src="/hackerhelper/feature 1.mp4"
                width={1600}
                height={900}
                autoPlay
                controls
                loop
              ></video>
            </div>
          </div>
          <MediaTag media="VIDEO">
            Hiccup the Hacker creates a help request on the HackerHelper
            platform.
          </MediaTag>
        </div>
      </section>
      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <Tag color="indigo">
          Step <span className="text-xs">|</span> 2
        </Tag>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 mb-6">
          <p className="p-xl">
            Marley has some experience with CSS, so HackerHelper recommends
            Hiccup's request to Marley.
          </p>
        </div>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 mb-6">
          <p>
            The current system in place for hackers to request help and mentors
            to review help requests sent by hackers is inconvenient and
            ineffective, delaying mentors from finding a request that matches
            their skillset.
          </p>
          <p>
            HackerHelper recognizes that Marley has CSS experience and
            recommends Hiccup’s request. Our system uses skill-based filters,
            organizes requests by status, includes structured request details,
            and recommends requests to mentors based on skills, allowing Marley
            to evaluate the requests faster.
          </p>
        </div>
        <div>
          <div className="bg-[#4F46E5] rounded-lg aspect-video flex items-center mb-2">
            <div className="mx-auto rounded-lg overflow-hidden w-[25%]">
              <video
                src="/hackerhelper/feature 2.mp4"
                autoPlay
                controls
                loop
                width={784}
                height={1708}
              ></video>
            </div>
          </div>
          <MediaTag media="VIDEO">
            Marley the Mentor is recommended Hiccup's ticket because he's
            familiar with CSS.
          </MediaTag>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <Tag color="indigo">
          Step <span className="text-xs">|</span> 3
        </Tag>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 mb-6">
          <p className="p-xl">
            Marley accepts the request, informs Hiccup that they are on their
            way, and heads for Hiccup’s location.
          </p>
        </div>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 mb-6">
          <p>
            After accepting a request through HackerHelper, Marley can
            immediately notify and communicate directly with Hiccup within the
            comment section of the request.
          </p>
          <p>
            This centralized collaboration makes it easier for Marley to locate
            the request in his dashboard and refer back to if needed. This
            feature prevents message clutter in the channel during status
            updates, reducing the chance of important messages being overlooked.
          </p>
        </div>
        <div>
          <div className="bg-[#4F46E5] rounded-lg aspect-video flex items-center mb-2">
            <div className="mx-auto rounded-lg overflow-hidden w-[25%]">
              <video
                src="/hackerhelper/feature 3.mp4"
                autoPlay
                controls
                loop
                width={784}
                height={1708}
              ></video>
            </div>
          </div>
          <MediaTag media="VIDEO">
            Marley the Mentor updates Hiccup on their status through the
            comments of the request in HackerHelper.
          </MediaTag>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <Tag color="indigo">
          Step <span className="text-xs">|</span> 4
        </Tag>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 mb-6">
          <p className="p-xl">
            Unfortunately, Marley can’t solve the issue, but Sunny might be able
            to help! Marley refers Hiccup’s request to a new mentor.
          </p>
          <p>
            HackerHelper allows Marley to refer Hiccup’s requests to another
            mentor—Sunny—by tagging her in the comment section and updating her
            on the issue. Unlike current platforms where flows end at a mentor
            taking on a request, HackerHelper anticipates situations where a
            mentor might be unfit, thus preventing hackers from missing out on
            the help they need to succeed.
          </p>
        </div>

        <div>
          <div className="bg-[#4F46E5] rounded-lg aspect-video flex items-center mb-2">
            <div className="mx-auto rounded-lg overflow-hidden w-[25%]">
              <video
                src="/hackerhelper/feature 4.mp4"
                autoPlay
                controls
                loop
                width={784}
                height={1708}
              ></video>
            </div>
          </div>
          <MediaTag media="VIDEO">
            Marley the Mentor uses the Refer a Mentor feature in HackerHelper to
            help Hiccup get the help they need.
          </MediaTag>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <Tag color="indigo">
          Step <span className="text-xs">|</span> 5
        </Tag>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 mb-6">
          <p className="p-xl">
            Hiccup marks the request as complete and sees a dialog request for
            feedback.
          </p>
          <p>
            Once Hiccup’s CSS problem is resolved, he can mark the request as
            complete, triggering a feedback pop-up for the newly assigned
            mentor, Sunny. During our initial research, we discovered that
            hackers are very unlikely to fill out long feedback surveys. Hence,
            we implemented a short feedback form that encourages hackers to send
            immediate feedback that can be completed quickly and efficiently.
          </p>
        </div>
        <div>
          <div className="bg-[#FFC14D] rounded-lg aspect-video flex items-center mb-2">
            <div className="mx-auto aspect-video rounded-lg overflow-hidden h-[87.5%] shadow-2xl">
              <video
                src="/hackerhelper/feature 5.mp4"
                width={1600}
                height={900}
                autoPlay
                controls
                loop
              ></video>
            </div>
          </div>
          <MediaTag media="VIDEO">
            {" "}
            Hiccup the Hacker is prompted to give feedback to Sunny.
          </MediaTag>
        </div>
      </section>

      <HalfSpacer></HalfSpacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <Tag color="indigo">
          Step <span className="text-xs">|</span> 6
        </Tag>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 mb-6">
          <p className="p-xl">
            Hiccup also decides to give feedback to Marley so he can improve.
          </p>
          <p>
            Hiccup also decides to give feedback to his previous mentor, Marley,
            by using the message feedback feature. Our usability tests revealed
            that numerical ratings make mentors feel discouraged to mentor
            again, HackerHelper focuses on qualitative feedback that promotes a
            more valuable and supportive environment.
          </p>
        </div>
        <div>
          <div className="bg-[#FFC14D] rounded-lg aspect-video flex items-center mb-2">
            <div className="mx-auto aspect-video rounded-lg overflow-hidden h-[87.5%] shadow-2xl">
              <video
                src="/hackerhelper/feature 6.mp4"
                width={1600}
                height={900}
                autoPlay
                controls
                loop
              ></video>
            </div>
          </div>
          <MediaTag media="VIDEO">
            Hiccup the Hacker sends Marley mentor feedback from the Mentors tab
            in HackerHelper.
          </MediaTag>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="p-6 lg:py-0 max-w w-full">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
          <div>
            <Tag color="indigo">
              Learning <span className="text-xs">|</span> 1
            </Tag>
            <p className="text-xl mb-4">
              Figma has significant limitations in prototyping, particularly for
              complex component behaviors.
            </p>
            <p>
              For instance, it doesn’t allow user input, making it harder to
              gauge user testers' reactions to interactions like adding skills
              when signing up as a mentor for the first time. I hope to explore
              more prototyping tools that can better support these types of
              interactions.
            </p>
          </div>
          <div>
            <Tag color="indigo">
              Learning <span className="text-xs">|</span> 2
            </Tag>
            <p className="text-xl mb-4">
              A development background makes a huge difference when designing
              interactions!
            </p>
            <p>
              When a teammate suggested skill input through comma-separated
              values, I proposed an alternative based on previous experience
              developing a specific input method which I felt would be less
              error-prone. Users commended my suggestion for its ease of use
              during testing, and I was pleased to know my proposed interaction
              was technically achievable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
