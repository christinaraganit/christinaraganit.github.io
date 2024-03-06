import Nav from "@/components/nav";
import Award from "@/components/award";

export default function Awards() {
  return (
    <main className="w-full flex flex-col gap-24 items-center pt-20 pb-20">
      <Nav></Nav>

      <section className="px-6 flex max-w-[80rem] w-full flex-col text-center items-center">
        <h1 className="callout text-blue-600 mb-3">Awards</h1>
        <p className="title-1 font-semibold mb-4 max-w-3xl">
          Celebrating moments of excellence.
        </p>
        <p className="text-zinc-600 max-w-2xl">
          Over the years, I've had the pleasure of earning accolades for my
          academic achievements and have been fortunate to receive recognition
          for my talents in both design and development.
        </p>
      </section>

      <section className="px-6 grid md:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-[80rem] w-full">
        <Award
          award="Undergraduate Open Scholarship"
          awardedBy="Simon Fraser University"
          date="Jan 2024"
          type="school"
        ></Award>
        <Award
          award="Nancy Morrison and Fraser Green Special Abilities Award"
          awardedBy="Simon Fraser University"
          date="October 2023"
          type="school"
        ></Award>
        <Award
          award="Undergraduate Open Scholarship"
          awardedBy="Simon Fraser University"
          date="Sep 2023"
          type="school"
        ></Award>
        <Award
          award="2nd Place, StormHacks 2023"
          awardedBy="SFU Surge"
          date="Jun 2023"
          project="Watchdog"
        ></Award>
        <Award
          award="Best UI/UX Design at StormHacks 2023"
          awardedBy="SFU Surge"
          date="Jun 2023"
          project="Watchdog"
        ></Award>
        <Award
          award="1st Place at Eunoia UX Hackathon"
          awardedBy="IATSU"
          date="Apr 2023"
          project="Proud Zebra"
        ></Award>
        <Award
          award="Best Design at cmd-f 2023"
          awardedBy="Iris Labs"
          date="Mar 2023"
          project="Chow Now"
        ></Award>
        <Award
          award="1st Place at cmd-f 2023"
          awardedBy="nwPlus"
          date="Mar 2023"
          project="Chow Now"
        ></Award>
        <Award
          award="Judges' Choice Award at RootHacks 2023"
          awardedBy="SFU Software Systems Student Society"
          date="Feb 2023"
          project="Misfortune Cookie"
        ></Award>
        <Award
          award="2nd Place at HackED 2023"
          awardedBy="University of Alberta Computer Engineering Club"
          date="Jan 2023"
          project="Toneteller"
        ></Award>
        <Award
          award="Computer Systems Award in Tech Entrepreneurship"
          awardedBy="British Columbia Institute of Technology"
          date="May 2021"
          type="school"
        ></Award>
        <Award
          award="Most Useful App Award"
          awardedBy="British Columbia Institute of Technology"
          date="May 2020"
          project="Air Tutor"
        ></Award>
        <Award
          award="President's Entrance Award"
          awardedBy="British Columbia Institute of Technology"
          date="Sep 2019"
          type="school"
        ></Award>
        <Award
          award="BC Excellence Award"
          awardedBy="Government of British Columbia"
          date="Jun 2019"
          type="school"
        ></Award>
        <Award
          award="District Authority Award"
          awardedBy="Government of British Columbia"
          date="Jun 2019"
          type="school"
        ></Award>
      </section>
    </main>
  );
}
