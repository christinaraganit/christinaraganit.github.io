import Image from "next/image";
import Button from "@/components/button";
import Review from "@/components/review";
import Nav from "@/components/nav";
import Spacer from "@/components/spacer";
import HalfSpacer from "@/components/half-spacer";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-20 items-center pt-20 pb-20">
      <Nav></Nav>

      <section className="px-6 max-w w-full flex items-center flex-col text-center">
        {/* <a
          href="/why-hire-me"
          className="mb-4 text-xs leading-5 font-medium border border-blue-300/20 text-blue-600 bg-blue-300/10 hover:bg-blue-300/20 hover:border-blue-300/30 transition-all rounded-full py-1 px-3 gap-1 flex items-center w-fit">
          Seeking internships for Summer 2024
        </a> */}

        <h1 className="large-title max-w-4xl mb-4">
          I'm Christina Raganit, a product designer who writes code.
        </h1>
        <p className="lg:text-lg text-zinc-600 max-w-3xl mb-14 text-balance">
          Seeking product design internships for Summer 2026. Previously at
          Asana, SAP, and Felix Payment Systems.
        </p>

        <div className="grid gap-6 text-left">
          {/* <a
            href="/projects/tft-team-planner"
            className="group bg-[#010A13] hover:bg-[#011A23] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-white overflow-hidden transition-all">
            <div className="w-full text-center flex flex-col items-center justify-center">
              <p className="callout text-[#0ac8b9] mb-4">Visual Design</p>
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
              className="rounded-lg lg:rounded-3xl md:-translate-y-[161.25rem] md:scale-[0.75] md:group-hover:scale-[0.8] transition-all"
              alt="Teamfight Tactics Team Planner Case Study"></Image>
          </a> */}

          <a
            href="/projects/hackerhelper"
            className="group bg-[#0F0E26] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-white overflow-hidden transition-all"
          >
            <div className="w-full text-center flex flex-col items-center justify-center">
              <p className="callout text-[#818CF8] mb-4">Product Design</p>
              <h2 className="title-1 text-white mb-4">HackerHelper</h2>
              <p className="max-w-3xl lg:text-lg text-zinc-300 mb-8 md:mb-0 text-balance">
                Designed a responsive help request ticketing platform to
                faciliate communication between hackathon participants and
                mentors.
              </p>
            </div>

            <div className="hidden md:block w-[160rem] aspect-square left-1/2 translate-y-[5rem] group-hover:blur-[200px] -translate-x-1/2 blur-[100px] rounded-full relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#4F46E5] from-[#B57BEE] opacity-40 group-hover:opacity-60 transition-all "></div>

            <div>
              <img
                src="/hackerhelper/phone and desktop.png"
                width={1600}
                height={900}
                className="rounded-md lg:rounded-xl md:-translate-y-[163.25rem] z-0 md:scale-[0.75] md:group-hover:scale-[0.8] transition-all"
              ></img>
            </div>
          </a>

          <a
            href="/projects/dutch-design-week"
            className="group bg-[#0A0A0A] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-white overflow-hidden transition-all"
          >
            <div className="w-full text-center flex flex-col items-center justify-center">
              <p className="callout text-[#FF2BDF] mb-4">
                Visual Design and Branding
              </p>
              <h2 className="title-1 text-white mb-4">Dutch Design Week</h2>
              <p className="max-w-3xl lg:text-lg text-zinc-300 mb-8 md:mb-0">
                Designed and prototyped a pre-event microsite and crafted a
                design direction for Amsterdam-based Dutch Design Week.
              </p>
            </div>

            <div className="hidden md:block w-[160rem] aspect-square left-1/2 translate-y-[5rem] group-hover:blur-[200px] -translate-x-1/2 blur-[100px] rounded-full relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#FF2BDF] from-[#8A2387] opacity-30 group-hover:opacity-60 transition-all "></div>

            <Image
              src="/ddw/main.png"
              width={2400}
              height={1350}
              priority
              className="rounded-lg lg:rounded-3xl md:-translate-y-[162.25rem] md:scale-[0.75] md:group-hover:scale-[0.8] transition-all"
              alt="Dutch Design Week Case Study"
            ></Image>
          </a>

          <a
            href="/projects/proud-zebra"
            className="group bg-[#f6f3ff] hover:bg-[#F4F1FE] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-black overflow-hidden transition-all"
          >
            <div className="w-full text-center flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  className="fill-violet-500 scale-125"
                  width="13"
                  height="26"
                  viewBox="0 0 13 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_35_2198)">
                    <path d="M8.71982 23.6359C8.04014 23.5773 7.19639 23.7648 6.62217 24.1164C6.37607 24.257 6.34092 24.4797 6.55186 24.6672C7.0792 25.1476 7.88779 25.5109 8.5792 25.5578C9.29404 25.6515 10.1495 25.4289 10.7238 24.9953C10.9113 24.8664 10.923 24.6672 10.7472 24.5031C10.2315 24.0226 9.42295 23.6828 8.71982 23.6359ZM11.1808 19.675C10.8058 20.2492 10.5949 21.0929 10.6183 21.7726C10.6652 22.4875 10.9933 23.3078 11.4503 23.8117C11.6027 23.9875 11.7902 23.9875 11.9425 23.8C12.3996 23.2609 12.6456 22.4054 12.5753 21.6789C12.5285 20.9992 12.1886 20.1906 11.7199 19.6515C11.5441 19.4406 11.3331 19.4523 11.1808 19.675ZM5.41514 20.4601C4.77061 20.2258 3.8917 20.2023 3.23545 20.4015C2.97764 20.4836 2.90732 20.6828 3.04795 20.9172C3.43467 21.5148 4.12607 22.0656 4.77061 22.3C5.42686 22.5695 6.31748 22.5695 6.98545 22.2883C7.20811 22.2062 7.2667 22.0304 7.13779 21.8195C6.76279 21.2218 6.07139 20.6828 5.41514 20.4601ZM8.79014 17.2726C8.28623 17.7297 7.85264 18.4797 7.72373 19.1476C7.57139 19.8508 7.67686 20.7297 7.99326 21.3273C8.08701 21.55 8.27451 21.5851 8.47373 21.4445C9.03623 21.0343 9.49326 20.2726 9.61045 19.5461C9.75107 18.8781 9.63389 17.9992 9.31748 17.3664C9.21201 17.1086 8.98936 17.0734 8.79014 17.2726ZM0.481539 15.925C0.575289 16.6047 0.985445 17.4015 1.48936 17.8937C1.98154 18.4093 2.79014 18.7609 3.5167 18.7843C3.75107 18.7961 3.87998 18.6437 3.84482 18.4093C3.72764 17.6945 3.31748 16.9328 2.81357 16.4758C2.30967 15.9953 1.53623 15.6203 0.856539 15.5383C0.575289 15.5031 0.434664 15.6554 0.481539 15.925ZM7.19639 14.9172C6.55186 15.1398 5.86045 15.6554 5.46201 16.2062C5.04014 16.757 4.79404 17.589 4.81748 18.3156C4.84092 18.5383 4.99326 18.6554 5.22764 18.6203C5.93076 18.4562 6.66904 17.9523 7.04404 17.3429C7.43076 16.7453 7.68857 15.9133 7.6417 15.2218C7.6417 14.9406 7.46592 14.8234 7.19639 14.9172ZM5.23936 12.175C4.68857 12.6203 4.23154 13.3703 4.09092 14.0617C4.05576 14.2726 4.17295 14.4367 4.39561 14.4484C5.12217 14.4718 5.9542 14.1554 6.48154 13.6867C7.00889 13.2297 7.47764 12.4679 7.62998 11.7883C7.66514 11.5304 7.52451 11.3547 7.2667 11.3664C6.56357 11.425 5.75498 11.7297 5.23936 12.175ZM0.493258 10.6398C0.422945 11.3312 0.610445 12.1867 0.985445 12.7961C1.33701 13.4289 2.02842 13.9797 2.70811 14.1672C2.91904 14.2375 3.10654 14.1203 3.12998 13.8859C3.20029 13.2179 3.00107 12.3625 2.62607 11.7531C2.25107 11.1672 1.58311 10.6047 0.962008 10.3586C0.715914 10.2531 0.516695 10.3586 0.493258 10.6398ZM5.88389 8.23742C5.21592 8.4718 4.52451 8.99914 4.14951 9.60852C4.02061 9.79602 4.09092 9.99523 4.30186 10.089C4.96982 10.3586 5.84873 10.3586 6.5167 10.089C7.19639 9.83117 7.89951 9.26867 8.23936 8.67102C8.37998 8.46008 8.30967 8.26086 8.05186 8.17883C7.38389 7.99133 6.5167 8.00305 5.88389 8.23742ZM1.94639 5.16711C1.6417 5.81164 1.52451 6.67883 1.65342 7.35852C1.78232 8.07336 2.23936 8.82336 2.82529 9.24523C3.00107 9.38586 3.18857 9.32727 3.30576 9.11633C3.61045 8.50695 3.71592 7.63977 3.56357 6.94836C3.42295 6.26867 2.97764 5.51867 2.48545 5.04992C2.29795 4.88586 2.07529 4.93273 1.94639 5.16711ZM8.00498 4.86242C7.31357 4.99133 6.55186 5.43664 6.11826 5.9757C5.97764 6.13977 6.01279 6.33898 6.20029 6.46789C6.82139 6.83117 7.70029 6.94836 8.3917 6.76086C9.08311 6.60852 9.84482 6.15148 10.2901 5.63586C10.4659 5.42492 10.419 5.21398 10.1729 5.10852C9.55186 4.82727 8.69639 4.7218 8.00498 4.86242ZM4.54795 1.25305C4.14951 1.8507 3.91514 2.70617 3.96201 3.38586C3.97373 4.1007 4.32529 4.9093 4.84092 5.42492C5.0167 5.58898 5.21592 5.56555 5.34482 5.37805C5.73154 4.78039 5.96592 3.92492 5.90732 3.24523C5.86045 2.57727 5.54404 1.78039 5.09873 1.22961C4.91123 1.01868 4.70029 1.04211 4.54795 1.25305ZM10.5949 0.0694565C9.91514 0.174925 9.1417 0.585081 8.64951 1.06555C8.15732 1.54602 7.77061 2.35461 7.68857 3.0343C7.66514 3.26867 7.79404 3.4093 8.02842 3.39758C8.74326 3.36242 9.54014 2.98742 10.0323 2.43664C10.5011 1.94445 10.8878 1.1593 10.9933 0.456175C11.0167 0.186644 10.8761 0.0343002 10.5949 0.0694565Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_2198">
                      <rect
                        width="12.4631"
                        height="25.592"
                        fill="white"
                        transform="translate(0.472656 0.0644531)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="callout text-violet-500">
                  1st Place at Eunoia UX Hackathon 2023
                </span>

                <svg
                  className="fill-violet-500 -scale-125 scale-y-125"
                  width="13"
                  height="26"
                  viewBox="0 0 13 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_35_2198)">
                    <path d="M8.71982 23.6359C8.04014 23.5773 7.19639 23.7648 6.62217 24.1164C6.37607 24.257 6.34092 24.4797 6.55186 24.6672C7.0792 25.1476 7.88779 25.5109 8.5792 25.5578C9.29404 25.6515 10.1495 25.4289 10.7238 24.9953C10.9113 24.8664 10.923 24.6672 10.7472 24.5031C10.2315 24.0226 9.42295 23.6828 8.71982 23.6359ZM11.1808 19.675C10.8058 20.2492 10.5949 21.0929 10.6183 21.7726C10.6652 22.4875 10.9933 23.3078 11.4503 23.8117C11.6027 23.9875 11.7902 23.9875 11.9425 23.8C12.3996 23.2609 12.6456 22.4054 12.5753 21.6789C12.5285 20.9992 12.1886 20.1906 11.7199 19.6515C11.5441 19.4406 11.3331 19.4523 11.1808 19.675ZM5.41514 20.4601C4.77061 20.2258 3.8917 20.2023 3.23545 20.4015C2.97764 20.4836 2.90732 20.6828 3.04795 20.9172C3.43467 21.5148 4.12607 22.0656 4.77061 22.3C5.42686 22.5695 6.31748 22.5695 6.98545 22.2883C7.20811 22.2062 7.2667 22.0304 7.13779 21.8195C6.76279 21.2218 6.07139 20.6828 5.41514 20.4601ZM8.79014 17.2726C8.28623 17.7297 7.85264 18.4797 7.72373 19.1476C7.57139 19.8508 7.67686 20.7297 7.99326 21.3273C8.08701 21.55 8.27451 21.5851 8.47373 21.4445C9.03623 21.0343 9.49326 20.2726 9.61045 19.5461C9.75107 18.8781 9.63389 17.9992 9.31748 17.3664C9.21201 17.1086 8.98936 17.0734 8.79014 17.2726ZM0.481539 15.925C0.575289 16.6047 0.985445 17.4015 1.48936 17.8937C1.98154 18.4093 2.79014 18.7609 3.5167 18.7843C3.75107 18.7961 3.87998 18.6437 3.84482 18.4093C3.72764 17.6945 3.31748 16.9328 2.81357 16.4758C2.30967 15.9953 1.53623 15.6203 0.856539 15.5383C0.575289 15.5031 0.434664 15.6554 0.481539 15.925ZM7.19639 14.9172C6.55186 15.1398 5.86045 15.6554 5.46201 16.2062C5.04014 16.757 4.79404 17.589 4.81748 18.3156C4.84092 18.5383 4.99326 18.6554 5.22764 18.6203C5.93076 18.4562 6.66904 17.9523 7.04404 17.3429C7.43076 16.7453 7.68857 15.9133 7.6417 15.2218C7.6417 14.9406 7.46592 14.8234 7.19639 14.9172ZM5.23936 12.175C4.68857 12.6203 4.23154 13.3703 4.09092 14.0617C4.05576 14.2726 4.17295 14.4367 4.39561 14.4484C5.12217 14.4718 5.9542 14.1554 6.48154 13.6867C7.00889 13.2297 7.47764 12.4679 7.62998 11.7883C7.66514 11.5304 7.52451 11.3547 7.2667 11.3664C6.56357 11.425 5.75498 11.7297 5.23936 12.175ZM0.493258 10.6398C0.422945 11.3312 0.610445 12.1867 0.985445 12.7961C1.33701 13.4289 2.02842 13.9797 2.70811 14.1672C2.91904 14.2375 3.10654 14.1203 3.12998 13.8859C3.20029 13.2179 3.00107 12.3625 2.62607 11.7531C2.25107 11.1672 1.58311 10.6047 0.962008 10.3586C0.715914 10.2531 0.516695 10.3586 0.493258 10.6398ZM5.88389 8.23742C5.21592 8.4718 4.52451 8.99914 4.14951 9.60852C4.02061 9.79602 4.09092 9.99523 4.30186 10.089C4.96982 10.3586 5.84873 10.3586 6.5167 10.089C7.19639 9.83117 7.89951 9.26867 8.23936 8.67102C8.37998 8.46008 8.30967 8.26086 8.05186 8.17883C7.38389 7.99133 6.5167 8.00305 5.88389 8.23742ZM1.94639 5.16711C1.6417 5.81164 1.52451 6.67883 1.65342 7.35852C1.78232 8.07336 2.23936 8.82336 2.82529 9.24523C3.00107 9.38586 3.18857 9.32727 3.30576 9.11633C3.61045 8.50695 3.71592 7.63977 3.56357 6.94836C3.42295 6.26867 2.97764 5.51867 2.48545 5.04992C2.29795 4.88586 2.07529 4.93273 1.94639 5.16711ZM8.00498 4.86242C7.31357 4.99133 6.55186 5.43664 6.11826 5.9757C5.97764 6.13977 6.01279 6.33898 6.20029 6.46789C6.82139 6.83117 7.70029 6.94836 8.3917 6.76086C9.08311 6.60852 9.84482 6.15148 10.2901 5.63586C10.4659 5.42492 10.419 5.21398 10.1729 5.10852C9.55186 4.82727 8.69639 4.7218 8.00498 4.86242ZM4.54795 1.25305C4.14951 1.8507 3.91514 2.70617 3.96201 3.38586C3.97373 4.1007 4.32529 4.9093 4.84092 5.42492C5.0167 5.58898 5.21592 5.56555 5.34482 5.37805C5.73154 4.78039 5.96592 3.92492 5.90732 3.24523C5.86045 2.57727 5.54404 1.78039 5.09873 1.22961C4.91123 1.01868 4.70029 1.04211 4.54795 1.25305ZM10.5949 0.0694565C9.91514 0.174925 9.1417 0.585081 8.64951 1.06555C8.15732 1.54602 7.77061 2.35461 7.68857 3.0343C7.66514 3.26867 7.79404 3.4093 8.02842 3.39758C8.74326 3.36242 9.54014 2.98742 10.0323 2.43664C10.5011 1.94445 10.8878 1.1593 10.9933 0.456175C11.0167 0.186644 10.8761 0.0343002 10.5949 0.0694565Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_2198">
                      <rect
                        width="12.4631"
                        height="25.592"
                        fill="white"
                        transform="translate(0.472656 0.0644531)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="title-1 text-black mb-4 font-semibold">
                Proud Zebra
              </h2>
              <p className="max-w-3xl lg:text-lg text-zinc-800 mb-8 md:mb-0">
                Leveraged the storytelling of Proud Zebra in their online
                storefront with the goal of driving engagement and empowering
                the 2SLGBTQIAP+ community.
              </p>
            </div>

            <div className="hidden md:block w-[160rem] aspect-square left-1/2 translate-y-[5rem] group-hover:blur-[200px] -translate-x-1/2 blur-[100px] rounded-full relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#c471ed] from-[#f64f59] opacity-20 group-hover:opacity-30 transition-all "></div>

            <Image
              src="/proud-zebra/ui.png"
              width={2560}
              height={1628}
              className="rounded-lg lg:rounded-3xl md:-translate-y-[162.25rem] md:scale-[0.8] md:group-hover:scale-[0.85] transition-all"
              blurDataURL="/proud-zebra/ui.png"
              placeholder="blur"
              alt="Proud Zebra Case Study"
            ></Image>
          </a>

          <a
            href="/projects/cheekys-cannabis-merchants"
            className="group bg-[#f5f5ee] hover:bg-[#f3f2ea] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-black overflow-hidden transition-all"
          >
            <div className="w-full text-center flex flex-col items-center justify-center">
              <p className="callout text-[#538477] mb-3">UX Design</p>
              <h2 className="title-1 text-black mb-4 font-semibold">
                Cheeky's Cannabis Merchants
              </h2>
              <p className="max-w-3xl lg:text-lg text-zinc-800 mb-8 md:mb-0">
                Designed features for the online store of Cheeky's Cannabis,
                providing novice cannabis consumers with the knowledge they need
                to safely get high for the first time.
              </p>
            </div>

            <div className="hidden md:block w-[160rem] aspect-square left-1/2 translate-y-[5rem] group-hover:blur-[200px] -translate-x-1/2 blur-[100px] rounded-full relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#159957] from-[#155799] opacity-20 group-hover:opacity-30 transition-all "></div>

            <Image
              src="/cheekys/ui.png"
              width={5120}
              height={3328}
              blurDataURL="/cheekys/ui.png"
              className="rounded-lg lg:rounded-3xl md:-translate-y-[162.25rem] md:scale-[0.8] md:group-hover:scale-[0.85] transition-all"
              alt="Cheekys Cannabis Merchants Case Study"
            ></Image>
          </a>

          <a
            href="/projects/chow-now"
            className="group bg-[#FFF5EB] hover:bg-[#FFF3E6] px-6 py-8 lg:p-12 h-fit md:aspect-video rounded-3xl text-black overflow-hidden transition-all"
          >
            <div className="w-full text-center flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  className="fill-orange-500 scale-125"
                  width="13"
                  height="26"
                  viewBox="0 0 13 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_35_2198)">
                    <path d="M8.71982 23.6359C8.04014 23.5773 7.19639 23.7648 6.62217 24.1164C6.37607 24.257 6.34092 24.4797 6.55186 24.6672C7.0792 25.1476 7.88779 25.5109 8.5792 25.5578C9.29404 25.6515 10.1495 25.4289 10.7238 24.9953C10.9113 24.8664 10.923 24.6672 10.7472 24.5031C10.2315 24.0226 9.42295 23.6828 8.71982 23.6359ZM11.1808 19.675C10.8058 20.2492 10.5949 21.0929 10.6183 21.7726C10.6652 22.4875 10.9933 23.3078 11.4503 23.8117C11.6027 23.9875 11.7902 23.9875 11.9425 23.8C12.3996 23.2609 12.6456 22.4054 12.5753 21.6789C12.5285 20.9992 12.1886 20.1906 11.7199 19.6515C11.5441 19.4406 11.3331 19.4523 11.1808 19.675ZM5.41514 20.4601C4.77061 20.2258 3.8917 20.2023 3.23545 20.4015C2.97764 20.4836 2.90732 20.6828 3.04795 20.9172C3.43467 21.5148 4.12607 22.0656 4.77061 22.3C5.42686 22.5695 6.31748 22.5695 6.98545 22.2883C7.20811 22.2062 7.2667 22.0304 7.13779 21.8195C6.76279 21.2218 6.07139 20.6828 5.41514 20.4601ZM8.79014 17.2726C8.28623 17.7297 7.85264 18.4797 7.72373 19.1476C7.57139 19.8508 7.67686 20.7297 7.99326 21.3273C8.08701 21.55 8.27451 21.5851 8.47373 21.4445C9.03623 21.0343 9.49326 20.2726 9.61045 19.5461C9.75107 18.8781 9.63389 17.9992 9.31748 17.3664C9.21201 17.1086 8.98936 17.0734 8.79014 17.2726ZM0.481539 15.925C0.575289 16.6047 0.985445 17.4015 1.48936 17.8937C1.98154 18.4093 2.79014 18.7609 3.5167 18.7843C3.75107 18.7961 3.87998 18.6437 3.84482 18.4093C3.72764 17.6945 3.31748 16.9328 2.81357 16.4758C2.30967 15.9953 1.53623 15.6203 0.856539 15.5383C0.575289 15.5031 0.434664 15.6554 0.481539 15.925ZM7.19639 14.9172C6.55186 15.1398 5.86045 15.6554 5.46201 16.2062C5.04014 16.757 4.79404 17.589 4.81748 18.3156C4.84092 18.5383 4.99326 18.6554 5.22764 18.6203C5.93076 18.4562 6.66904 17.9523 7.04404 17.3429C7.43076 16.7453 7.68857 15.9133 7.6417 15.2218C7.6417 14.9406 7.46592 14.8234 7.19639 14.9172ZM5.23936 12.175C4.68857 12.6203 4.23154 13.3703 4.09092 14.0617C4.05576 14.2726 4.17295 14.4367 4.39561 14.4484C5.12217 14.4718 5.9542 14.1554 6.48154 13.6867C7.00889 13.2297 7.47764 12.4679 7.62998 11.7883C7.66514 11.5304 7.52451 11.3547 7.2667 11.3664C6.56357 11.425 5.75498 11.7297 5.23936 12.175ZM0.493258 10.6398C0.422945 11.3312 0.610445 12.1867 0.985445 12.7961C1.33701 13.4289 2.02842 13.9797 2.70811 14.1672C2.91904 14.2375 3.10654 14.1203 3.12998 13.8859C3.20029 13.2179 3.00107 12.3625 2.62607 11.7531C2.25107 11.1672 1.58311 10.6047 0.962008 10.3586C0.715914 10.2531 0.516695 10.3586 0.493258 10.6398ZM5.88389 8.23742C5.21592 8.4718 4.52451 8.99914 4.14951 9.60852C4.02061 9.79602 4.09092 9.99523 4.30186 10.089C4.96982 10.3586 5.84873 10.3586 6.5167 10.089C7.19639 9.83117 7.89951 9.26867 8.23936 8.67102C8.37998 8.46008 8.30967 8.26086 8.05186 8.17883C7.38389 7.99133 6.5167 8.00305 5.88389 8.23742ZM1.94639 5.16711C1.6417 5.81164 1.52451 6.67883 1.65342 7.35852C1.78232 8.07336 2.23936 8.82336 2.82529 9.24523C3.00107 9.38586 3.18857 9.32727 3.30576 9.11633C3.61045 8.50695 3.71592 7.63977 3.56357 6.94836C3.42295 6.26867 2.97764 5.51867 2.48545 5.04992C2.29795 4.88586 2.07529 4.93273 1.94639 5.16711ZM8.00498 4.86242C7.31357 4.99133 6.55186 5.43664 6.11826 5.9757C5.97764 6.13977 6.01279 6.33898 6.20029 6.46789C6.82139 6.83117 7.70029 6.94836 8.3917 6.76086C9.08311 6.60852 9.84482 6.15148 10.2901 5.63586C10.4659 5.42492 10.419 5.21398 10.1729 5.10852C9.55186 4.82727 8.69639 4.7218 8.00498 4.86242ZM4.54795 1.25305C4.14951 1.8507 3.91514 2.70617 3.96201 3.38586C3.97373 4.1007 4.32529 4.9093 4.84092 5.42492C5.0167 5.58898 5.21592 5.56555 5.34482 5.37805C5.73154 4.78039 5.96592 3.92492 5.90732 3.24523C5.86045 2.57727 5.54404 1.78039 5.09873 1.22961C4.91123 1.01868 4.70029 1.04211 4.54795 1.25305ZM10.5949 0.0694565C9.91514 0.174925 9.1417 0.585081 8.64951 1.06555C8.15732 1.54602 7.77061 2.35461 7.68857 3.0343C7.66514 3.26867 7.79404 3.4093 8.02842 3.39758C8.74326 3.36242 9.54014 2.98742 10.0323 2.43664C10.5011 1.94445 10.8878 1.1593 10.9933 0.456175C11.0167 0.186644 10.8761 0.0343002 10.5949 0.0694565Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_2198">
                      <rect
                        width="12.4631"
                        height="25.592"
                        fill="white"
                        transform="translate(0.472656 0.0644531)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="callout text-orange-500">
                  1st Place at cmd-f 2023
                </span>

                <svg
                  className="fill-orange-500 -scale-125 scale-y-125"
                  width="13"
                  height="26"
                  viewBox="0 0 13 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_35_2198)">
                    <path d="M8.71982 23.6359C8.04014 23.5773 7.19639 23.7648 6.62217 24.1164C6.37607 24.257 6.34092 24.4797 6.55186 24.6672C7.0792 25.1476 7.88779 25.5109 8.5792 25.5578C9.29404 25.6515 10.1495 25.4289 10.7238 24.9953C10.9113 24.8664 10.923 24.6672 10.7472 24.5031C10.2315 24.0226 9.42295 23.6828 8.71982 23.6359ZM11.1808 19.675C10.8058 20.2492 10.5949 21.0929 10.6183 21.7726C10.6652 22.4875 10.9933 23.3078 11.4503 23.8117C11.6027 23.9875 11.7902 23.9875 11.9425 23.8C12.3996 23.2609 12.6456 22.4054 12.5753 21.6789C12.5285 20.9992 12.1886 20.1906 11.7199 19.6515C11.5441 19.4406 11.3331 19.4523 11.1808 19.675ZM5.41514 20.4601C4.77061 20.2258 3.8917 20.2023 3.23545 20.4015C2.97764 20.4836 2.90732 20.6828 3.04795 20.9172C3.43467 21.5148 4.12607 22.0656 4.77061 22.3C5.42686 22.5695 6.31748 22.5695 6.98545 22.2883C7.20811 22.2062 7.2667 22.0304 7.13779 21.8195C6.76279 21.2218 6.07139 20.6828 5.41514 20.4601ZM8.79014 17.2726C8.28623 17.7297 7.85264 18.4797 7.72373 19.1476C7.57139 19.8508 7.67686 20.7297 7.99326 21.3273C8.08701 21.55 8.27451 21.5851 8.47373 21.4445C9.03623 21.0343 9.49326 20.2726 9.61045 19.5461C9.75107 18.8781 9.63389 17.9992 9.31748 17.3664C9.21201 17.1086 8.98936 17.0734 8.79014 17.2726ZM0.481539 15.925C0.575289 16.6047 0.985445 17.4015 1.48936 17.8937C1.98154 18.4093 2.79014 18.7609 3.5167 18.7843C3.75107 18.7961 3.87998 18.6437 3.84482 18.4093C3.72764 17.6945 3.31748 16.9328 2.81357 16.4758C2.30967 15.9953 1.53623 15.6203 0.856539 15.5383C0.575289 15.5031 0.434664 15.6554 0.481539 15.925ZM7.19639 14.9172C6.55186 15.1398 5.86045 15.6554 5.46201 16.2062C5.04014 16.757 4.79404 17.589 4.81748 18.3156C4.84092 18.5383 4.99326 18.6554 5.22764 18.6203C5.93076 18.4562 6.66904 17.9523 7.04404 17.3429C7.43076 16.7453 7.68857 15.9133 7.6417 15.2218C7.6417 14.9406 7.46592 14.8234 7.19639 14.9172ZM5.23936 12.175C4.68857 12.6203 4.23154 13.3703 4.09092 14.0617C4.05576 14.2726 4.17295 14.4367 4.39561 14.4484C5.12217 14.4718 5.9542 14.1554 6.48154 13.6867C7.00889 13.2297 7.47764 12.4679 7.62998 11.7883C7.66514 11.5304 7.52451 11.3547 7.2667 11.3664C6.56357 11.425 5.75498 11.7297 5.23936 12.175ZM0.493258 10.6398C0.422945 11.3312 0.610445 12.1867 0.985445 12.7961C1.33701 13.4289 2.02842 13.9797 2.70811 14.1672C2.91904 14.2375 3.10654 14.1203 3.12998 13.8859C3.20029 13.2179 3.00107 12.3625 2.62607 11.7531C2.25107 11.1672 1.58311 10.6047 0.962008 10.3586C0.715914 10.2531 0.516695 10.3586 0.493258 10.6398ZM5.88389 8.23742C5.21592 8.4718 4.52451 8.99914 4.14951 9.60852C4.02061 9.79602 4.09092 9.99523 4.30186 10.089C4.96982 10.3586 5.84873 10.3586 6.5167 10.089C7.19639 9.83117 7.89951 9.26867 8.23936 8.67102C8.37998 8.46008 8.30967 8.26086 8.05186 8.17883C7.38389 7.99133 6.5167 8.00305 5.88389 8.23742ZM1.94639 5.16711C1.6417 5.81164 1.52451 6.67883 1.65342 7.35852C1.78232 8.07336 2.23936 8.82336 2.82529 9.24523C3.00107 9.38586 3.18857 9.32727 3.30576 9.11633C3.61045 8.50695 3.71592 7.63977 3.56357 6.94836C3.42295 6.26867 2.97764 5.51867 2.48545 5.04992C2.29795 4.88586 2.07529 4.93273 1.94639 5.16711ZM8.00498 4.86242C7.31357 4.99133 6.55186 5.43664 6.11826 5.9757C5.97764 6.13977 6.01279 6.33898 6.20029 6.46789C6.82139 6.83117 7.70029 6.94836 8.3917 6.76086C9.08311 6.60852 9.84482 6.15148 10.2901 5.63586C10.4659 5.42492 10.419 5.21398 10.1729 5.10852C9.55186 4.82727 8.69639 4.7218 8.00498 4.86242ZM4.54795 1.25305C4.14951 1.8507 3.91514 2.70617 3.96201 3.38586C3.97373 4.1007 4.32529 4.9093 4.84092 5.42492C5.0167 5.58898 5.21592 5.56555 5.34482 5.37805C5.73154 4.78039 5.96592 3.92492 5.90732 3.24523C5.86045 2.57727 5.54404 1.78039 5.09873 1.22961C4.91123 1.01868 4.70029 1.04211 4.54795 1.25305ZM10.5949 0.0694565C9.91514 0.174925 9.1417 0.585081 8.64951 1.06555C8.15732 1.54602 7.77061 2.35461 7.68857 3.0343C7.66514 3.26867 7.79404 3.4093 8.02842 3.39758C8.74326 3.36242 9.54014 2.98742 10.0323 2.43664C10.5011 1.94445 10.8878 1.1593 10.9933 0.456175C11.0167 0.186644 10.8761 0.0343002 10.5949 0.0694565Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_2198">
                      <rect
                        width="12.4631"
                        height="25.592"
                        fill="white"
                        transform="translate(0.472656 0.0644531)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="title-1 text-black mb-4 font-semibold">
                Chow Now
              </h2>
              <p className="max-w-3xl lg:text-lg text-zinc-800 mb-8 md:mb-0">
                Designed and developed a mobile app that offers a discreet way
                for victims of domestic violence to confidentially report
                incidents of abuse to local authorities.
              </p>
            </div>

            <div className="hidden md:block w-[160rem] aspect-square left-1/2 translate-y-[5rem] group-hover:blur-[200px] -translate-x-1/2 blur-[100px] rounded-full relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#f7ff00] from-[#db36a4] opacity-30 group-hover:opacity-50 transition-all "></div>

            <div className="w-full flex md:scale-[0.6] md:-translate-y-[168rem] lg:-translate-y-[171rem] md:-translate-x-2">
              <Image
                src="/chow-now/mobile-1.png"
                width={589.5}
                height={1278}
                blurDataURL="/chow-now/mobile-1.png"
                className="md:mr-10 rounded-lg lg:rounded-3xl transition-all w-1/2 group-hover:-rotate-3 group-hover:scale-105"
                alt="Chow Now Case Study"
              ></Image>
              <Image
                src="/chow-now/mobile-2.png"
                width={589.5}
                height={1278}
                blurDataURL="/chow-now/mobile-2.png"
                className="rounded-lg lg:rounded-3xl transition-all w-1/2 group-hover:rotate-3 group-hover:scale-105"
                alt="Chow Now Case Study"
              ></Image>
            </div>
          </a>
        </div>
      </section>

      <section className="mt-8 px-6 flex max-w w-full flex-col text-center items-center">
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
              name="Kurt Milan"
              imgLink="/kurt-milan.jpg"
              title="Team Lead at Felix Payment Systems"
            >
              <span>
                Christina is an{" "}
                <span className="font-semibold">
                  excellent communicator and collaborator
                </span>
                . She has a proven track record of effectively communicating
                design concepts to both the technical development team and
                non-technical stakeholders, fostering a culture of collaboration
                within the team.
              </span>
            </Review>
            <Review
              name="Simon Wong Chung"
              imgLink="/simon-wong-chung.jpg"
              title="Student at Simon Fraser University"
            >
              <span>
                One of Christina's standout qualities is her attention to
                detail. Every element of her designs, from layout and typography
                to interactions and microinteractions, is meticulously crafted.
              </span>
            </Review>
            <Review
              name="Celine August Santoso"
              imgLink="/celine-santoso.jpeg"
              title="UX Researcher Intern at Samsung Electronics"
            >
              <span>
                Christina ensures that every component she designs is crafted
                down to the finest granularity. Her commitment to basing design
                decisions on UX research and data is evident in every element,
                making her work both thoughtful and highly effective.
              </span>
            </Review>
          </div>
          <div className="flex flex-col gap-6">
            <Review
              name="Eric Dam"
              imgLink="/eric-dam.jpg"
              title="Software Developer at Harris Computers"
            >
              <span>
                Christina is a{" "}
                <span className="font-semibold">
                  designer-developer powerhouse
                </span>
                .
              </span>
            </Review>
            <Review
              name="Ray Gong"
              imgLink="/ray-gong.png"
              title="Software Developer Intern at BlackBerry"
            >
              <span>
                Christina is a{" "}
                <span className="font-semibold">
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
              title="Team Lead at Felix Payment Systems"
            >
              <span>
                Christina always brings a new perspective to the product team
                with her designs. She has always gone out of her way to research
                new ways to accomodate both the developers and the stakeholder
                requirements.
              </span>
            </Review>
            <Review
              name="Gurnisha Rehal"
              imgLink="/strivey.png"
              title="UX Writer Intern at Samsung Electronics"
            >
              <span>
                Christina always goes the extra mile to create both functional
                and visually stunning UI. Her dedication to quality and
                user-focused decisions brings value to every project she
                touches.
              </span>
            </Review>
          </div>
          <div className="flex flex-col gap-6">
            <Review
              name="Michael Dresler"
              imgLink="/michael-dresler.jpeg"
              title="Student at Simon Fraser University"
            >
              <span>
                When working with Christina she consistently went above and
                beyond. She is{" "}
                <span className="font-semibold">
                  dependable, productive, passionate
                </span>
                , and does not cut corners when it comes to her work ethic.
              </span>
            </Review>
            <Review
              name="Devon Friend"
              imgLink="/devon-friend.jpg"
              title="Student at University of British Columbia"
            >
              <span>
                What does it take to bring your platform to the next level by
                leveraging exceptional UI/UX design? Whatever the answer might
                be, Christina will certainly have one for you.
              </span>
            </Review>
            <Review
              name="Yuna Okada"
              imgLink="/yuna-okada.png"
              title="Product Designer at Raccoopack Media"
            >
              <span>
                Christina stands out as one of the most exceptional designers
                I've had the pleasure of collaborating with. Her quality of
                design, attention to detail, and remarkable speed exceeded all
                expectations. Christina's dedication and drive are truly
                commendable, consistently pushing boundaries and delivering
                outstanding results make her a valuable asset to any team!
              </span>
            </Review>
          </div>
        </div>
      </section>
    </main>
  );
}
