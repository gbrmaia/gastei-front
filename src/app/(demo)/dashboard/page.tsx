import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import EditableCard from "@/components/demo/expense-card";

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <div className="">
        <EditableCard />
      </div>
    </ContentLayout>
  );
}
