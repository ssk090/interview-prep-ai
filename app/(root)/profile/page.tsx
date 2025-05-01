import { getCurrentUser } from "@/lib/actions/auth.action";

export default async function SettingsPage() {
    const user = await getCurrentUser();
    console.log("user", user);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Profile</h1>

            {/* Profile Section */}
            <div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full rounded border px-3 py-2 bg-gray-50 dark:bg-gray-800"
                            placeholder="Your Name"
                            value={user?.name || ""}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full rounded border px-3 py-2 bg-gray-50 dark:bg-gray-800"
                            placeholder="you@example.com"
                            value={user?.email || ""}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}