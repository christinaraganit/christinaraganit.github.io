import PasswordDialog from "@/components/password/password-dialog";
import { cookies } from "next/headers";
import NavNotFixed from "@/components/nav-not-fixed";
import Spacer from "@/components/spacer";
import MediaTag from "@/components/media-tag";

export default async function Asana() {

    const cookieJar = await cookies();
    const hasPassword = cookieJar.get("secret")?.value === process.env.COOKIE_SECRET;

    return (
        <main className="max-w-[100vw] w-full flex flex-col items-center gap-4 lg:gap-8 pt-40 pb-32">
            <NavNotFixed></NavNotFixed>

            {hasPassword ? (
                <div>
                    <section className="px-6 max-w w-full grid grid-cols-1 lg:grid-cols-3 mb-4 gap-6 lg:gap-40">
                        <div className="col-span-2">
                            <h1 className="large-title mb-6">Editing curated work in the Asana team page</h1>
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
                                <p>May 2025 (1 month)</p>
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
                </div>
            ) : (
                <div className="h-full">
                    <PasswordDialog url="/projects/asana" />
                </div>
            )}
        </main>
    );
}