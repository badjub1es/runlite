import RunningShoe from "~/components/Icons/RunningShoe";
import { ThemeColors } from "~/types/Colors/ThemeColors";
import { DirectionsRun } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

interface SectionToggleProps {
  value: string | null;
  setValue: (value: string | null) => void;
}

export default function SectionToggle({ value, setValue }: SectionToggleProps) {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      sx={{ border: "0.5px solid white" }}
    >
      <Tooltip title="Run log">
        <ToggleButton value="runs" key="runs">
          <DirectionsRun
            htmlColor={
              value === "runs" ? ThemeColors.SECONDARY : ThemeColors.WHITE
            }
          />
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Shoes">
        <ToggleButton value="shoes" key="shoes">
          <RunningShoe
            width="24px"
            height="24px"
            htmlColor={
              value === "shoes" ? ThemeColors.SECONDARY : ThemeColors.WHITE
            }
          />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
}
