import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getCompanyLogos } from "@/lib/utils";

import {
    getFeedbackByInterviewId,
    getInterviewById,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const InterviewDetails = async ({ params }: RouteParams) => {
    const { id } = await params;

    const user = await getCurrentUser();

    const interview = await getInterviewById(id);
    if (!interview) redirect("/");

    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user?.id!,
    });

    const companyLogo = await getCompanyLogos(interview.company);

    return (
        <div className="interviewid-layout">
            <div className="flex flex-row gap-4 justify-between my-6">
                <div className="flex flex-row gap-4 items-center max-sm:flex-col">
                    <div className="flex flex-row gap-4 items-center">
                        <Image
                            src={companyLogo}
                            alt="company-logo"
                            width={40}
                            height={40}
                            className="rounded-full object-cover size-[40px]"
                        />
                        <h3 className="capitalize text-xl lg:text-3xl text-blue-200">{interview.role} Interview</h3>
                    </div>

                    <DisplayTechIcons techStack={interview.techstack} />
                </div>

                <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
                    {interview.type}
                </p>
            </div>

            <Agent
                userName={user?.name!}
                userId={user?.id}
                interviewId={id}
                type="interview"
                questions={interview.questions}
                feedbackId={feedback?.id}
            />
        </div>
    );
};

export default InterviewDetails;