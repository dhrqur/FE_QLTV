import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatusBadge from "@/components/common/StatusBadge";
import TableActionButtons from "@/components/common/TableActionButtons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DeleteSachDialog,
  SachDetailDialog,
  SachFormDialog,
} from "@/pages/sach/components/SachDialogs";
import { displayValue, getSachStatus } from "@/pages/sach/sachUtils";

function SachTable({ danhSach, datasets, lookups, onDelete, onEdit, rows }) {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(danhSach.length / pageSize));
  const activePage = Math.min(currentPage, totalPages);
  const pageStart = (activePage - 1) * pageSize;
  const danhSachTheoTrang = danhSach.slice(pageStart, pageStart + pageSize);

  return (
    <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
      <CardContent>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Table className="min-w-[1090px] table-fixed text-[13px]">
            <TableHeader className="bg-orange-500">
              <TableRow>
                {["Mã sách", "Tên sách", "Tác giả", "Thể loại", "NXB", "Năm XB", "Ngôn ngữ", "Kệ sách", "Số lượng", "Trạng thái"].map((label) => (
                  <TableHead className="h-9 px-2 font-bold text-white" key={label}>{label}</TableHead>
                ))}
                <TableHead className="sticky right-0 z-10 w-[160px] bg-orange-500 px-2 text-center font-bold text-white">
                  Hành động
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {danhSachTheoTrang.map((sach) => (
                <TableRow key={sach.MaSach}>
                  <TableCell className="px-2 py-2 font-bold text-slate-900">{sach.MaSach}</TableCell>
                  <TextCell value={sach.TenSach} strong />
                  <TextCell value={displayValue(lookups.authorNames, sach.MaTG)} />
                  <TextCell value={displayValue(lookups.categoryNames, sach.MaTL)} />
                  <TextCell value={displayValue(lookups.publisherNames, sach.MaNXB)} />
                  <TableCell className="px-2 py-2">{sach.NamXB}</TableCell>
                  <TextCell value={displayValue(lookups.languageNames, sach.MaNN)} />
                  <TextCell value={displayValue(lookups.shelfNames, sach.MaViTri)} />
                  <TableCell className="px-2 py-2">{sach.SoLuong}</TableCell>
                  <TableCell className="px-2 py-2">
                    <StatusBadge status={getSachStatus(sach.SoLuong)} />
                  </TableCell>
                  <TableCell className="sticky right-0 z-10 bg-white px-1.5 py-2">
                    <TableActionButtons>
                      <SachDetailDialog lookups={lookups} sach={sach} />
                      <SachFormDialog datasets={datasets} mode="edit" onSave={(updated) => onEdit(sach, updated)} rows={rows} sach={sach} />
                      <DeleteSachDialog onDelete={() => onDelete(sach)} sach={sach} />
                    </TableActionButtons>
                  </TableCell>
                </TableRow>
              ))}
              {danhSach.length === 0 ? (
                <TableRow>
                  <TableCell className="py-8 text-center font-medium text-slate-500" colSpan={11}>
                    Không tìm thấy sách phù hợp.
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Hiển thị {danhSach.length === 0 ? 0 : pageStart + 1}–{Math.min(pageStart + pageSize, danhSach.length)} trong {danhSach.length} sách
          </span>
          <div className="flex items-center gap-1">
            <Button
              disabled={activePage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
              size="icon-xs"
              variant="outline"
            >
              ‹
            </Button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <Button
                className={page === activePage ? "bg-orange-500 text-white hover:bg-orange-600" : ""}
                key={page}
                onClick={() => setCurrentPage(page)}
                size="icon-xs"
                variant={page === activePage ? "default" : "ghost"}
              >
                {page}
              </Button>
            ))}
            <Button
              disabled={activePage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
              size="icon-xs"
              variant="outline"
            >
              ›
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TextCell({ strong = false, value }) {
  return (
    <TableCell className={`px-2 py-2 ${strong ? "font-semibold text-slate-900" : ""}`}>
      <span className="block truncate" title={String(value ?? "Chưa có")}>{value ?? "Chưa có"}</span>
    </TableCell>
  );
}

export default SachTable;
