import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={26}
      height={23}
      fill="none"
      {...props}
    >
      <Path
        d="M23.563 11.5H2.438c-.647 0-1.267.26-1.724.722A2.478 2.478 0 000 13.964c0 .654.257 1.28.714 1.743a2.424 2.424 0 001.724.722h21.125c.646 0 1.266-.26 1.723-.722A2.478 2.478 0 0026 13.964c0-.653-.257-1.28-.714-1.742a2.424 2.424 0 00-1.724-.722zm.812 6.571H1.625a.808.808 0 00-.575.241.826.826 0 00-.238.58v.822c0 .872.343 1.707.952 2.324.61.616 1.437.962 2.298.962h17.875c.862 0 1.69-.346 2.299-.962.61-.617.951-1.452.951-2.324v-.821a.826.826 0 00-.238-.581.808.808 0 00-.574-.24zM2.978 9.857h20.044c1.756 0 2.774-2.254 1.768-3.895C22.75 2.629 18.258.005 13 0 7.742.005 3.25 2.629 1.21 5.961c-1.007 1.642.012 3.896 1.768 3.896zM19.5 4.107a.806.806 0 01.75.507.831.831 0 01-.175.895.81.81 0 01-1.387-.58c0-.218.085-.427.238-.581a.808.808 0 01.574-.24zM13 2.464a.806.806 0 01.75.507.831.831 0 01-.175.896.81.81 0 01-1.387-.581c0-.218.085-.427.237-.581a.808.808 0 01.575-.24zM6.5 4.107a.806.806 0 01.75.507.83.83 0 01-.175.895.81.81 0 01-.886.178.814.814 0 01-.502-.758c0-.218.086-.427.238-.581a.808.808 0 01.575-.24z"
        fill="#FF7A00"
      />
    </Svg>
  );
}

export default Icon;