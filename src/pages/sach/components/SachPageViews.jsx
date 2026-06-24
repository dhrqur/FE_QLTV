import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router";

import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SachDetailContent from "@/pages/sach/components/SachDetailContent";
import SachFormFields from "@/pages/sach/components/SachFormFields";

export function SachFormPage({ datasets, mode, rows, sach }) {
  const isEdit = mode === "edit";

  return (
    <MainLayout>
      <h1 className="mb-5 text-2xl font-extrabold tracking-tight text-slate-900">
        {isEdit ? "Sửa Sách" : "Thêm Sách"}
      </h1>
      <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
        <CardContent className="space-y-5">
          <SachFormFields isEdit={isEdit} rows={rows} sach={sach ?? {}} {...datasets} />
          <div className="mt-5 flex gap-2">
            <Button className="bg-orange-500 font-bold hover:bg-orange-600">
              <Save className="size-4" />
              {isEdit ? "Lưu thay đổi" : "Thêm mới"}
            </Button>
            <Button asChild variant="outline">
              <Link to="/sach"><ArrowLeft className="size-4" />Quay lại</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export function SachDetailPage({ lookups, sach }) {
  return (
    <MainLayout>
      <h1 className="mb-5 text-2xl font-extrabold tracking-tight text-slate-900">Chi tiết Sách</h1>
      <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>{sach.TenSach}</CardTitle>
          <div className="flex gap-2">
            <Button asChild className="border-orange-200 bg-orange-50 text-orange-700" size="sm" variant="outline">
              <Link to={`/sach/${sach.MaSach}/sua`}>Sửa</Link>
            </Button>
            <Button asChild size="sm" variant="outline"><Link to="/sach">Quay lại</Link></Button>
          </div>
        </CardHeader>
        <CardContent><SachDetailContent lookups={lookups} sach={sach} /></CardContent>
      </Card>
    </MainLayout>
  );
}
