"use client";

import PageTitle from "@/components/Page/PageTitle";
import Table from "@/components/Table";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams() as { type?: string };

  if (!params.type) {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="mt-8 text-center text-red-500"
      >
        Error: No type provided.
      </div>
    );
  }

  return (
    <main role="main" aria-labelledby="page-title">
      <PageTitle title={params.type} />
      <div>
        <Table type={params.type} />
      </div>
    </main>
  );
}
