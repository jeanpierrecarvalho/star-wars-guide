"use client";

import PageTitle from "@/components/Page/PageTitle";
import Table from "@/components/Table";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams() as { type?: string };

  if (!params.type) {
    return <div>Error: No type provided.</div>;
  }

  return (
    <main>
      <PageTitle title={params.type} />
      <div>
        <Table type={params.type} />
      </div>
    </main>
  );
}
