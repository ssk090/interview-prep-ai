import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Interview = async () => {
    const user = await getCurrentUser();
    return (
        <div className="flex flex-col w-full">
            <section className="bg-dark text-blue-200 p-8 mb-2 rounded-lg shadow-lg">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Interview Generation</h1>
            </section>
            <Agent userName={user?.name || "Guest"} userId={user?.id} type="generate" />
        </div>
    )
}
export default Interview;