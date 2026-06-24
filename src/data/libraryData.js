export const books = [
  { MaSach: "S01", MaTG: "TG01", MaNXB: "NXB01", MaTL: "TL01", TenSach: "Cho tôi xin một vé đi tuổi thơ", NamXB: 2008, SoLuong: 12, MaNN: "NN01", MaViTri: "KS01" },
  { MaSach: "S02", MaTG: "TG02", MaNXB: "NXB03", MaTL: "TL04", TenSach: "Harry Potter", NamXB: 1997, SoLuong: 19, MaNN: "NN02", MaViTri: "KS02" },
  { MaSach: "S03", MaTG: "TG03", MaNXB: "NXB04", MaTL: "TL02", TenSach: "Rừng Na Uy", NamXB: 1987, SoLuong: 5, MaNN: "NN03", MaViTri: "KS02" },
  { MaSach: "S04", MaTG: "TG04", MaNXB: "NXB05", MaTL: "TL03", TenSach: "Mật mã Da Vinci", NamXB: 2003, SoLuong: 0, MaNN: "NN02", MaViTri: "KS03" },
  { MaSach: "S05", MaTG: "TG05", MaNXB: "NXB01", MaTL: "TL01", TenSach: "Dế Mèn phiêu lưu ký", NamXB: 1941, SoLuong: 15, MaNN: "NN01", MaViTri: "KS01" },
];

export const readers = [
  { MaDG: "DG01", MaKhoa: "K01", MaLop: "L01", TenDG: "Trần Thị B", NamSinh: 2004, GioiTinh: "Nữ", DiaChi: "Hà Nội", Email: "tranb@gmail.com", Sdt: "0912345678" },
  { MaDG: "DG02", MaKhoa: "K02", MaLop: "L02", TenDG: "Nguyễn Văn A", NamSinh: 2003, GioiTinh: "Nam", DiaChi: "Đà Nẵng", Email: "nguyena@gmail.com", Sdt: "0987654321" },
  { MaDG: "DG03", MaKhoa: "K03", MaLop: "L03", TenDG: "Lê Minh K", NamSinh: 2005, GioiTinh: "Nam", DiaChi: "TP. Hồ Chí Minh", Email: "minhk@gmail.com", Sdt: "0909090909" },
];

export const borrowTickets = [
  { MaMT: "PM01", MaDG: "DG01", MaNV: "NV01", NgayMuon: "2026-06-12", HanTra: "2026-06-26", TrangThai: "Đang mượn" },
  { MaMT: "PM02", MaDG: "DG02", MaNV: "NV02", NgayMuon: "2026-06-08", HanTra: "2026-06-22", TrangThai: "Quá hạn" },
  { MaMT: "PM03", MaDG: "DG03", MaNV: "NV01", NgayMuon: "2026-06-01", HanTra: "2026-06-15", TrangThai: "Đã trả" },
];

export const borrowDetails = [
  { MaMT: "PM01", MaSach: "S01", SoLuong: 1 },
  { MaMT: "PM01", MaSach: "S05", SoLuong: 1 },
  { MaMT: "PM02", MaSach: "S02", SoLuong: 2 },
];

export const reservations = [
  { MaPhieuDat: "PD01", MaDG: "DG01", MaSach: "S03", NgayDat: "2026-06-18", TrangThai: "Đang chờ", NgayHetHan: "2026-06-25" },
  { MaPhieuDat: "PD02", MaDG: "DG02", MaSach: "S04", NgayDat: "2026-06-19", TrangThai: "Đã duyệt", NgayHetHan: "2026-06-26" },
  { MaPhieuDat: "PD03", MaDG: "DG03", MaSach: "S02", NgayDat: "2026-06-20", TrangThai: "Đã hủy", NgayHetHan: null },
];

export const returnTickets = [
  { MaPT: "PT01", MaMT: "PM03", NgayTra: "2026-06-14", TinhTrang: "Tốt" },
  { MaPT: "PT02", MaMT: "PM02", NgayTra: null, TinhTrang: "Chưa trả" },
  { MaPT: "PT03", MaMT: "PM01", NgayTra: null, TinhTrang: "Đang mượn" },
];

export const libraryCards = [
  { MaThe: "T01", MaDG: "DG01", NgayCap: "2025-09-01", NgayHetHan: "2027-09-01", TrangThai: "Đang hoạt động" },
  { MaThe: "T02", MaDG: "DG02", NgayCap: "2025-09-01", NgayHetHan: "2027-09-01", TrangThai: "Đang hoạt động" },
  { MaThe: "T03", MaDG: "DG03", NgayCap: "2025-09-01", NgayHetHan: "2026-09-01", TrangThai: "Tạm khóa" },
];

export const employees = [
  { MaNV: "NV01", TenNV: "Admin", QueQuan: "Hà Nội", GioiTinh: "Nam", NamSinh: 1998, VaiTro: "Quản lý thư viện", Email: "admin@gmail.com", Sdt: "0901111111", User: "admin", Pass: "123456" },
  { MaNV: "NV02", TenNV: "Nguyễn Văn A", QueQuan: "Đà Nẵng", GioiTinh: "Nam", NamSinh: 2000, VaiTro: "Thủ thư", Email: "nva@gmail.com", Sdt: "0401234567", User: "thuthu", Pass: "123456" },
];

export const authors = [
  { MaTG: "TG01", TenTG: "Nguyễn Nhật Ánh" },
  { MaTG: "TG02", TenTG: "J.K. Rowling" },
  { MaTG: "TG03", TenTG: "Haruki Murakami" },
  { MaTG: "TG04", TenTG: "Dan Brown" },
  { MaTG: "TG05", TenTG: "Tô Hoài" },
];

export const categories = [
  { MaTL: "TL01", TenTL: "Thiếu nhi" },
  { MaTL: "TL02", TenTL: "Văn học" },
  { MaTL: "TL03", TenTL: "Trinh thám" },
  { MaTL: "TL04", TenTL: "Khoa học viễn tưởng" },
];

export const publishers = [
  { MaNXB: "NXB01", TenNXB: "NXB Trẻ", DiaChi: "TP. Hồ Chí Minh", Email: "contact@nxbtre.com.vn", Sdt: "02838290000" },
  { MaNXB: "NXB02", TenNXB: "Kim Đồng", DiaChi: "Hà Nội", Email: "info@nxbkimdong.com.vn", Sdt: "02439434400" },
  { MaNXB: "NXB03", TenNXB: "Bloomsbury", DiaChi: "London", Email: "contact@bloomsbury.com", Sdt: "+44 20 7631 5600" },
];

export const languages = [
  { MaNN: "NN01", TenNN: "Tiếng Việt" },
  { MaNN: "NN02", TenNN: "Tiếng Anh" },
  { MaNN: "NN03", TenNN: "Tiếng Nhật" },
];

export const shelves = [
  { MaViTri: "KS01", TenKe: "Kệ Thiếu Nhi", MoTa: "Tầng 1, khu A" },
  { MaViTri: "KS02", TenKe: "Kệ Văn Học", MoTa: "Tầng 2, khu B" },
  { MaViTri: "KS03", TenKe: "Kệ Trinh Thám", MoTa: "Tầng 2, khu C" },
];

export const faculties = [
  { MaKhoa: "K01", TenKhoa: "Công nghệ thông tin" },
  { MaKhoa: "K02", TenKhoa: "Quản trị kinh doanh" },
  { MaKhoa: "K03", TenKhoa: "Ngoại ngữ" },
];

export const classes = [
  { MaLop: "L01", TenLop: "CNTT K48", MaKhoa: "K01" },
  { MaLop: "L02", TenLop: "QTKD K47", MaKhoa: "K02" },
  { MaLop: "L03", TenLop: "NNA K49", MaKhoa: "K03" },
];

export const topReaders = [
  { name: "Trần Thị B", count: 9 },
  { name: "Nguyễn Văn A", count: 6 },
  { name: "Lê Minh K", count: 4 },
  { name: "Phạm Thu H", count: 3 },
  { name: "Hoàng Anh", count: 2 },
];

export const topBorrowedBooks = [
  { title: "Dế Mèn phiêu lưu ký", count: 5 },
  { title: "Harry Potter", count: 3 },
  { title: "Cho tôi xin một vé đi tuổi thơ", count: 2 },
  { title: "Harry Potter 2", count: 2 },
  { title: "Mắt biếc", count: 1 },
];
