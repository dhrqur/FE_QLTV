import { useState } from "react";
import { toast } from "sonner";
import { Eye, Pencil, Save, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import SachDetailContent from "@/pages/sach/components/SachDetailContent";
import SachFormFields from "@/pages/sach/components/SachFormFields";
import { getDeleteConstraintMessage } from "@/utils/deleteConstraints";
import {
  hasErrors,
  validateSachForm,
} from "@/utils/formValidation";

export function SachFormDialog({ datasets, mode, onSave, rows, sach }) {
  const isEdit = mode === "edit";
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const formId = `sach-form-${mode}-${sach?.MaSach ?? "new"}`;

  function focusFirstError(form, validationErrors) {
    const firstErrorName = Object.keys(validationErrors)[0];

    if (!firstErrorName) return;

    setTimeout(() => {
      const firstErrorField = form.querySelector(`[name="${firstErrorName}"]`);

      firstErrorField?.focus();
      firstErrorField?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validateSachForm(formData, {
      isEdit,
      rows,
      currentMaSach: sach?.MaSach,
    });

    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      focusFirstError(form, validationErrors);
      return;
    }

    onSave({
      MaSach: formData.get("MaSach")?.trim(),
      MaTG: formData.get("MaTG"),
      MaNXB: formData.get("MaNXB"),
      MaTL: formData.get("MaTL"),
      TenSach: formData.get("TenSach")?.trim(),
      NamXB: Number(formData.get("NamXB")),
      SoLuong: Number(formData.get("SoLuong")),
      MaNN: formData.get("MaNN"),
      MaViTri: formData.get("MaViTri"),
    });

    setErrors({});
    setOpen(false);
  }

  function handleOpenChange(nextOpen) {
    setOpen(nextOpen);

    if (!nextOpen) {
      setErrors({});
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          className={
            isEdit
              ? "border-orange-200 bg-orange-50 px-1.5 text-orange-700 hover:bg-orange-100"
              : "bg-orange-500 font-bold shadow-sm shadow-orange-500/20 hover:bg-orange-600"
          }
          size={isEdit ? "xs" : "default"}
          variant={isEdit ? "outline" : "default"}
        >
          {isEdit ? <Pencil className="size-3" /> : null}
          {isEdit ? "Sửa" : "+ Thêm sách"}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-5xl p-0"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <DialogHeader className="border-b border-slate-100 px-6 py-5">
          <DialogTitle className="text-xl font-extrabold text-slate-900">
            {isEdit ? "Sửa Sách" : "Thêm Sách"}
          </DialogTitle>

          <DialogDescription className="sr-only">
            {isEdit ? "Biểu mẫu sửa sách." : "Biểu mẫu thêm sách."}
          </DialogDescription>
        </DialogHeader>

        <form
          className="max-h-[68vh] overflow-y-auto px-6 py-6"
          id={formId}
          noValidate
          onSubmit={handleSubmit}
        >
          <SachFormFields
            isEdit={isEdit}
            rows={rows}
            sach={sach ?? {}}
            errors={errors}
            {...datasets}
          />
        </form>

        <DialogFooter className="border-t border-slate-100 bg-slate-50 px-6 py-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Hủy
            </Button>
          </DialogClose>

          <Button
            className="bg-orange-500 font-bold hover:bg-orange-600"
            form={formId}
            type="submit"
          >
            <Save className="size-4" />
            {isEdit ? "Lưu thay đổi" : "Thêm mới"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function SachDetailDialog({ lookups, sach }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="border-slate-200 bg-white px-1.5 text-slate-700 hover:bg-slate-50"
          size="xs"
          variant="outline"
        >
          <Eye className="size-3" />
          Xem
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="border-b border-slate-100 px-6 py-5">
          <DialogTitle className="text-xl font-extrabold text-slate-900">
            {sach.TenSach}
          </DialogTitle>

          <DialogDescription>
            Thông tin chi tiết của sách đang chọn.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-5">
          <SachDetailContent lookups={lookups} sach={sach} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function DeleteSachDialog({ onDelete, sach }) {
  const constraintMessage = getDeleteConstraintMessage(sach);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="border-rose-200 bg-rose-50 px-1.5 text-rose-700 hover:bg-rose-100"
          size="xs"
          variant="outline"
        >
          <Trash2 className="size-3" />
          Xóa
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-rose-50 text-rose-500">
            <Trash2 />
          </AlertDialogMedia>

          <AlertDialogTitle>
            {constraintMessage ? "Không thể xóa sách" : "Xác nhận xóa sách?"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {constraintMessage ?? `Bạn có chắc chắn muốn xóa "${sach.TenSach}"?`}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            {constraintMessage ? "Đóng" : "Hủy"}
          </AlertDialogCancel>

          {!constraintMessage ? (
            <AlertDialogAction
              className="bg-rose-500 hover:bg-rose-600"
              onClick={() => {
                onDelete();
                toast.success("Xóa sách thành công", {
                  description: `Sách "${sach.TenSach}" đã được xóa khỏi danh sách.`,
                });
              }}
            >
              Xóa
            </AlertDialogAction>
          ) : null}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}