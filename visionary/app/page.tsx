import Image from "next/image";
import Button from "@/components/button";
import Review from "@/components/review";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-20 items-center pt-[10rem] pb-[6rem]">
      <nav className="w-full bg-white/90 backdrop-blur-sm border-b border-zinc-200/60 fixed z-20 h-14 flex justify-between items-center left-1/2 -translate-x-1/2 top-0">
        <div className="px-6 flex items-center w-full max-w-[80rem] mx-auto">
          <div className="w-full">
            {/* <a href="" className="w-fit group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 group-hover:scale-125 transition-transform mx-2"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clipRule="evenodd"
                />
              </svg>
            </a> */}
            <a href="">
              <Image
                src="/headshot.png"
                width={100}
                height={100}
                className="w-10 h-10 rounded-full"
                alt="A UX Designer with glasses and curled bangs"
              ></Image>
            </a>
          </div>
          <div className="flex">
            <Button link=" " variant="tertiary" text="Home"></Button>
            <Button link=" " variant="tertiary" text="About"></Button>
            <div className="pl-2">
              <Button link=" " variant="primary" text="Resume"></Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="px-6 max-w-[80rem] w-full flex items-center flex-col text-center">
        <a
          href=""
          className="mb-4 text-xs leading-5 font-medium border border-blue-300/20 text-blue-600 bg-blue-300/10 hover:bg-blue-300/20 hover:border-blue-300/30 transition-all rounded-full py-1 px-3 gap-1 flex items-center w-fit"
        >
          Seeking internships for Summer 2024
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
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
        <p className="lg:text-lg text-zinc-600 max-w-4xl mb-16">
          2 years of experience in aligning business objectives and technical
          requirements to deliver stunning design solutions. Third-year BSc
          Interactive Arts and Technology student at Simon Fraser University.
          Computer Systems graduate from British Columbia Institute of
          Technology.
        </p>

        <div className="grid gap-6 text-left">
          <a
            href=""
            className="group bg-[#010A13] hover:bg-[#011A23] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-white overflow-hidden transition-all"
          >
            <div className="w-full text-center flex flex-col items-center justify-center">
              <p className="callout text-[#0ac8b9] mb-4">Case Study</p>
              <h2 className="title-1 text-white mb-4">
                Teamfight Tactics Team Planner
              </h2>
              <p className="max-w-3xl lg:text-lg text-zinc-400 mb-8 md:mb-0">
                Listened to the needs of the Teamfight Tactics playerbase and
                delivered proofs-of-concept of QOL improvements in the in-game
                desktop Team Planner.
              </p>
            </div>

            <div className="hidden md:block w-[160rem] aspect-square left-1/2 translate-y-[5rem] -translate-x-1/2 blur-[100px] rounded-full relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#005A82] from-[#0AC8B9] opacity-30 group-hover:opacity-60 transition-all "></div>

            <Image
              src="/tft-team-planner/ui.png"
              width={2400}
              height={1350}
              className="rounded-lg lg:rounded-3xl md:-translate-y-[161rem] md:scale-[0.8] md:group-hover:scale-[0.85] transition-all"
              alt="Teamfight Tactics Team Planner Case Study"
            ></Image>
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
              name="Devon Friend"
              imgLink="/placeholder.jpg"
              title="Student at University of British Columbia"
            >
              <p className="text-zinc-600 text-lg leading-tight my-6">
                What does it take to bring your platform to the next level by
                leveraging exceptional UI/UX design? Whatever the answer might
                be, Christina will certainly have one for you. ...Christina's
                attention to detail is outstanding. I can only count the number
                of people that I know on one hand whose design ability is
                comparable to Christina's.
              </p>
            </Review>
            <Review
              name="Jason Lee"
              imgLink="/placeholder.jpg"
              title="Team Lead at Felix Payment Systems"
            >
              <p className="text-zinc-600 text-lg leading-tight my-6">
                Christina always brings a new perspective to the product team
                with her designs. She has always gone out of her way to research
                new ways to accomodate both the developers and the stakeholder
                requirements.
              </p>
            </Review>
          </div>
          <div className="flex flex-col gap-6">
            <Review
              name="Eric Dam"
              imgLink="/placeholder.jpg"
              title="Software Developer at Harris Computers"
            >
              <p className="text-zinc-600 text-lg leading-tight my-6">
                Christina Raganit is a designer-developer powerhouse.
              </p>
            </Review>
            <Review
              name="Simon Wong Chung"
              imgLink="/placeholder.jpg"
              title="Student at Simon Fraser University"
            >
              <p className="text-zinc-600 text-lg leading-tight my-6">
                One of Christina's standout qualities is her attention to
                detail. Every element of her designs, from layout and typography
                to interactions and microinteractions, is meticulously crafted.
              </p>
            </Review>
            <Review
              name="Michael Dresler"
              imgLink="/placeholder.jpg"
              title="Student at Simon Fraser University"
            >
              <p className="text-zinc-600 text-lg leading-tight my-6">
                When working with Christina she consistently went above and
                beyond. She is dependable, productive, passionate, and does not
                cut corners when it comes to her work ethic.
              </p>
            </Review>
          </div>
          <div className="flex flex-col gap-6">
            <Review
              name="Ray Gong"
              imgLink="/placeholder.jpg"
              title="Software Developer Intern at BlackBerry"
            >
              <p className="text-zinc-600 text-lg leading-tight my-6">
                Christina is a very talented designer with a vast skillset. She
                excels at rapidly producing prototypes to present her ideas,
                both in design platforms such as Figma or in code. I am
                confident that Christina will be a valuable member to any team.
              </p>
            </Review>
            <Review
              name="Kurt Milan"
              imgLink="/placeholder.jpg"
              title="Team Lead at Felix Payment Systems"
            >
              <p className="text-zinc-600 text-lg leading-tight my-6">
                Christina is an excellent communicator and collaborator. She has
                a proven track record of effectively communicating design
                concepts to both the technical development team and
                non-technical stakeholders, fostering a culture of collaboration
                within the team.
              </p>
            </Review>
          </div>
        </div>
      </section>
    </main>
  );
}
