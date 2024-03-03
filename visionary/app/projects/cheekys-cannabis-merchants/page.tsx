import Nav from "@/components/nav";
import Image from "next/image";
import Spacer from "@/components/spacer";
import Button from "@/components/button";

export default function Cheekys() {
  return (
    <main className="max-w-[100vw] overflow-x-clip w-full flex flex-col items-center gap-10 pt-40 pb-32">
      <Nav></Nav>
      <nav className="w-full bg-white/90 backdrop-blur-lg border-b border-zinc-200/60 fixed z-20 h-16 hidden sm:flex justify-between items-center left-1/2 -translate-x-1/2 top-0">
        <div className="px-6 flex items-center w-full max-w-[80rem] mx-auto">
          <div className="w-full">
            <a href="/">
              <Image
                src="/headshot.png"
                width={100}
                height={100}
                className="w-9 h-9 rounded-full"
                alt="A UX Designer with glasses and curled bangs"></Image>
            </a>
          </div>
          <div className="flex">
            <Button
              link=" "
              variant="tertiary"
              text="Home"></Button>
            <Button
              link=" "
              variant="tertiary"
              text="About"></Button>
            <Button
              link=" "
              variant="tertiary"
              text="Projects"></Button>
            <div className="pl-1">
              <Button
                link=" "
                variant="primary"
                text="Resume"></Button>
            </div>
          </div>
        </div>
      </nav>
      <section className="px-6 max-w-[80rem] w-full grid lg:grid-cols-3 lg:gap-40">
        <div className="col-span-2">
          <h1 className="large-title mb-6">Cheeky's Cannabis Merchants</h1>
          <p className="p-xl font-light">
            In this 4-week academic team project, we digitized the in-store
            experience of Cheeky's Cannabis Merchants by designing additional
            features for their online store, providing first-time cannabis
            consumers with the knowledge they need to comfortably make a
            purchase.
          </p>
        </div>

        <div className="grid gap-6 mb-6">
          <div>
            <h2 className="callout mb-1">Team</h2>
            <p>
              Brianna Mei, Christina Raganit, Madeline Ho, Michael Dresler,
              Simon Wong Chung
            </p>
          </div>

          <div>
            <h2 className="callout mb-1">Roles</h2>
            <p>UI Design, Wireframing, Interaction Design, Prototyping</p>
          </div>

          <div>
            <h2 className="callout mb-1">Course</h2>
            <p>IAT 235 | Information Design</p>
          </div>

          <div>
            <h2 className="callout mb-1">Duration</h2>
            <p>February 7–28, 2023 (4 weeks)</p>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-[80rem] w-full flex">
        <Image
          src="/cheekys/desktop.png"
          width={3840}
          height={2160}
          alt="Cheekys UI"></Image>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w-[80rem] w-full">
        <h2 className="text-3xl tracking-tight mb-4">Overview</h2>
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="mb-4">
              As the user interface designer and interaction designer, I was
              primarily responsible for creating mockups and wireframes on Figma
              and prototyping interactions to articulate the user flow of our
              proposed solutions. I created a library of interactive components
              and organized typography, color, and grid styles to ensure visual
              cohesion in the interface.
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
        <Image
          src="/cheekys/highlights-1.png"
          width={3200}
          height={1800}
          className="p-6"
          alt="Cheekys UI"></Image>

        <div className="grid lg:grid-cols-2 p-6 pt-0 gap-6">
          <Image
            src="/cheekys/highlights.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"></Image>
          <Image
            src="/cheekys/design-system.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"></Image>
        </div>

        <Image
          src="/cheekys/highlights-3.png"
          width={3200}
          height={1800}
          className="p-6 pt-0"
          alt="Cheekys UI"></Image>
      </section>

      <Spacer></Spacer>
      <section className="px-6 max-w-[80rem] w-full">
        <h2 className="callout text-green-500 mb-4">Problem Space</h2>{" "}
        <p className="p-xl mb-6">"It's the wild west."</p>
        <div className="grid w-full lg:grid-cols-2 gap-20">
          <p className="p-lg">
            There’s a wide variety of cannabis products and consumption methods
            that can vary from store to store, and first-time cannabis consumers
            often feel lost navigating the use of cannabis without guidance from
            their doctors.
          </p>
          <div>
            <p className="mb-6">
              However, during their first visit to a dispensary, employees (or
              budtenders) are able to explain product options, make suggestions
              based on the consumers’ preferences and needs, and answer
              questions about dosage. Unfortunately, online shoppers miss out on
              this guidance.
            </p>
            <p>
              In a survey studying responsible cannabis use, 67% of Ontarians
              believe that retailers must educate consumers on cannabis—both
              in-store and online. Thus, it’s imperative that the in-store
              shopping experience provided to consumers can also be experienced
              in the digital space.
            </p>
          </div>
        </div>
      </section>
      <Spacer></Spacer>

      <section className="p-6 lg:py-0 max-w-[80rem] w-full">
        <section className="text-center flex flex-col items-center p-6 lg:p-16 bg-[#F7F6F1]/70 rounded-2xl">
          <h2 className="callout text-green-500 mb-4">Design Challenge</h2>
          <p className="text-4xl max-w-3xl tracking-tight text-balance">
            How might we provide novice cannabis consumers that prefer to shop
            online with a digital shopping experience that is equally accessible
            and inviting as it is for those who shop in-store?
          </p>
        </section>
      </section>

      <Spacer></Spacer>
      <section className="max-w-[80rem] w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature #1</h2>
        <p className="p-xl mb-4">Connecting budtenders and online shoppers</p>
        <div className="grid w-full lg:grid-cols-2 gap-20">
          <p className="">
            If a budtender is available, the consumer can start a chat to
            receive guidance on what product best suits their needs and
            situation. They can ask questions and receive product
            recommendations from the in-store employee—which they can add to
            their cart and checkout when they feel ready to make a purchase.
          </p>
        </div>
      </section>

      <section className="max-w-full w-full bg-[#F9F9F5]">
        <div className="grid lg:grid-cols-2 p-6 gap-6">
          <Image
            src="/cheekys/feature-2.png"
            width={3840}
            height={2160}
            alt="Cheekys UI"></Image>
          <Image
            src="/cheekys/design-system.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"></Image>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w-[80rem] w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature #2</h2>
        <p className="p-xl mb-4">Providing options for busy budtenders</p>
        <div className="grid w-full lg:grid-cols-2 gap-20">
          <p className="">
            In peak hours, a budtender might not always be available to help a
            customer out. The consumer can speak with an AI-powered chatbot
            instead or even book an in-store appointment with a budtender to
            guarantee that they can receive the guidance they need should they
            choose to when visit an in-store location.
          </p>
        </div>
      </section>

      <section className="max-w-full w-full bg-[#F9F9F5]">
        <div className="grid lg:grid-cols-2 p-6 gap-6">
          <Image
            src="/cheekys/feature-2.png"
            width={3840}
            height={2160}
            alt="Cheekys UI"></Image>
          <Image
            src="/cheekys/design-system.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"></Image>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w-[80rem] w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature #3</h2>
        <p className="p-xl mb-4"> Carefully curating cannabis starter packs</p>
        <div className="grid w-full lg:grid-cols-2 gap-20">
          <p className="">
            Budtenders can curate cannabis starter packs to help beginner
            consumers meet their needs. By anticipating what cannabis consumers
            might consume cannabis for, budtenders can improve their experience
            by reducing the amount of learning they need to do.
          </p>
        </div>
      </section>

      <section className="max-w-full w-full bg-[#F9F9F5]">
        <div className="grid lg:grid-cols-2 p-6 gap-6">
          <Image
            src="/cheekys/feature-2.png"
            width={3840}
            height={2160}
            alt="Cheekys UI"></Image>
          <Image
            src="/cheekys/design-system.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"></Image>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w-[80rem] w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature #4</h2>
        <p className="p-xl mb-4">
          Answering common questions with the information hub
        </p>
        <div className="grid w-full lg:grid-cols-2 gap-20">
          <p className="">
            Beginner cannabis consumers can visit the information hub to learn
            more about its benefits, methods of consumption, the different
            strains and forms, and more. They can read everything they need to
            know about cannabis by clicking on the tabs to dynamically change
            the information on the layout, providing information in an
            easily-digestible manner.
          </p>
        </div>
      </section>

      <section className="max-w-full w-full bg-[#F9F9F5]">
        <div className="grid lg:grid-cols-2 p-6 gap-6">
          <Image
            src="/cheekys/feature-2.png"
            width={3840}
            height={2160}
            alt="Cheekys UI"></Image>
          <Image
            src="/cheekys/design-system.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"></Image>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w-[80rem] w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature #5</h2>
        <p className="p-xl mb-4">
          Supplying information about usage and effects in the product catalog
        </p>
        <div className="grid w-full lg:grid-cols-2 gap-20">
          <p className="">
            When the beginner cannabis consumer feels informed enough to browse
            the product catalog, they can hover over icons to read additional
            information such as the side effects of a certain product and the
            intensity of the effects, allowing them to make informed decisions
            before purchasing.
          </p>
        </div>
      </section>

      <section className="max-w-full w-full bg-[#F9F9F5]">
        <div className="grid lg:grid-cols-2 p-6 gap-6">
          <Image
            src="/cheekys/feature-2.png"
            width={3840}
            height={2160}
            alt="Cheekys UI"></Image>
          <Image
            src="/cheekys/design-system.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"></Image>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w-[80rem] w-full px-6">
        <h2 className="p-xl mb-4">Learnings and Takeaways</h2>
        <div className="grid w-full lg:grid-cols-2 gap-20">
          <p className="">
            One big takeaway from this project was learning how to frame a
            problem while considering not only how a solution can address a user
            need but also deliver value to a business as well. In this instance,
            taking the time to help users be familiar with the product offerings
            available at Cheeky’s creates trust and motivates them to make
            another purchase.
          </p>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="max-w-[80rem] w-full px-6">
        <h2 className="p-xl mb-4">Reflection</h2>
        <div className="grid w-full lg:grid-cols-2 gap-20">
          <p className="">
            Something we also could have done to strengthen the proposal of
            these features was to design what the solution might look like from
            a budtender’s point of view. How might a budtender curate a starter
            pack, for example? What might their user journey of joining a chat
            with a user look like?
          </p>
          <p>
            I also would have liked to interview first-time cannabis consumers
            to evaluate the effectiveness of our proposed solution;
            unfortunately, this was beyond the scope of our project. However,
            despite not being user tested, the teaching team assessed that our
            project would address the user need and also deliver value to
            Cheeky’s Cannabis Merchants.{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
