import { redirect } from "next/navigation";
import { auth } from "../lib/auth";

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/");
  }

  return <div className="">Hello from the dashboard</div>;
};

export default DashboardPage;
