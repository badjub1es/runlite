import React, { ChangeEvent } from "react";
import Card from "~/components/Card/Card";
import Input from "~/components/Input/Input";
import Stack from "~/components/Stack/Stack";
import Divider from "~/components/Card/Divider";
import CardTitle from "~/components/Card/CardTitle";
import {
  Button,
  Fade,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ThemeColors } from "~/types/Colors/ThemeColors";
import { MetricType } from "~/types/MetricType/MetricType";
import * as stylex from "@stylexjs/stylex";
import { useRunTrackingStore } from "~/providers/RunTrackingStoreProvider";

interface GenerateFileFormProps {
  fadeIn: boolean;
}

const styles = stylex.create({
  yellowText: {
    color: "#fef08a",
  },
});

export default function GenerateFileForm({ fadeIn }: GenerateFileFormProps) {
  const { setFileDownload, setFileName } = useRunTrackingStore(
    (state) => state
  );

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [metricType, setMetricType] = React.useState(MetricType.mi);

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [inputOneChanged, setInputOneChanged] = React.useState(false);
  const [inputTwoChanged, setInputTwoChanged] = React.useState(false);
  const [inputOneError, setInputOneError] = React.useState(false);
  const [inputTwoError, setInputTwoError] = React.useState(false);

  const handleMetricTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMetricType(event.target.value as MetricType);
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputOneChanged(true);
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTwoChanged(true);
    setLastName(event.target.value);
  };

  const generateAndDownloadJson = () => {
    const jsonStr = JSON.stringify({ firstName, lastName, metricType });
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    setFileDownload(url);
    setFileName(`${firstName}_${lastName}_runlite_data.json`);
  };

  React.useEffect(() => {
    setButtonDisabled(!firstName || !lastName);
    setInputOneError(!firstName && inputOneChanged);
    setInputTwoError(!lastName && inputTwoChanged);
  }, [firstName, lastName]);

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
              required
              label="First name"
              error={inputOneError}
              helperText={inputOneError ? "First name is required" : ""}
              id="first-name-input"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First name *"
            />
            <Input
              required
              label="Last name"
              error={inputTwoError}
              helperText={inputTwoError ? "Last name is required" : ""}
              id="last-name-input"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last name *"
            />
            <FormControl>
              <label htmlFor="radio-button-group" style={{ color: "white" }}>
                Metric preference
              </label>
              <RadioGroup
                id="radio-button-group"
                value={metricType}
                onChange={handleMetricTypeChange}
                aria-labelledby="metric-radio-buttons-group-label"
                defaultValue="mi"
                name="metric-radio-buttons-group"
              >
                <FormControlLabel
                  value="mi"
                  sx={{ color: "white" }}
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "white",
                        "&.Mui-checked": { color: ThemeColors.YELLOW },
                      }}
                    />
                  }
                  label="mi (miles)"
                />
                <FormControlLabel
                  value="km"
                  sx={{ color: "white" }}
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "white",
                        "&.Mui-checked": { color: ThemeColors.YELLOW },
                      }}
                    />
                  }
                  label="km (kilometers)"
                />
              </RadioGroup>
            </FormControl>
            <Button
              disabled={buttonDisabled}
              variant="contained"
              onClick={generateAndDownloadJson}
              sx={{
                backgroundColor: ThemeColors.GLASS,
                "&:hover": {
                  backgroundColor: ThemeColors.YELLOW,
                  color: "black",
                },
              }}
            >
              Generate file
            </Button>
          </Stack>
        </div>
      </Fade>
    </Card>
  );
}
