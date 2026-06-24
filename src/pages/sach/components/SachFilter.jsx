import { RotateCcw, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const selectClass =
  "h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-orange-300 focus:ring-3 focus:ring-orange-100";

function SachFilter({
  authors,
  categories,
  filters,
  languages,
  onApply,
  onChange,
  onReset,
  publishers,
  shelves,
}) {
  return (
    <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-extrabold text-slate-900">Bộ lọc tìm kiếm</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-x-5 gap-y-4 md:grid-cols-3">
          <FilterField label="Từ khóa">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                className="h-10 rounded-lg border-slate-200 pl-10"
                onChange={(event) => onChange("keyword", event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && onApply()}
                placeholder="Nhập mã sách, tên sách..."
                value={filters.keyword}
              />
            </div>
          </FilterField>
          <FilterSelect label="Tác giả" name="MaTG" items={authors} itemKey="MaTG" itemLabel="TenTG" {...{ filters, onChange }} />
          <FilterSelect label="Thể loại" name="MaTL" items={categories} itemKey="MaTL" itemLabel="TenTL" {...{ filters, onChange }} />
          <FilterSelect label="Nhà xuất bản" name="MaNXB" items={publishers} itemKey="MaNXB" itemLabel="TenNXB" {...{ filters, onChange }} />
          <FilterSelect label="Ngôn ngữ" name="MaNN" items={languages} itemKey="MaNN" itemLabel="TenNN" {...{ filters, onChange }} />
          <FilterSelect label="Kệ sách" name="MaViTri" items={shelves} itemKey="MaViTri" itemLabel="TenKe" {...{ filters, onChange }} />
        </div>
        <div className="flex justify-end gap-2">
          <Button className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50" onClick={onReset} variant="outline">
            <RotateCcw className="size-4" />
            Đặt lại
          </Button>
          <Button className="bg-orange-500 font-bold hover:bg-orange-600" onClick={onApply}>
            <Search className="size-4" />
            Tìm kiếm
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function FilterField({ children, label }) {
  return (
    <label className="space-y-2 text-sm font-bold text-slate-700">
      <span>{label}</span>
      {children}
    </label>
  );
}

function FilterSelect({ filters, itemKey, itemLabel, items, label, name, onChange }) {
  return (
    <FilterField label={label}>
      <select className={selectClass} onChange={(event) => onChange(name, event.target.value)} value={filters[name]}>
        <option value="">Chọn {label.toLowerCase()}</option>
        {items.map((item) => (
          <option key={item[itemKey]} value={item[itemKey]}>
            {item[itemLabel]}
          </option>
        ))}
      </select>
    </FilterField>
  );
}

export default SachFilter;
