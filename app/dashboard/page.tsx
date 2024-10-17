import { requireUser } from "../lib/hooks";

const DashboardPage = async () => {
  const session = await requireUser();

  return <div className="">Hello from the dashboard</div>;
};

export default DashboardPage;
