"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ColorColumn, columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";

interface ColorClientProps {
  data: ColorColumn[]
}

export const ColorClient : React.FC<ColorClientProps>= ({
  data
}) => {
    const router = useRouter();
    const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          desc="Manage colors for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
        </Button>
      </div>
        <Separator />
        <DataTable columns={columns} data={data} searchKey="name"/>
        <Heading title="API" desc="API calls for Colors" />
        <Separator />
        <ApiList entityName="colors" entityIdName="colorId"/>
    </>
  );
};
