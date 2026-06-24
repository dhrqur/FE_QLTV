import { BookCopy, BookOpen, ClipboardCheck, Users } from "lucide-react";

import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { books, topBorrowedBooks, topReaders } from "@/data/libraryData";

const stats = [
  { label: "Tổng đầu sách", value: books.length, icon: BookOpen },
  { label: "Sách đang mượn", value: 14, icon: ClipboardCheck },
  { label: "Tổng độc giả", value: 128, icon: Users },
  { label: "Tổng số lượng sách", value: 86, icon: BookCopy },
];

function Dashboard() {
  return (
    <MainLayout
      title="Thống kê và Báo cáo"
      description="Theo dõi số liệu vận hành và báo cáo mượn trả"
    >
      <div className="space-y-5">
        <section className="rounded-lg border border-orange-100 bg-white p-5 shadow-sm shadow-orange-950/5">
          <h3 className="text-xl font-extrabold text-slate-800">Thống kê nhanh</h3>
          <p className="text-sm font-medium text-slate-500">
            Tổng hợp dữ liệu quan trọng của thư viện theo thời gian thực.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Card className="rounded-lg border-orange-100 shadow-sm shadow-orange-950/5" key={stat.label}>
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center justify-between text-sm font-bold text-slate-500">
                  {stat.label}
                  <span className="flex size-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                    <stat.icon className="size-4" />
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-slate-800">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.25fr_1fr]">
          <ReportTable title="Báo cáo top 5 độc giả mượn nhiều nhất" label="Tên độc giả" rows={topReaders} />
          <ReportTable title="Báo cáo top 5 sách mượn nhiều nhất" label="Tên sách" rows={topBorrowedBooks} />
        </section>

        <Card className="rounded-lg border-orange-100 shadow-sm shadow-orange-950/5">
          <CardHeader>
            <CardTitle className="text-xl font-extrabold">Báo cáo phiếu mượn quá hạn</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-orange-50">
                <TableRow>
                  <TableHead>Mã phiếu</TableHead>
                  <TableHead>Độc giả</TableHead>
                  <TableHead>Hạn trả</TableHead>
                  <TableHead>Trạng thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center text-slate-500" colSpan={4}>
                    Không có phiếu quá hạn
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}

function ReportTable({ title, label, rows }) {
  return (
    <Card className="rounded-lg border-orange-100 shadow-sm shadow-orange-950/5">
      <CardHeader>
        <CardTitle className="text-xl font-extrabold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-orange-50">
            <TableRow>
              <TableHead>{label}</TableHead>
              <TableHead className="text-right">Tổng lượt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name ?? row.title}>
                <TableCell>{row.name ?? row.title}</TableCell>
                <TableCell className="text-right font-bold text-orange-600">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default Dashboard;
