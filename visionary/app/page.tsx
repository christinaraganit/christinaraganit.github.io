import Image from "next/image";
import Button from "@/components/button";
import Review from "@/components/review";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-20 items-center pt-40 pb-16">
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

      <section className="px-6 max-w-[80rem] w-full flex items-center flex-col text-center">
        <a
          href=""
          className="mb-4 text-xs leading-5 font-medium border border-blue-300/20 text-blue-600 bg-blue-300/10 hover:bg-blue-300/20 hover:border-blue-300/30 transition-all rounded-full py-1 px-3 gap-1 flex items-center w-fit">
          Seeking internships for Summer 2024
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        <h1 className="large-title max-w-4xl mb-4">
          I'm Christina Raganit, a UX designer who writes code.
        </h1>
        <p className="lg:text-lg text-zinc-600 max-w-4xl mb-12">
          2 years of experience in aligning business objectives and technical
          requirements to deliver stunning design solutions. Third-year BSc
          Interactive Arts and Technology student at Simon Fraser University.
          Computer Systems graduate from British Columbia Institute of
          Technology.
        </p>

        <div className="grid gap-6 text-left">
          <a
            href="/projects/tft-team-planner"
            className="group bg-[#010A13] hover:bg-[#011A23] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-white overflow-hidden transition-all">
            <div className="w-full text-center flex flex-col items-center justify-center">
              <p className="callout text-[#0ac8b9] mb-4">UX Design</p>
              <h2 className="title-1 text-white mb-4">
                Teamfight Tactics Team Planner
              </h2>
              <p className="max-w-3xl lg:text-lg text-zinc-300 mb-8 md:mb-0">
                Conceptualized QOL features for the in-game desktop Team Planner
                and designed proof-of-concept mockups, garnering an
                overwhelmingly positive response from the playerbase.
              </p>
            </div>

            <div className="hidden md:block w-[160rem] aspect-square left-1/2 translate-y-[5rem] group-hover:blur-[200px] -translate-x-1/2 blur-[100px] rounded-full relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#005A82] from-[#0AC8B9] opacity-30 group-hover:opacity-60 transition-all "></div>

            <Image
              src="/tft-team-planner/ui.png"
              width={2400}
              height={1350}
              className="rounded-lg lg:rounded-3xl md:-translate-y-[161rem] md:scale-[0.8] md:group-hover:scale-[0.85] transition-all"
              alt="Teamfight Tactics Team Planner Case Study"></Image>
          </a>
          <a
            href=""
            className="group bg-[#150E0C] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-white overflow-hidden transition-all">
            <div className="w-full text-center flex flex-col items-center justify-center">
              <p className="callout text-orange-400 mb-4">
                UX Design and Frontend Development
              </p>
              <h2 className="title-1 text-white mb-4">Chow Now</h2>
              <p className="max-w-3xl lg:text-lg text-zinc-300 mb-8 md:mb-0">
                Designed and developed a mobile app that offers a discreet way
                for victims of domestic violence to confidentially report
                incidents of abuse to local authorities.
              </p>
            </div>

            <div className="hidden md:block w-[160rem] aspect-square left-1/2 translate-y-[5rem] group-hover:translate-y-[2rem] -translate-x-1/2 blur-[100px] group-hover:blur-[200px] rounded-full relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#f83600] from-[#fe8c00] opacity-30 group-hover:opacity-[55%] transition-all"></div>

            <Image
              src="/chow-now/ui.png"
              width={800}
              height={1621}
              className="rounded-lg lg:rounded-3xl mx-auto lg:-translate-y-[156rem] md:-translate-y-[159rem] md:scale-[0.9] lg:scale-[1.05] md:group-hover:scale-[0.95] lg:group-hover:scale-[1.12] transition-all"
              alt="Teamfight Tactics Team Planner Case Study"></Image>
          </a>
        </div>
      </section>

      <section className="px-6 flex max-w-[80rem] w-full flex-col text-center items-center">
        <p className="callout text-blue-600 mb-3">Testimonials</p>
        <h2 className="title-1 font-semibold mb-4 max-w-3xl">
          I excel in collaborating with teams and working together to achieve
          success.
        </h2>
        <p className="text-zinc-600 max-w-4xl mb-8">
          Here's what former teammates are saying about me.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 w-full text-left">
          <div className="flex flex-col gap-6">
            <Review
              name="Ray Gong"
              imgLink="/ray-gong.png"
              title="Software Developer Intern at BlackBerry">
              <span>
                Christina is a{" "}
                <span className="bg-blue-200/50 font-medium">
                  very talented designer with a vast skillset
                </span>
                . She excels at rapidly producing prototypes to present her
                ideas, both in design platforms such as Figma or in code. I am
                confident that Christina will be a valuable member to any team.
              </span>
            </Review>
            <Review
              name="Jason Lee"
              imgLink="/jason-lee.jpg"
              title="Team Lead at Felix Payment Systems">
              <span>
                Christina always brings a new perspective to the product team
                with her designs. She has always gone out of her way to research
                new ways to accomodate both the developers and the stakeholder
                requirements.
              </span>
            </Review>
          </div>
          <div className="flex flex-col gap-6">
            <Review
              name="Eric Dam"
              imgLink="/eric-dam.jpg"
              title="Software Developer at Harris Computers">
              <span>
                Christina Raganit is a{" "}
                <span className="bg-blue-200/50 font-medium">
                  designer-developer powerhouse
                </span>
                .
              </span>
            </Review>
            <Review
              name="Michael Dresler"
              imgLink="/michael-dresler.jpeg"
              title="Student at Simon Fraser University">
              <span>
                When working with Christina she consistently went above and
                beyond. She is{" "}
                <span className="bg-blue-200/50 font-medium">
                  dependable, productive, passionate
                </span>
                , and does not cut corners when it comes to her work ethic.
              </span>
            </Review>
            <Review
              name="Simon Wong Chung"
              imgLink="/simon-wong-chung.jpg"
              title="Student at Simon Fraser University">
              <span>
                One of Christina's standout qualities is her attention to
                detail. Every element of her designs, from layout and typography
                to interactions and microinteractions, is meticulously crafted.
              </span>
            </Review>
          </div>
          <div className="flex flex-col gap-6">
            <Review
              name="Kurt Milan"
              imgLink="/kurt-milan.jpg"
              title="Team Lead at Felix Payment Systems">
              <span>
                Christina is an{" "}
                <span className="bg-blue-200/50 font-medium">
                  excellent communicator and collaborator
                </span>
                . She has a proven track record of effectively communicating
                design concepts to both the technical development team and
                non-technical stakeholders, fostering a culture of collaboration
                within the team.
              </span>
            </Review>
            <Review
              name="Devon Friend"
              imgLink="/devon-friend.jpg"
              title="Student at University of British Columbia">
              <span>
                What does it take to bring your platform to the next level by
                leveraging exceptional UI/UX design? Whatever the answer might
                be, Christina will certainly have one for you.
              </span>
            </Review>
          </div>
        </div>
      </section>
    </main>
  );
}
