import React from "react";
import Card from "~/components/Card/Card";
import Stack from "~/components/Stack/Stack";
import CardTitle from "~/components/Card/CardTitle";
import StyledButton from "~/components/Button/StyledButton";
import AddShoeModal from "./AddShoeModal/AddShoeModal";
import { ThemeColors } from "~/types/Colors/ThemeColors";
import { useRunTrackingStore } from "~/providers/RunTrackingStoreProvider";

export default function ShoeSection() {
  const shoes = useRunTrackingStore((state) => state.shoes);
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
        <AddShoeModal open={modalOpen} onClose={() => setModalOpen(false)} />
        {/* TODO: Replace with shoe cards */}
        {shoes?.map((shoe) => (
          <>
            <div>{shoe.id}</div>
            <div>{shoe.name}</div>
            <div>{shoe.distance}</div>
          </>
        ))}
      </Stack>
    </Card>
  );
}
