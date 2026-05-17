"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const BookingCancel = ({ bookingId }) => {
  const router = useRouter();

  const handleBookingCancel = async () => {
    try {
      const {data:tokenData} = await authClient.token()
      const res = await fetch(`https://wanderlust-server-3.onrender.com/booking/${bookingId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
           authorization: `Bearer ${tokenData?.token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
          toast.success("Booking cancelled successfully");
        router.refresh();
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">
        <TrashBin />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>Cancel Booking?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-sm text-gray-600">
                This action will permanently cancel your booking. This cannot be
                undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep Booking
              </Button>

              <Button
                onClick={handleBookingCancel}
                slot="close"
                variant="danger"
              >
                Confirm Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookingCancel;
