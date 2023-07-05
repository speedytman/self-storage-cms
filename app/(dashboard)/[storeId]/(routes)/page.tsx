import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const storeId = params.storeId;

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });
  return <div>DashboardPage: {storeId}</div>;
};

export default DashboardPage;
