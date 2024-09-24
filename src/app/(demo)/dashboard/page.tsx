import { ContentLayout } from "@/components/admin-panel/content-layout";
import EditableCard from "@/components/demo/expense-card";

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <div>
        <EditableCard/>
      </div>
    </ContentLayout>
  );
}
