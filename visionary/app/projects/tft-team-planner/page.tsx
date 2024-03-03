import Nav from "@/components/nav";
import Image from "next/image";
import Button from "@/components/button";
import Spacer from "@/components/spacer";

export default function TFTTeamPlanner() {
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
          <h1 className="large-title mb-6">
            Teamfight Tactics Desktop Team Planner
          </h1>
          <p className="p-xl font-light">
            Conceptualized features for the in-game desktop Team Planner of
            Teamfight Tactics and designed proof-of-concept mockups, garnering
            an overwhelmingly positive response from the playerbase.
          </p>
        </div>

        <div className="grid gap-6 mb-6">
          <div>
            <h2 className="callout mb-1">Team</h2>
            <p>Christina Raganit (Solo Designer)</p>
          </div>

          <div>
            <h2 className="callout mb-1">Roles</h2>
            <p>UI Design, UX Research, Interaction Design, Prototyping</p>
          </div>

          <div>
            <h2 className="callout mb-1">Tools</h2>
            <p>Figma, Adobe Illustrator</p>
          </div>

          <div>
            <h2 className="callout mb-1">Duration</h2>
            <p>December 17–31, 2023 (2 weeks)</p>
          </div>
        </div>
      </section>
      <section className="px-6 max-w-[80rem] w-full flex">
        <Image
          src="/tft-team-planner/hero-hextech.png"
          width={5120}
          height={3328}
          alt="Redesigned UI of the TFT Team Planner from client"></Image>
      </section>

      <Spacer></Spacer>

      <section className="px-6 max-w-[80rem] w-full">
        <h2 className="text-3xl tracking-tight mb-4">Overview</h2>
        <div className="grid lg:grid-cols-2 gap-20">
          <p>
            Teamfight Tactics (TFT) is an auto battler where players compete
            against seven other opponents by building a team to be the last one
            standing. There’s an in-game feature called Team Planner which has
            potential for improvement. As an avid TFT player, I wondered what it
            might look like in the future.
          </p>
          <div>
            <p className="mb-4">
              I sifted through tons of player feedback to discover which
              features the playerbase would like to see in the Team Planner and
              created proof-of-concept mockups, which received an overwhelmingly
              positive response from the playerbase.
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

      <section className="px-6 max-w-[80rem] w-full grid gap-6">
        <Image
          src="/tft-team-planner/in-game.png"
          width={1920}
          height={1080}
          alt="Redesigned UI of the TFT Team Planner from client"></Image>
        <Image
          src="/tft-team-planner/feedback.png"
          width={1920}
          height={1080}
          alt="Redesigned UI of the TFT Team Planner from client"></Image>
      </section>
      
      <Spacer></Spacer>

      <section className="px-6 max-w-[80rem] w-full grid items-center lg:grid-cols-2 gap-20 lg:gap-40">
        <div>
          <h2 className="callout text-blue-500 mb-4">Problem Statement</h2>
          <p className="p-xl mb-6">
            The existing functionality of the Team Planner is helpful, although
            limited.
          </p>
          <p className="mb-6">
            Currently, the only functionality that the Team Planner has is that
            it highlights champions you add to your planner when they appear in
            your shop. While players find this feature helpful, they’d like to
            see more features augmented in the Team Planner to provide more
            information as game knowledge is crucial for success.
          </p>
          <p className="mb-6">
            As a player myself, I already know there's a few functionalities I'd
            personally like to see, but I wondered what the playerbase had to
            say.
          </p>

          <span className="text-neutral-400 hidden flex items-center gap-1.5 italic">
            <span className="hidden lg:block">
              Image (Right): Player perceptions of the existing Team Planner
            </span>
            <span className="lg:hidden">
              Image (Below): Player perceptions of the existing Team Planner
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 lg:-rotate-90">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
              />
            </svg>
          </span>
        </div>
        <div>
          {" "}
          <Image
            className="hidden"
            src="/tft-team-planner/problem-statement.png"
            width={940}
            height={1054}
            alt="Redesigned UI of the TFT Team Planner from client"></Image>
        </div>
      </section>

      <Spacer></Spacer>

      <section className="p-6 max-w-[80rem] w-full">
        <section className="text-center flex flex-col items-center p-6 lg:p-16 bg-zinc-100/60 rounded-2xl">
          <h2 className="callout text-blue-500 mb-4">Design Challenge</h2>
          <p className="text-4xl max-w-3xl tracking-tight text-balance">
            What features can I propose for the Team Planner of TFT? How can I
            take into consideration these features' feasibility and alignment
            with business strategy? How can I adhere to the visual language of
            TFT when designing the interface?
          </p>
        </section>
      </section>

      <div>
        <Image
          src="/tft-team-planner/pengu.png"
          width={800}
          height={885}
          className="hidden xl:block xl:relative scale-50 xl:-translate-y-[60%] xl:float-right xl:translate-x-[75%]"
          alt="Piximander"></Image>
      </div>

      <div className="xl:hidden">
        <Spacer></Spacer>
      </div>

      <section className="px-6 max-w-[80rem] xl:-mt-[calc(885px-5rem+1.5rem)] w-full">
        <div className="grid w-full lg:grid-cols-2">
          <div>
            <h2 className="callout text-blue-500 mb-4">Research</h2>
            <p className="p-xl mb-6">
              Though players appreciate the existing features in the Team
              Planner and find them highly useful, they see room for
              improvement.
            </p>
            <p className="mb-6">
              To identify which features players wanted to see in the Team
              Planner, I gathered feedback from the playerbase on Reddit, X, and
              Discord.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 max-w-[80rem] w-full grid gap-6 -mt-6">
        <Image
          src="/tft-team-planner/requested-feature-1.png"
          width={1920}
          height={1290}
          alt="Redesigned UI of the TFT Team Planner from client"></Image>
        <Image
          src="/tft-team-planner/requested-feature-2.png"
          width={1920}
          height={1003}
          alt="Redesigned UI of the TFT Team Planner from client"></Image>
        <Image
          src="/tft-team-planner/requested-feature-3.png"
          width={1920}
          height={756}
          alt="Redesigned UI of the TFT Team Planner from client"></Image>
        <Image
          src="/tft-team-planner/requested-feature-4.png"
          width={1920}
          height={756}
          alt="Redesigned UI of the TFT Team Planner from client"></Image>
      </section>
      <Spacer></Spacer>
    </main>
  );
}
