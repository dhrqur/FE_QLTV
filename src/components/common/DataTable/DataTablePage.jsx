import { useState } from "react";
import { toast } from "sonner";

import MainLayout from "@/components/layout/MainLayout";
import {
  getColumnWidth,
  matchesSearch,
} from "@/components/common/dataTableUtils";
import DataSearchCard from "@/components/common/DataTable/DataSearchCard";
import DataTableCard from "@/components/common/DataTable/DataTableCard";
import EntityFormDialog from "@/components/common/DataTable/EntityFormDialog";

function DataTablePage({
  title,
  entityName,
  columns,
  rows,
  renderDetailExtra,
  renderFormExtra,
  searchPlaceholder = "Tìm kiếm...",
}) {
  const [tableRows, setTableRows] = useState(rows);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const tableColumns = columns.filter((column) => !column.tableHidden);
  const compactTable = tableColumns.length >= 7;
  const actionWidth = compactTable ? 170 : 164;
  const tableMinWidth = Math.max(
    720,
    tableColumns.reduce((total, column) => total + getColumnWidth(column, compactTable), actionWidth),
  );
  const visibleRows = tableRows.filter((row) => matchesSearch(row, columns, searchQuery));

  function handleCreate(newRow) {
    setTableRows((currentRows) => [...currentRows, newRow]);
    toast.success(`Thêm ${entityName.toLowerCase()} thành công`, {
      description: "Dữ liệu mới đã được cập nhật vào danh sách.",
    });
  }

  function handleEdit(targetRow, updatedRow) {
    setTableRows((currentRows) => currentRows.map((item) => (item === targetRow ? updatedRow : item)));
    toast.success(`Cập nhật ${entityName.toLowerCase()} thành công`, {
      description: "Thông tin đã được lưu lại.",
    });
  }

  function handleDelete(targetRow) {
    setTableRows((currentRows) => currentRows.filter((item) => item !== targetRow));
    toast.success(`Xóa ${entityName.toLowerCase()} thành công`, {
      description: "Bản ghi đã được xóa khỏi danh sách.",
    });
  }

  function handleResetSearch() {
    setSearchInput("");
    setSearchQuery("");
    toast.info("Đã đặt lại bộ lọc", {
      description: "Danh sách đang hiển thị toàn bộ dữ liệu.",
    });
  }

  return (
    <MainLayout>
      <div className="space-y-5">
        <section className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">{title}</h1>
          </div>
          <EntityFormDialog
            columns={columns}
            entityName={entityName}
            mode="create"
            onSave={handleCreate}
            renderFormExtra={renderFormExtra}
            rows={tableRows}
            title={`Thêm ${entityName.toLowerCase()}`}
          />
        </section>

        <DataSearchCard
          onChange={setSearchInput}
          onReset={handleResetSearch}
          onSearch={() => setSearchQuery(searchInput.trim())}
          searchInput={searchInput}
          searchPlaceholder={searchPlaceholder}
        />

        <DataTableCard
          actionWidth={actionWidth}
          columns={tableColumns}
          compactTable={compactTable}
          entityName={entityName}
          onDelete={handleDelete}
          onEdit={handleEdit}
          renderDetailExtra={renderDetailExtra}
          renderFormExtra={renderFormExtra}
          rows={tableRows}
          setRows={setTableRows}
          tableMinWidth={tableMinWidth}
          visibleRows={visibleRows}
        />
      </div>
    </MainLayout>
  );
}

export default DataTablePage;
