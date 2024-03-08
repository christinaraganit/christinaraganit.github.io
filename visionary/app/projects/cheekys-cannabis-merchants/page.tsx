import Nav from "@/components/nav";
import Image from "next/image";
import Spacer from "@/components/spacer";
import HalfSpacer from "@/components/half-spacer";
import MediaTag from "@/components/media-tag";
import NavNotFixed from "@/components/nav-not-fixed";
import Link from "@/components/link";

export default function Cheekys() {
  return (
    <main className="max-w-[100vw] overflow-x-clip w-full flex flex-col items-center gap-4 lg:gap-8 pt-40 pb-32">
      <NavNotFixed></NavNotFixed>
      <section className="px-6 max-w w-full lg:grid lg:grid-cols-3 lg:gap-40">
        <div className="col-span-2">
          <h1 className="large-title mb-6">Cheeky's Cannabis Merchants</h1>
          <p className="p-xl font-light mb-6">
            In this 3-week academic team project, I worked alongside a team of 5
            to digitize the in-store experience of Cheeky's Cannabis Merchants
            to help support first-time cannabis consumers, providing them with
            the knowledge they need to comfortably make a purchase.
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
            <p>February 7–28, 2023 (3 weeks)</p>
          </div>
        </div>
      </section>
      <section className="px-6 max-w w-full flex flex-col gap-2">
        <Image
          src="/cheekys/desktop.png"
          width={3840}
          height={2160}
          alt="Cheekys UI"
        ></Image>
        <MediaTag media="IMAGE">Final solution in a device mockup</MediaTag>
      </section>
      <Spacer></Spacer>
      <section className="px-6 max-w w-full">
        <h2 className="text-3xl tracking-tight mb-4">My Role</h2>
        <div className="grid lg:grid-cols-2 lg:gap-20">
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
      <section className="max-w-full w-full">
        <Image
          src="/cheekys/highlights-1.png"
          width={3200}
          height={1800}
          className="p-6"
          alt="Cheekys UI"
        ></Image>

        <div className="grid lg:grid-cols-2 p-6 pt-0 gap-6">
          <Image
            src="/cheekys/highlights.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"
          ></Image>
          <Image
            src="/cheekys/design-system.png"
            width={3200}
            height={1800}
            alt="Cheekys UI"
          ></Image>
        </div>

        <Image
          src="/cheekys/highlights-3.png"
          width={3200}
          height={1800}
          className="p-6 pt-0"
          alt="Cheekys UI"
        ></Image>
      </section>
      <Spacer></Spacer>
      <section className="px-6 max-w w-full">
        <h2 className="callout text-green-500 mb-4">Problem Space</h2>{" "}
        <div className="grid w-full lg:grid-cols-2 gap-6 lg:gap-20">
          <div>
            <p className="p-xl">
              According to a{" "}
              <Link
                link="https://gero.nursing.ubc.ca/research/completed-projects/exploring-first-time-cannabis-use-among-community-dwelling-older-adults/"
                text="study"
                color="green"
                size="large"
              ></Link>{" "}
              performed by the University of British Columbia, first-time
              cannabis consumers often feel lost navigating the use of cannabis
              without guidance from their doctors.
            </p>
          </div>
          <div>
            <p className="mb-6">
              However, during their first visit to a dispensary, employees (or
              budtenders) are able to explain product options, make suggestions
              based on the consumers’ preferences and needs, and answer
              questions about dosage. Unfortunately, online shoppers miss out on
              this guidance.
            </p>
            <p>
              In a{" "}
              <Link
                link="https://www.globenewswire.com/fr/news-release/2019/12/12/1960115/0/en/Ontario-residents-are-not-happy-with-how-they-can-purchase-legal-cannabis.html"
                text="survey"
                color="green"
                size="medium"
              ></Link>{" "}
              studying responsible cannabis use, 67% of Ontarians believe that
              retailers must educate consumers on cannabis—both in-store and
              online. Thus, it’s imperative that the in-store shopping
              experience provided to consumers can also be experienced in the
              digital space.
            </p>
          </div>
        </div>
      </section>

      <section className="spacer h-20 w-full max-w flex items-center p-6"></section>

      <section className="p-6 lg:py-0 max-w w-full">
        <section className="text-center flex flex-col items-center p-6 py-12 lg:p-16 bg-[#F7F6F1]/70 rounded-2xl">
          <h2 className="callout text-green-500 mb-4">Design Challenge</h2>
          <p className="text-xl lg:text-4xl max-w-3xl tracking-tight text-balance">
            How might we provide novice cannabis consumers that prefer to shop
            online with a digital shopping experience that is equally accessible
            and inviting as it is for those who shop in-store?
          </p>
        </section>
      </section>

      <section className="spacer h-20 w-full max-w flex items-center p-6"></section>

      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">Connecting budtenders and online shoppers</p>
          <p className="mb-4 lg:mb-0">
            If a budtender is available, the consumer can start a chat to
            receive guidance on what product best suits their needs. They can
            ask questions and receive product recommendations from the
            budtender—which they can add to their cart and checkout when they
            feel ready to make a purchase.
          </p>
        </div>
      </section>
      <section className="max-w px-6 w-full">
        <video
          width={1280}
          height={832}
          src="/cheekys/video-1.mp4"
          loop
          muted
          autoPlay
          className="mb-2"
        ></video>
        <MediaTag media="VIDEO">
          A user chats with a budtender, asking specific questions about
          cannabis usage
        </MediaTag>
      </section>
      <HalfSpacer />
      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">Providing options for busy budtenders</p>
          <p className="mb-4 lg:mb-0">
            In peak hours, a budtender might not always be available to help a
            customer out. The consumer can speak with an AI-powered chatbot
            instead or even book an in-store appointment with a budtender to
            guarantee that they can receive the guidance they need should they
            choose to when visit an in-store location.
          </p>
        </div>
      </section>
      <section className="max-w w-full px-6">
        <video
          width={1280}
          height={832}
          src="/cheekys/video-2.mp4"
          loop
          muted
          autoPlay
          className="mb-2"
        ></video>
        <MediaTag media="VIDEO">
          A user books an in-store appointment with a budtender
        </MediaTag>
      </section>
      <HalfSpacer />
      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">Carefully curating cannabis starter packs</p>
          <p className="mb-4 lg:mb-0">
            Budtenders can curate cannabis starter packs to help beginner
            consumers meet their needs. By anticipating what cannabis consumers
            might consume cannabis for, budtenders can improve their experience
            by reducing the amount of learning they need to do.
          </p>
        </div>
      </section>
      <section className="max-w w-full px-6">
        <Image
          src="/cheekys/starter-packs.png"
          width={1280}
          height={832}
          alt="Cheekys UI"
          className="mb-2"
        ></Image>
        <MediaTag media="IMAGE">
          A user views the cannabis starter packs available on the home page
        </MediaTag>
      </section>

      <HalfSpacer />

      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">Proposed Feature</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <div>
            <p className="p-xl">
              Answering common questions with the information hub
            </p>
          </div>
          <p className="mb-4 lg:mb-0">
            Beginner cannabis consumers can visit the information hub to learn
            more about its benefits, methods of consumption, the different
            strains and forms, and more. They can read everything they need to
            know about cannabis by clicking on the tabs to dynamically change
            the information on the layout, providing information in an
            easily-digestible manner.
          </p>
        </div>
      </section>
      <section className="max-w w-full px-6">
        <video
          width={1280}
          height={832}
          src="/cheekys/video-4.mp4"
          loop
          muted
          autoPlay
        ></video>
        <MediaTag media="VIDEO">
          A user explores the educational resource to learn more about cannabis
        </MediaTag>
      </section>
      <HalfSpacer />
      <section className="max-w w-full px-6">
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <div>
            <h2 className="callout text-green-500 mb-4">Proposed Feature</h2>
            <p className="p-xl">
              Supplying information about usage and effects in the product
              catalog
            </p>
          </div>
          <p className="mb-4 lg:mb-0">
            When the beginner cannabis consumer feels informed enough to browse
            the product catalog, they can hover over icons to read additional
            information such as the side effects of a certain product and the
            intensity of the effects, allowing them to make informed decisions
            before purchasing.
          </p>
        </div>
      </section>
      <section className="max-w w-full px-6">
        <video
          width={1280}
          height={832}
          src="/cheekys/video-5.mp4"
          loop
          muted
          autoPlay
          className="mb-2"
        ></video>

        <MediaTag media="VIDEO">
          A user hovers over icons on a product page to learn more about its
          side effects
        </MediaTag>
      </section>
      <Spacer></Spacer>
      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">Design Process</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            In three weeks, our solution evolved to support both goal-oriented
            and exploratory users.
          </p>
          <p className="">
            Initially, the educational resource we designed comprised two
            lengthy pages packed with large amounts of information. While it
            served its purpose of informing the reader, the content was not
            scannable, and it appeared rather overwhelming.
          </p>
        </div>
      </section>
      <section className="max-w-full w-full">
        <div className="grid lg:grid-cols-2 px-6 pt-0 gap-6">
          <Image
            src="/cheekys/iteration-1.png"
            width={1600}
            height={900}
            alt="Cheekys UI"
          ></Image>
          <Image
            src="/cheekys/iteration-1-2.png"
            width={1600}
            height={900}
            alt="Cheekys UI"
          ></Image>
        </div>
      </section>
      <HalfSpacer />
      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">Iteration #2</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            Our second iteration enabled users to learn in bite-sized portions
            tailored to their interests, eliminating the need to sift through
            irrelevant information.
          </p>
          <p className="mb-4 lg:mb-0">
            We condensed the content into a single page. Information is chunked
            under tabs with a card presenting data corresponding to the selected
            tab. The content in the card dynamically changes when a chip is
            clicked. This approach allows users to learn in small, bite-sized
            chunks. Additionally, with this approach, users will only see
            information pertaining to what their learning interests and not need
            to sift through irrelevant data.
          </p>
        </div>
      </section>

      <section className="max-w-full w-full">
        <div className="grid lg:grid-cols-2 px-6 pt-0 gap-6">
          <Image
            src="/cheekys/iteration-2.png"
            width={1600}
            height={900}
            alt="Cheekys UI"
          ></Image>
          <Image
            src="/cheekys/iteration-2-2.png"
            width={1600}
            height={900}
            alt="Cheekys UI"
          ></Image>
        </div>
      </section>

      <HalfSpacer />
      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">Valuable Feedback</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-xl">
            Our solution could be stronger if users did not have to be entirely
            reliant on the information hub.
          </p>
          <p className="mb-4 lg:mb-0">
            While it’s valuable to have this resource available for the website,
            the teaching team prompted us to brainstorm ways to provide users
            more support for learning. The goal was to seamlessly integrate
            informative interactions throughout the platform, ensuring that
            valuable information wasn’t confined solely to the information hub.
          </p>
        </div>
      </section>
      <HalfSpacer />

      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">Improvements</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="p-lg">
            I refined the existing design by prototyping solutions that
            anticipate user needs, aiming to make their experience more
            seamless.
          </p>
          <p className="mb-4 lg:mb-0">
            This involved integrating features allowing users to access product
            information directly within the chat, facilitating the asking of
            clarifying questions to boost their confidence in making informed
            purchase decisions.
          </p>
        </div>
      </section>

      <section className="max-w w-full px-6">
        <video
          width={1600}
          height={900}
          src="/cheekys/interaction-2.mp4"
          loop
          muted
          autoPlay
          className="mb-2"
        ></video>
        <MediaTag media="VIDEO">
          A user views additional details about a product from the chatroom
        </MediaTag>
      </section>

      <HalfSpacer />
      <section className="max-w w-full px-6">
        <h2 className="callout text-green-500 mb-4">More Improvements</h2>
        <div className="grid w-full gap-4 lg:gap-20 lg:grid-cols-2">
          <p className="mb-4 lg:mb-0">
            Another interaction I prototyped within the chat was the ability to
            add products to the cart by dragging the item or clicking the “Add
            to cart” button from the dropdown menu. This functionality
            eliminates the need for users to exit the chat to individually add
            products to their cart.
          </p>
          <p className="p-lg">
            This approach benefits the user, but Cheeky’s as well; by reducing
            friction in the purchasing process, we increase the likelihood of
            completing a sale.
          </p>
        </div>
      </section>

      <section className="max-w w-full px-6">
        <video
          width={1600}
          height={900}
          src="/cheekys/interaction-3.mp4"
          loop
          muted
          autoPlay
          className="mb-2"
        ></video>
        <MediaTag media="VIDEO">
          A user adds multiple products recommended by the budtender to their
          cart
        </MediaTag>
      </section>

      <Spacer></Spacer>
      <section className="max-w w-full px-6">
        <h2 className="p-xl mb-4">Learnings and Takeaways</h2>
        <div className="grid w-full lg:grid-cols-2">
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
      <section className="max-w w-full px-6">
        <h2 className="p-xl mb-4">Reflection</h2>
        <div className="grid w-full lg:grid-cols-2 gap-6 lg:gap-20">
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
