import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
    getInterviewsByUserId,
    getLatestInterviews,
} from "@/lib/actions/general.action";
import Welcome from "./_components/Welcome";
import { StyledButton } from "@/components/ui/styledButton";

async function Home() {
    const user = await getCurrentUser();

    const [userInterviews, allInterview] = await Promise.all([
        user?.id ? getInterviewsByUserId(user.id) : [],
        getLatestInterviews({ userId: user?.id || "" }),
    ]);

    const hasPastInterviews = (userInterviews?.length || 0) > 0;
    const hasUpcomingInterviews = (allInterview?.length || 0) > 0;

    console.log("userInterviews", userInterviews);
    console.log("allInterview", allInterview);

    return (
        <>
            <Welcome user={user?.name || ""} />
            <section className="card-cta bg-black text-blue-200 p-8 rounded-lg shadow-lg">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2 className="text-2xl font-bold">Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                    <p className="text-md text-blue-300">
                        Practice real interview questions & get instant feedback
                    </p>
                    <StyledButton href="/interview">
                        Start an Interview
                    </StyledButton>
                </div>

                <Image
                    src="/robot.png"
                    alt="robo-dude"
                    width={400}
                    height={400}
                    className="max-sm:hidden"
                />
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-2xl font-semibold text-blue-200">Your Interviews</h2>

                <div className="interviews-section">
                    {hasPastInterviews ? (
                        userInterviews?.map((interview) => (
                            <InterviewCard
                                key={interview.id}
                                userId={user?.id}
                                interviewId={interview.id}
                                role={interview.role}
                                type={interview.type}
                                company={interview.company}
                                techstack={interview.techstack}
                                createdAt={interview.createdAt}
                            />
                        ))
                    ) : (
                        <p className="bg-black text-blue-200 p-4 rounded-lg shadow-md">You haven&apos;t taken any interviews yet</p>
                    )}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-2xl font-semibold text-blue-200">Take Interviews</h2>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        allInterview?.map((interview) => (
                            <InterviewCard
                                key={interview.id}
                                userId={user?.id}
                                interviewId={interview.id}
                                role={interview.role}
                                type={interview.type}
                                techstack={interview.techstack}
                                company={interview.company}
                                createdAt={interview.createdAt}
                            />
                        ))
                    ) : (
                        <p className="bg-black text-blue-200 p-4 rounded-lg shadow-md">There are no interviews available</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Home;