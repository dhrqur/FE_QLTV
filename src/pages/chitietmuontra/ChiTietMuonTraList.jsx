import DataTablePage from "@/components/common/DataTablePage";
import { books, borrowDetails, borrowTickets } from "@/data/libraryData";
import { createLookup } from "@/utils/lookup";

const bookNames = createLookup(books, "MaSach", "TenSach");

function ChiTietMuonTraList() {
  return (
    <DataTablePage
      columns={[
        {
          key: "MaMT",
          label: "MaMT",
          displayLabel: "Mã mượn trả",
          primaryKey: true,
          options: borrowTickets.map((ticket) => ({
            label: ticket.MaMT,
            value: ticket.MaMT,
          })),
          widthValue: 130,
        },
        {
          key: "MaSach",
          label: "MaSach",
          displayLabel: "Sách",
          displayValue: (row) => bookNames[row.MaSach] ?? row.MaSach,
          primaryKey: true,
          options: books.map((book) => ({
            label: `${book.MaSach} - ${book.TenSach}`,
            value: book.MaSach,
          })),
          widthValue: 250,
        },
        { key: "SoLuong", label: "SoLuong", displayLabel: "Số lượng", widthValue: 120 },
      ]}
      entityName="Chi tiết mượn trả"
      rows={borrowDetails}
      searchPlaceholder="Tìm mã phiếu hoặc tên sách..."
      title="Chi tiết Mượn trả"
    />
  );
}

export default ChiTietMuonTraList;
