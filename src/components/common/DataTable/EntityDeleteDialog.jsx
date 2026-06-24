import { Trash2 } from "lucide-react";

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
import { getDisplayValue } from "@/components/common/dataTableUtils";
import { getDeleteConstraintMessage } from "@/utils/deleteConstraints";

function EntityDeleteDialog({ entityName, onDelete, primaryColumn, row }) {
  const identifier = getDisplayValue(primaryColumn, row);
  const constraintMessage = getDeleteConstraintMessage(row);

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
            {constraintMessage
              ? `Không thể xóa ${entityName.toLowerCase()}`
              : `Xác nhận xóa ${entityName.toLowerCase()}?`}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {constraintMessage ?? `Bạn có chắc chắn muốn xóa “${identifier}”?`}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            {constraintMessage ? "Đóng" : "Hủy"}
          </AlertDialogCancel>

          {!constraintMessage ? (
            <AlertDialogAction
              className="bg-rose-500 hover:bg-rose-600"
              onClick={onDelete}
            >
              Xóa
            </AlertDialogAction>
          ) : null}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EntityDeleteDialog;