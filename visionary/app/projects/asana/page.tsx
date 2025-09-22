import PasswordDialog from "@/components/password/password-dialog";
import { cookies } from "next/headers";
import NavNotFixed from "@/components/nav-not-fixed";
import Spacer from "@/components/spacer";
import MediaTag from "@/components/media-tag";
import LottieEmbed from "@/components/lottie-embed";
import Tag from "@/components/tag";
import Image from "next/image";
import currentOTTO from "../../../public/otto/current-otto.png";
import QuarterSpacer from "@/components/quarter-spacer";
import HalfSpacer from "@/components/half-spacer";
import OpenModal from "@/components/decision-modal/open-modal";

export default async function Asana() {

    const cookieJar = await cookies();
    const hasPassword = cookieJar.get("secret")?.value === process.env.COOKIE_SECRET;

    return (
        <main className="max-w-[100vw] w-full flex flex-col items-center gap-4 lg:gap-8 pt-40 pb-32">
            <NavNotFixed></NavNotFixed>

            {hasPassword ? (
                <div className="flex flex-col items-center">
                    <section className="px-6 max-w w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-40">
                        <div className="col-span-2">
                            <h1 className="large-title mb-6">Empowering internal teams at Asana to drive user adoption with Custom Onboarding</h1>
                            <p className="p-lg font-light mb-4 lg:mb-0">
                                As a product design intern at Asana, I led the design direction for a feature within an internal tool that would enable our Customer Success team to create customized onboarding flows for the organizations they work with, making it easier for new users to adopt Asana and start using the platform effectively.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 lg:flex sm:grid-cols-2 md:grid-cols-3 lg:flex-col gap-6">
                            <div>
                                <h2 className="callout mb-1">Team</h2>
                                <p>Christina Raganit (Lead Designer)<br></br>Chuiee Yang (Design Mentor)</p>
                            </div>

                            <div>
                                <h2 className="callout mb-1">Status</h2>
                                <p>Handed Off<br></br>In Development</p>
                            </div>


                            <div>
                                <h2 className="callout mb-1">Duration</h2>
                                <p>
                                    June–July 2025<br></br>(6 Weeks)
                                </p>
                            </div>
                        </div>
                    </section>

                    <Spacer></Spacer>

                    <section className="px-6 max-w w-full flex gap-8 flex-col">
                        <div>
                            <h2 className="callout text-purple-500 mb-4">Background</h2>
                            <div className="grid lg:grid-cols-2 lg:gap-12 gap-4">
                                <p className="title-2 font-normal">
                                    The ideal onboarding experience to Asana looks different for every team.
                                </p>

                                <p className="title-2 font-normal">
                                    When organizations rely on a single generic flow, employees fail to see Asana’s value, and adoption suffers.
                                </p>
                            </div>
                        </div>
                        <Image src="/otto/otto-background.png" width={1800} height={1076} alt="Current version of OTTO" className="max-w w-full"></Image>
                    </section>

                    <HalfSpacer />

                    <section className="px-6 max-w w-full">
                        <div className="grid lg:grid-cols-2 lg:gap-12 gap-4">
                            <div className="grid lg:gap-6 gap-4 items-center">
                                <p className="p-lg font-normal">
                                    Asana <i>already</i> enables Admins to create Custom Onboarding; however, their heavy workloads often keep them from setting these flows up.
                                </p>

                                <Image src="/otto/admin-problem.png" width={1000} height={760} alt="Admins don't have time to build custom onboarding"></Image>
                            </div>

                            <div className="grid lg:gap-6 gap-4 items-center">
                                <p className="p-lg font-normal">
                                    Customer Success Managers (CSMs) can’t create these flows themselves, since they need to be an Admin at that organization.
                                </p>

                                <Image src="/otto/csm-no-access.png" width={1000} height={760} alt="Admins don't have time to build custom onboarding"></Image>
                            </div>
                        </div>
                    </section>

                    <HalfSpacer></HalfSpacer>
                    <HalfSpacer></HalfSpacer>

                    <section className="p-6 lg:py-0 max-w">
                        <section className="text-center flex flex-col mx-auto items-center p-6 py-12 lg:p-16">
                            <h2 className="callout text-purple-500 mb-4">Design Challenge</h2>
                            <p className="text-xl lg:text-4xl max-w-3xl tracking-tight text-balance">
                                How might we enable CSMs to create Custom Onboarding flows on behalf of a company, while protecting said company’s sensitive data?
                            </p>
                        </section>
                    </section>


                    <HalfSpacer></HalfSpacer>
                    <HalfSpacer></HalfSpacer>

                    <section className="px-6 max-w w-full">
                        <div className="grid lg:grid-cols-3 lg:gap-16 gap-4 items-center">
                            <div className="flex flex-col lg:gap-6 gap-4">
                                <h2 className="callout text-purple-500">What's OTTO?</h2>
                                <p className="title-2 font-normal">
                                    CSMs live in this internal tool called OTTO.
                                </p>
                                <p>Currently, they can only view existing Custom Onboarding flows. They can’t create one.</p>
                                <p>That’s where I intervened, navigating the technical challenges of OTTO and the complex configurations of Custom Onboarding to deliver a solution that meets CSMs’ needs.</p>

                            </div>
                            <Image src="/otto/otto.png" width={1050} height={700} className="col-span-2" alt="Current OTTO"></Image>
                        </div>
                    </section>

                    <HalfSpacer />
                    <HalfSpacer />

                    <section className="px-6 max-w w-full">
                        <div>
                            <h2 className="callout text-purple-500 mb-4">Constraints</h2>
                            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
                                <div>
                                    <p className="title-2 font-normal mb-4">
                                        OTTO has a <i>very</i> limited component set.
                                    </p>
                                    <p>
                                        I couldn’t use components and patterns that were available in the Admin Console, since the two codebases are not shared.
                                    </p>
                                </div>

                                <div>
                                    <p className="title-2 font-normal mb-4">
                                        In OTTO, sensitive company information must be redacted.
                                    </p>
                                    <p>
                                        This protects NDA information, but can get in the way of them creating Custom Onboarding flows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Spacer></Spacer>

                    <section className="px-6 max-w w-full mb-8">
                        <div className="md:w-1/2 mx-auto">
                            <h2 className="callout text-purple-500 mb-4">Solution</h2>

                            <div>
                                <p className="title-1 font-normal mb-4">
                                    Handed off a feature that met CSMs' needs by navigating complex onboarding logic, technical limitations, and sensitive data constraints
                                </p>
                                <p>
                                    Through OTTO, CSMs wouldn’t need to be Admins at the organizations they work with, since the internal tool already obfuscates sensitive data.
                                </p>
                            </div>
                        </div>
                    </section>


                    <div className="bg-[#25172B] block w-full lg:px-40 lg:py-20">
                        <video src="/otto/Comp 1.mp4" width={1920} height={1364} className="w-full" autoPlay controls loop></video>
                    </div>

                    <Spacer></Spacer>

                    <section className="px-6 max-w w-full mb-6">
                        <div className="md:w-1/2 mx-auto">
                            <Tag color="purple">Design Decision | 1</Tag>

                            <div>
                                <p className="title-2 font-normal mb-4">
                                    How do I design for clarity when key information is redacted?
                                </p>
                                <p>
                                    How do you know what flow you’re editing if you can’t see its name?
                                </p>
                            </div>
                        </div>
                    </section>

                    <Image src="/otto/edit-flow-otto.png" className="w-full lg:max-w-[80rem]" width={1600} height={900} alt="Design decisions on edit flow"></Image>

                    <HalfSpacer />
                    <HalfSpacer />

                    <section className="px-6 max-w w-full mb-6">
                        <div className="md:w-1/2 mx-auto">
                            <Tag color="purple">Design Decision | 2</Tag>
                            <div>
                                <p className="title-2 font-normal">
                                    How do I show the right amount of detail at the right time?
                                </p>
                            </div>
                        </div>
                    </section>

                    <Image src="/otto/summary-pane-feedback.png" className="w-full lg:max-w-[80rem]" width={1600} height={784} alt="Initial feedback on the summary pane"></Image>

                    <section className="px-6 max-w w-full mt-10">
                        <div className="md:w-1/2 mx-auto">
                            <div>
                                <p>
                                    I landed on a dynamic summary where dropdown groups begin collapsed, and only expand when the CSM interacts with its associated step.
                                </p>
                            </div>
                        </div>
                    </section>

                    <HalfSpacer />
                    <HalfSpacer />

                    <section className="px-6 max-w w-full mb-6">
                        <div className="md:w-1/2 mx-auto">
                            <Tag color="purple">Design Decision | 2</Tag>
                            <div>
                                <p className="title-2 font-normal">
                                    How do I show the right amount of detail at the right time?
                                </p>
                            </div>
                        </div>
                    </section>

                    <Image src="/otto/summary-pane-feedback.png" className="w-full lg:max-w-[80rem]" width={1600} height={784} alt="Initial feedback on the summary pane"></Image>


                    {/* <Image src="/otto/current-otto.png" width={1440} height={1024} alt="Current version of OTTO" className=""></Image>
                        <MediaTag media="Image">
                            Custom Onboarding tab in current version of OTTO
                        </MediaTag> */}

                    <HalfSpacer></HalfSpacer>
                    <HalfSpacer></HalfSpacer>

                    <section className="px-6 max-w w-full mb-6">
                        <div className="md:w-1/2 mx-auto">
                            <Tag color="purple">Design Decision | 3</Tag>
                            <div className="pt-2">
                                <p className="mb-3 opacity-60">Given the limited component set of OTTO...</p>
                                <p className="title-2 font-normal mb-6">
                                    What’s the best existing form factor for creating a Custom Onboarding flow?
                                </p>
                                <p>I narrowed it down to two options — a modal with a side stepper and a modal with a persistent summary.</p>
                            </div>
                        </div>
                    </section>

                    <Image src="/otto/form-factor.png" className="w-full lg:max-w-[80rem]" width={1600} height={940} alt="Two options and comparisons"></Image>


                    <section className="px-6 max-w w-full mt-12 mb-6">
                        <div className="md:w-1/2 mx-auto">
                            <div>
                                <p>I chose the persistent summary because certain configurations in Custom Onboarding depend on one another. The persistent summary will help CSMs create flows more efficiently with the <em>context it provides from previous steps</em>.</p>
                            </div>
                        </div>
                    </section>

                    <Image src="/otto/creation-exp-side-stepper.png" className="w-full lg:max-w-[80rem]" width={1600} height={628} alt="Side stepper form factor is inefficient for CSMs"></Image>


                    <HalfSpacer></HalfSpacer>
                    <HalfSpacer></HalfSpacer>

                    <section className="px-6 max-w w-full mb-6">
                        <div className="md:w-1/2 mx-auto">
                            <Tag color="purple">Design Decision | 4</Tag>
                            <div className="pt-2">
                                <p className="title-2 font-normal mb-6">
                                    When should I push back against technical limitations?
                                </p>
                                <p className="mb-6">I proposed new functionality in OTTO when I recognized that they contributed to my goal of creating a welcoming first experience for new users of Asana and helping them recognize how the platform can meet their unique needs.</p>
                                <p>The functionality was for custom logo upload and a HEX code input for setting and previewing a background color in the welcome message.</p>
                            </div>
                        </div>
                    </section>


                    <video src="/otto/trimmed-color.mp4" width={1440} height={1024} className="w-full h-auto max-w px-6 mx-auto" autoPlay controls></video>


                    <Spacer></Spacer>

                    <section className="px-6 max-w w-full">
                        <div className="w-full">
                            <h2 className="callout text-purple-500 mb-4">Learnings</h2>
                            <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
                                <div>
                                    <p className="title-2 font-normal mb-4">
                                        Thinking critically about deeply interconnected systems
                                    </p>
                                    <p>
                                        I had to understand the dependencies between different configurations of a Custom Onboarding flow, as well as the technical limitations of OTTO, to be able to design the optimal experience for a CSM given these constraints.
                                    </p>
                                </div>

                                <div>
                                    <p className="title-2 font-normal mb-4">
                                        Balancing engineering cost with user needs
                                    </p>
                                    <p>
                                        I recognized that this project was not about improving the existing experience of OTTO. CSMs would rather have this feature sooner as it would allow them to deliver the ideal onboarding experiences for new users of Asana, driving adoption.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                  <OpenModal />
                </div>
            ) : (
                <div className="h-full">
                    <PasswordDialog url="/projects/asana" />
                </div>
            )}
        </main>
    );
}