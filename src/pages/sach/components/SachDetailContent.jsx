import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { displayValue } from "@/pages/sach/sachUtils";

function SachDetailContent({ lookups, sach }) {
  const rows = [
    ["Mã sách", sach.MaSach],
    ["Tác giả", displayValue(lookups.authorNames, sach.MaTG)],
    ["Nhà xuất bản", displayValue(lookups.publisherNames, sach.MaNXB)],
    ["Thể loại", displayValue(lookups.categoryNames, sach.MaTL)],
    ["Tên sách", sach.TenSach],
    ["Năm xuất bản", sach.NamXB],
    ["Số lượng", sach.SoLuong],
    ["Ngôn ngữ", displayValue(lookups.languageNames, sach.MaNN)],
    ["Kệ sách", displayValue(lookups.shelfNames, sach.MaViTri)],
  ];

  return (
    <Table>
      <TableBody>
        {rows.map(([label, value]) => (
          <TableRow key={label}>
            <TableCell className="w-52 bg-slate-50 font-bold text-slate-700">{label}</TableCell>
            <TableCell>{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SachDetailContent;
