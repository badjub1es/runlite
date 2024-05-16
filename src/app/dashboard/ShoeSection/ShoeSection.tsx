import React from "react";
import Card from "~/components/Card/Card";
import Stack from "~/components/Stack/Stack";
import CardTitle from "~/components/Card/CardTitle";
import StyledButton from "~/components/Button/StyledButton";
import ModalContentContainer from "~/components/Modal/ModalContentContainer";
import { Fade, Modal } from "@mui/material";
import { ThemeColors } from "~/types/Colors/ThemeColors";

export default function ShoeSection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Card backgroundColor={ThemeColors.GLASS}>
      <Stack direction="column" justifyContent="flex-start">
        <Stack justifyContent="space-between">
          <CardTitle color={ThemeColors.WHITE}>Shoes</CardTitle>
          <StyledButton
            size="small"
            variant="contained"
            onClick={() => setModalOpen(true)}
          >
            Create new shoe
          </StyledButton>
        </Stack>
        {/* TODO: Add Shoe UI */}
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Fade in={modalOpen}>
            <div>
              <ModalContentContainer>
                <CardTitle id="parent-modal-title">Shoe details</CardTitle>
              </ModalContentContainer>
            </div>
          </Fade>
        </Modal>
      </Stack>
    </Card>
  );
}
