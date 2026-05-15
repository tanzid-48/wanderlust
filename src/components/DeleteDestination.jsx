"use client";

import { deleteDestination } from "@/lib/actions";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";

export function DeleteDestination({ _id, name,id }) {
  const handleDelete = async () => {
    await deleteDestination(id);
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <button className="flex items-center gap-2 border border-red-100 px-4 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
          <Trash2 size={16} /> Delete
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Destination?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Are you sure you want to delete <strong>{name}</strong>? 
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button 
                onPress={handleDelete} 
                variant="danger"
              >
                Delete Permanently
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}