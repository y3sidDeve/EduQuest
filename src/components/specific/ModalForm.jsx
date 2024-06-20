import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Switch,
  Input,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

import SelectChip from "../common/SelectChip";

export default function ModalForm(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isSelected, setIsSelected] = React.useState(false); // true for tutor, false for student

  return (
    <div className="flex flex-col gap-2">
      <Button
        className="mt-1"
        color="secondary"
        fullWidth
        radius="sm"
        onPress={onOpen}
      >
        Registrarse
      </Button>
      <Modal
        isOpen={isOpen}
        placement="auto"
        onOpenChange={onOpenChange}
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-purple-950">¿Que quieres ser?</h2>
                <div className="flex justify-start gap-3 px-3">
                  <Switch
                    isSelected={isSelected}
                    onValueChange={setIsSelected}
                    color="secondary"
                    size="sm"
                  />
                  <p className=" text-medium text-default-500 ">
                    Selected: {isSelected ? "Tutor" : "Estudiante"}
                  </p>
                </div>
              </ModalHeader>
              <ModalBody>
                {isSelected ? (
                  // Tutor form
                  <Input type="hidden" value={2} />
                ) : (
                  // Student form
                  <>
                    <Input type="hidden" value={3} />
                    <RadioGroup
                    label="Preferencia de clases:"
                    orientation="horizontal"
                    color="secondary"
                    defaultValue="virtual"
                    className="mb-4"
                    >
                      <Radio value="virtual">Virtual</Radio>
                      <Radio value="presencial">Presencial</Radio>
                      <Radio value="hibrido">Hibrido</Radio>
                    </RadioGroup>
                    <SelectChip disableAnimation={false} />

                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="secondary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
