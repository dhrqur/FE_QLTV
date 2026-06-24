import { Navigate, Route, Routes } from "react-router";

import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import ChiTietMuonTraList from "@/pages/chitietmuontra/ChiTietMuonTraList";
import DocGiaList from "@/pages/docgia/DocGiaList";
import KeSachList from "@/pages/kesach/KeSachList";
import KhoaList from "@/pages/khoa/KhoaList";
import LopList from "@/pages/lop/LopList";
import MuonTraList from "@/pages/muontra/MuonTraList";
import NgonNguList from "@/pages/ngonngu/NgonNguList";
import NhanVienList from "@/pages/nhanvien/NhanVienList";
import NhaXuatBanList from "@/pages/nhaxuatban/NhaXuatBanList";
import SachList from "@/pages/sach/SachList";
import TacGiaList from "@/pages/tacgia/TacGiaList";
import TheLoaiList from "@/pages/theloai/TheLoaiList";
import TheThuVienList from "@/pages/thethuvien/TheThuVienList";
import ProtectedRoute from "@/routes/ProtectedRoute";
import { getCurrentUser } from "@/utils/auth";

const protectedPage = (page, managerOnly = false) => (
  <ProtectedRoute managerOnly={managerOnly}>{page}</ProtectedRoute>
);

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={protectedPage(<Dashboard />, true)} />
      <Route path="/login" element={<Login />} />
      <Route path="/sach" element={protectedPage(<SachList />)} />
      <Route path="/doc-gia" element={protectedPage(<DocGiaList />)} />
      <Route path="/muon-tra" element={protectedPage(<MuonTraList />)} />
      <Route path="/chi-tiet-muon-tra" element={protectedPage(<ChiTietMuonTraList />)} />
      <Route path="/tac-gia" element={protectedPage(<TacGiaList />)} />
      <Route path="/the-loai" element={protectedPage(<TheLoaiList />)} />
      <Route path="/the-thu-vien" element={protectedPage(<TheThuVienList />)} />
      <Route path="/nhan-vien" element={protectedPage(<NhanVienList />, true)} />
      <Route path="/nha-xuat-ban" element={protectedPage(<NhaXuatBanList />)} />
      <Route path="/ngon-ngu" element={protectedPage(<NgonNguList />)} />
      <Route path="/ke-sach" element={protectedPage(<KeSachList />)} />
      <Route path="/khoa" element={protectedPage(<KhoaList />)} />
      <Route path="/lop" element={protectedPage(<LopList />)} />
      <Route path="*" element={<Navigate to={getCurrentUser() ? "/" : "/login"} replace />} />
    </Routes>
  );
}

export default AppRoutes;
