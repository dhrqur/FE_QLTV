export function createLookup(items, keyField, valueField) {
  return Object.fromEntries(items.map((item) => [item[keyField], item[valueField]]));
}

export function createEmptySachFilters() {
  return {
    keyword: "",
    MaTG: "",
    MaTL: "",
    MaNXB: "",
    MaNN: "",
    MaViTri: "",
  };
}

export function displayValue(lookup, key) {
  return lookup[key] ?? key;
}

export function getSachStatus(soLuong) {
  const quantity = Number(soLuong);

  if (quantity <= 0) return "Hết";
  if (quantity === 1) return "Sắp hết";
  return "Còn";
}

export function findSach(rows, id) {
  return rows.find((sach) => sach.MaSach === id) ?? rows[0];
}

export function getNextSachCode(rows) {
  const codes = rows
    .map((sach) => String(sach.MaSach).match(/^(.*?)(\d+)$/))
    .filter(Boolean);

  if (codes.length === 0) {
    return "S01";
  }

  const highestCode = codes.reduce((highest, current) =>
    Number(current[2]) > Number(highest[2]) ? current : highest,
  );

  return `${highestCode[1]}${String(Number(highestCode[2]) + 1).padStart(highestCode[2].length, "0")}`;
}

export function matchesSachFilters(sach, filters) {
  const keyword = normalizeText(filters.keyword);
  const matchesKeyword =
    !keyword ||
    normalizeText(sach.MaSach).includes(keyword) ||
    normalizeText(sach.TenSach).includes(keyword);

  return (
    matchesKeyword &&
    (!filters.MaTG || sach.MaTG === filters.MaTG) &&
    (!filters.MaTL || sach.MaTL === filters.MaTL) &&
    (!filters.MaNXB || sach.MaNXB === filters.MaNXB) &&
    (!filters.MaNN || sach.MaNN === filters.MaNN) &&
    (!filters.MaViTri || sach.MaViTri === filters.MaViTri)
  );
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
