import { Input } from "@/components/ui/input";

function FieldError({ message }) {
  if (!message) return null;

  return (
    <p className="mt-2 text-xs font-semibold text-rose-500">
      {message}
    </p>
  );
}

function FormField({ label, required, error, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700">
        {label} {required ? <span className="text-rose-500">*</span> : null}
      </label>

      {children}

      <FieldError message={error} />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  options,
  valueKey,
  labelKey,
  required,
  error,
  placeholder = "-- Chọn --",
}) {
  return (
    <FormField label={label} required={required} error={error}>
      <select
        name={name}
        defaultValue={value ?? ""}
        className={[
          "h-11 w-full rounded-xl border bg-white px-3 text-sm font-medium outline-none transition",
          error
            ? "border-rose-400 bg-rose-50/40 text-slate-900 focus:ring-2 focus:ring-rose-500"
            : "border-orange-100 text-slate-700 focus:ring-2 focus:ring-orange-500",
        ].join(" ")}
      >
        <option value="">{placeholder}</option>

        {(options ?? []).map((item) => (
          <option key={item[valueKey]} value={item[valueKey]}>
            {item[labelKey] ?? item[valueKey]}
          </option>
        ))}
      </select>
    </FormField>
  );
}

function InputField({
  label,
  name,
  value,
  type = "text",
  placeholder,
  required,
  error,
  disabled,
}) {
  return (
    <FormField label={label} required={required} error={error}>
      <Input
        name={name}
        type={type}
        defaultValue={value ?? ""}
        placeholder={placeholder}
        disabled={disabled}
        className={[
          "h-11 rounded-xl font-medium transition disabled:bg-slate-50 disabled:text-slate-500",
          error
            ? "border-rose-400 bg-rose-50/40 focus-visible:ring-rose-500"
            : "border-orange-100 focus-visible:ring-orange-500",
        ].join(" ")}
      />
    </FormField>
  );
}

function SachFormFields({
  isEdit,
  sach = {},
  errors = {},

  tacGia = [],
  tacGiaOptions = [],

  nhaXuatBan = [],
  nhaXuatBanOptions = [],

  theLoai = [],
  theLoaiOptions = [],

  ngonNgu = [],
  ngonNguOptions = [],

  keSach = [],
  keSachOptions = [],

  viTri = [],
  viTriOptions = [],
}) {
  const tacGiaList = tacGiaOptions.length ? tacGiaOptions : tacGia;
  const nhaXuatBanList = nhaXuatBanOptions.length
    ? nhaXuatBanOptions
    : nhaXuatBan;
  const theLoaiList = theLoaiOptions.length ? theLoaiOptions : theLoai;
  const ngonNguList = ngonNguOptions.length ? ngonNguOptions : ngonNgu;
  const viTriList = viTriOptions.length
    ? viTriOptions
    : keSachOptions.length
      ? keSachOptions
      : viTri.length
        ? viTri
        : keSach;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <InputField
        label="Mã sách"
        name="MaSach"
        value={sach.MaSach}
        placeholder="Nhập mã sách"
        required
        disabled={isEdit}
        error={errors.MaSach}
      />

      <InputField
        label="Tên sách"
        name="TenSach"
        value={sach.TenSach}
        placeholder="Nhập tên sách"
        required
        error={errors.TenSach}
      />

      <SelectField
        label="Tác giả"
        name="MaTG"
        value={sach.MaTG}
        options={tacGiaList}
        valueKey="MaTG"
        labelKey="TenTG"
        required
        error={errors.MaTG}
      />

      <SelectField
        label="Nhà xuất bản"
        name="MaNXB"
        value={sach.MaNXB}
        options={nhaXuatBanList}
        valueKey="MaNXB"
        labelKey="TenNXB"
        required
        error={errors.MaNXB}
      />

      <SelectField
        label="Thể loại"
        name="MaTL"
        value={sach.MaTL}
        options={theLoaiList}
        valueKey="MaTL"
        labelKey="TenTL"
        required
        error={errors.MaTL}
      />

      <SelectField
        label="Ngôn ngữ"
        name="MaNN"
        value={sach.MaNN}
        options={ngonNguList}
        valueKey="MaNN"
        labelKey="TenNN"
        required
        error={errors.MaNN}
      />

      <SelectField
        label="Vị trí / Kệ sách"
        name="MaViTri"
        value={sach.MaViTri}
        options={viTriList}
        valueKey="MaViTri"
        labelKey="TenKe"
        required
        error={errors.MaViTri}
      />

      <InputField
        label="Năm xuất bản"
        name="NamXB"
        value={sach.NamXB}
        type="number"
        placeholder="Nhập năm xuất bản"
        required
        error={errors.NamXB}
      />

      <InputField
        label="Số lượng"
        name="SoLuong"
        value={sach.SoLuong}
        type="number"
        placeholder="Nhập số lượng"
        required
        error={errors.SoLuong}
      />
    </div>
  );
}

export default SachFormFields;
