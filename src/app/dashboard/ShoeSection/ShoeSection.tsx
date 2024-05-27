import React from "react";
import Card from "~/components/Card/Card";
import Stack from "~/components/Stack/Stack";
import CardTitle from "~/components/Card/CardTitle";
import StyledButton from "~/components/Button/StyledButton";
import ModalContentContainer from "~/components/Modal/ModalContentContainer";
import { Fade, Modal } from "@mui/material";
import { ThemeColors } from "~/types/Colors/ThemeColors";
import Input from "~/components/Input/Input";
import Divider from "~/components/Card/Divider";

export default function ShoeSection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Card backgroundColor={ThemeColors.PRIMARY}>
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
          style={{ backdropFilter: "blur(5px)" }}
        >
          <Fade in={modalOpen}>
            <div>
              <ModalContentContainer>
                <CardTitle color={ThemeColors.WHITE} id="parent-modal-title">
                  Shoe details
                </CardTitle>
                <Divider color={ThemeColors.SECONDARY} />
                <Stack direction="column" spacing={20}>
                  <Input
                    required
                    label="Shoe name"
                    error={false}
                    id="shoe-name-input"
                    value=""
                    onChange={() => null}
                    placeholder="Shoe name"
                    color={ThemeColors.WHITE}
                  />
                  <Input
                    required
                    type="number"
                    label="Existing distance"
                    error={false}
                    id="existing-distance-input"
                    value={0}
                    onChange={() => null}
                    placeholder="Existing distance"
                    color={ThemeColors.WHITE}
                  />
                  <StyledButton variant="contained">Save shoe</StyledButton>
                </Stack>
              </ModalContentContainer>
            </div>
          </Fade>
        </Modal>
      </Stack>
    </Card>
  );
}
