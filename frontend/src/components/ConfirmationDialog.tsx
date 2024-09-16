import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  description: string;
  confirmText: string;
  cancelText: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  description,
  confirmText,
  cancelText,
}) => {
  const formattedDescription = description.replace(/\n/g, "<br />");
  return (
    <Dialog open={isOpen} onOpenChange={onCancel}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
        <DialogFooter>
          <button onClick={onConfirm}>{confirmText}</button>
          <DialogClose asChild>
            <button onClick={onCancel}>{cancelText}</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
