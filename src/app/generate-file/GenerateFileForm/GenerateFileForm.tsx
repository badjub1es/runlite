import React from "react";
import Card from "~/app/components/Card/Card";
import Input from "~/app/components/Input/Input";
import Stack from "~/app/components/Stack/Stack";
import Divider from "~/app/components/Card/Divider";
import CardTitle from "~/app/components/Card/CardTitle";
import { Fade } from "@mui/material";
import { ThemeColors } from "~/types/Colors/ThemeColors";
import * as stylex from "@stylexjs/stylex";

interface GenerateFileFormProps {
  fadeIn: boolean;
}

const styles = stylex.create({
  yellowText: {
    color: "#fef08a",
  },
});

export default function GenerateFileForm({ fadeIn }: GenerateFileFormProps) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  return (
    <Card
      fade
      fadeIn={fadeIn}
      fadeTimeout={2000}
      backgroundColor={ThemeColors.GLASS}
    >
      <CardTitle color="white">
        Enter some <span {...stylex.props(styles.yellowText)}>information</span>{" "}
        to get started 🚀
      </CardTitle>
      <Divider color="white" />
      <Fade in={fadeIn} timeout={3000}>
        <div>
          <Stack direction="column" spacing={20}>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </Stack>
        </div>
      </Fade>
    </Card>
  );
}
