import React from "react";
import * as stylex from "@stylexjs/stylex";
import { ThemeColors } from "~/types/Colors/ThemeColors";

const styles = stylex.create({
  modalContainer: (width: number, backgroundColor: ThemeColors) => ({
    width,
    backgroundColor,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    padding: "1.2rem",
    borderRadius: "30px",
    maxWidth: "80vw",
  }),
});

interface ModalContentContainerProps extends React.PropsWithChildren {
  width?: number;
  backgroundColor?: ThemeColors;
}

const ModalContentContainer: React.FC<ModalContentContainerProps> = ({
  children,
  width = 400,
  backgroundColor = ThemeColors.PRIMARY,
}) => {
  return (
    <div {...stylex.props(styles.modalContainer(width, backgroundColor))}>
      {children}
    </div>
  );
};

export default React.memo(ModalContentContainer);
