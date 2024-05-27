import Card from "~/components/Card/Card";
import Stack from "~/components/Stack/Stack";
import CardTitle from "~/components/Card/CardTitle";
import { ThemeColors } from "~/types/Colors/ThemeColors";

export default function RunSection() {
  return (
    <Card backgroundColor={ThemeColors.PRIMARY}>
      <Stack direction="column" justifyContent="flex-start">
        <CardTitle color={ThemeColors.WHITE}>Runs</CardTitle>
        {/* TODO: Add Run UI */}
      </Stack>
    </Card>
  );
}
