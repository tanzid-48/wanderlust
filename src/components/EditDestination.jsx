'use client'

import { updatedDestination } from "@/app/lib/actions";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,

  Modal,
  Surface,
  TextArea,
  TextField,
 
} from "@heroui/react";

import { Edit } from "lucide-react";
import { FaEdit } from "react-icons/fa";

const EditDestination = ({data}) => {

  const handleUpdate = async (formData) => {
    await updatedDestination(formData, data._id);
  };
  


  return (
    <Modal>
      <Modal.Trigger>
        <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
          <Edit size={16} />
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-3xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <FaEdit className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </FaEdit>

              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form  action={handleUpdate} className="space-y-6">
                  <TextField defaultValue={data.destinationName}  name="destinationName">
                    <Label>Destination Name</Label>

                    <Input placeholder="Bali Paradise" />

                    <FieldError />
                  </TextField>

                  <TextField defaultValue={data.country} name="country">
                    <Label>Country</Label>

                    <Input placeholder="Indonesia" />

                    <FieldError />
                  </TextField>

                  <TextField defaultValue={data.price}  name="price">
                    <Label>Price</Label>

                    <Input type="number" placeholder="1200" />

                    <FieldError />
                  </TextField>

                  <TextField defaultValue={data.duration}  name="duration">
                    <Label>Duration</Label>

                    <Input placeholder="7 Days" />

                    <FieldError />
                  </TextField>

                  <TextField defaultValue={data.imageUrl}  name="imageUrl">
                    <Label>Image URL</Label>

                    <Input placeholder="https://example.com/image.jpg" />

                    <FieldError />
                  </TextField>

                  <TextField defaultValue={data.description}  name="description">
                    <Label>Description</Label>

                    <TextArea placeholder="Write description..." />

                    <FieldError />
                  </TextField>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                  <Button type="submit" className={'text-center'}>Update</Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditDestination;
