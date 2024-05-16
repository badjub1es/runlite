import Card from "~/components/Card/Card";
import Stack from "~/components/Stack/Stack";
import CardTitle from "~/components/Card/CardTitle";
import StyledButton from "~/components/Button/StyledButton";
import { ThemeColors } from "~/types/Colors/ThemeColors";

export default function ShoeSection() {
  return (
    <Card backgroundColor={ThemeColors.GLASS}>
      <Stack direction="column" justifyContent="flex-start">
        <Stack justifyContent="space-between">
          <CardTitle color={ThemeColors.WHITE}>Shoes</CardTitle>
          <StyledButton size="small" variant="contained">
            Create new shoe
          </StyledButton>
        </Stack>
        {/* TODO: Add Shoe UI */}
      </Stack>
    </Card>
  );
}
