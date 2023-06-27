import { CollapseProps, InputProps } from "naive-ui";

type SelectThemeOverrides = NonNullable<CollapseProps["themeOverrides"]>;
type SelectThemeInput = NonNullable<InputProps["themeOverrides"]>;
const selectThemeOverrides: SelectThemeOverrides = {
  textColor: "#FFF",
  titleTextColor: "#FFF",
  dividerColor: "#333",
  arrowColor: "#FFF",
  titlePadding: undefined,
};
const SelectThemeInput: SelectThemeInput = {
  countTextColor: "#FFF",
};
export { selectThemeOverrides, SelectThemeInput };
