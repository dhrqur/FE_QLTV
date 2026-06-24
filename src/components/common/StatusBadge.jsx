const STATUS_STYLES = {
  Còn: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Hết: "border-rose-200 bg-rose-50 text-rose-700",
  "Sắp hết": "border-amber-200 bg-amber-50 text-amber-700",
  "Còn hiệu lực": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Đang mượn": "border-blue-200 bg-blue-50 text-blue-700",
  "Đã trả": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Hết hạn": "border-rose-200 bg-rose-50 text-rose-700",
  "Quá hạn": "border-rose-200 bg-rose-50 text-rose-700",
  "Quản lý thư viện": "border-violet-200 bg-violet-50 text-violet-700",
  "Thủ thư": "border-cyan-200 bg-cyan-50 text-cyan-700",
};

function StatusBadge({ className = "", status }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        STATUS_STYLES[status] ?? "border-slate-200 bg-slate-50 text-slate-700",
        className,
      ].join(" ")}
    >
      {status ?? "Chưa có"}
    </span>
  );
}

export { STATUS_STYLES };
export default StatusBadge;
