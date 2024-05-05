import Card from "~/components/Card/Card";
import Stack from "~/components/Stack/Stack";
import CardTitle from "~/components/Card/CardTitle";
import { ThemeColors } from "~/types/Colors/ThemeColors";

export default function ShoeSection() {
  return (
    <Card backgroundColor={ThemeColors.GLASS}>
      <Stack direction="column" justifyContent="flex-start">
        <CardTitle color={ThemeColors.WHITE}>Shoes</CardTitle>
        {/* TODO: Add Shoe UI */}
      </Stack>
    </Card>
  );
}
