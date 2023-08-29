import { createGlobalStyle } from "styled-components";

const ColorIcon = {
  backdropFilter: "blur(1px)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
};
const ColorIconDark = {
  backdropFilter: "blur(1px)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
};

let myC;
const DrawerLight = () => ({
  backdropFilter: "blur(3px)",
  background: "rgba(255, 255, 255, .85)",
  color: "rgb(10, 25, 41)",
  borderColor: myC,
});
const DrawerDark = () => ({
  backdropFilter: "blur(3px)",
  background: "rgba(31, 41, 51, 0.85)",
  color: "rgb(168, 176, 185)",
  borderColor: "rgba(255, 255, 255, .1)",
});

const DrawerPermanent = () => ({
  backdropFilter: "blur(200px)",
  background: "rgba(22, 28, 36, .8)",
  color: "rgb(168, 176, 185)",
  borderColor: myC,
});

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
    .my-textfield {
        color: ${({ theme }) => theme.secondary};
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.primary};
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.text};
    }
    .MuiOutlinedInput-root {
        background: ${({ theme }) => theme.secondary};
        border-color: ${({ theme }) => theme.title};
        color: ${({ theme }) => theme.title};
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      background: ${({ theme }) => theme.secondColor};
        border-color: ${({ theme }) => theme.title};
        color: ${({ theme }) => theme.title};
     }
     .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      background: ${({ theme }) => theme.secondColor};
        border-color: ${({ theme }) => theme.title};
        color: ${({ theme }) => theme.title};
    }
    .my-header {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text};
    }
    .my-drop-menu {
        sx: ${({ theme }) => theme.drawer};
    }
    .my-header-drawer {
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.text};
    }
    .my-drawer {
        sx: ${({ theme }) => theme.drawer};
    }
    .my-drawer-permanent {
        sx: ${({ theme }) => theme.drawerPermanent};
    }
    .my-card {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.secondary};
    }
    .my-text-secondary {
        color: ${({ theme }) => theme.text};
    }
    .my-text {
        color: ${({ theme }) => theme.title};
    }
    .my-icon {
        background: '${({ theme }) => theme.primary}';
        color: ${({ theme }) => theme.text};
    }
    .my-icon-active {
        background: '${({ theme }) => theme.primary}';
        color: ${({ theme }) => theme.primary};
    }
    .my-icon-primary {
        background: '${({ theme }) => theme.secondary}';
        color: ${({ theme }) => theme.primary};
    }
    .my-btn {
        style: ${({ theme }) => theme.btn};
    }
    .my-btn-list {
        style: ${({ theme }) => theme.btn};
    }
    .my-btn-icon {
        sx: ${({ theme }) => theme.btn};
    }
    .my-side-modal {
        background: ${({ theme }) => theme.header};
        color: ${({ theme }) => theme.text};
    }
    .my-divider {
        background: ${({ theme }) => theme.secondary};
    }
    .my-btn-active {
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.primary};
        sx: ${({ theme }) => theme.btn};
        border-radius: 10px;
    }
    .my-btn-not-active {
        border-radius: 10px;
        sx: ${({ theme }) => theme.btn};
    }
    .my-gallery {
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.text};
    }
    .footer {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.secondary};
        borderColor: ${({ theme }) => theme.secondary};
    }
    // .main-text-color{
    //     color: ${({ theme }) => theme.text};
    // }
    // .sub-bg{
    //     background: ${({ theme }) => theme.bg};
    // }
    // .sub-bg{
    //     background: ${({ theme }) => theme.bg};
    // }
    // .sub-part-bg{
    //     background: ${({ theme }) => theme.body};
    // }
    // .sub-part-1-bg{
    //     background: ${({ theme }) => theme.secondary};
    //     color: ${({ theme }) => theme.text};
    // }
    // .sub-part-2-bg{
    //    background: ${({ theme }) => theme.bg};
    // color: ${({ theme }) => theme.text};
    // }
    // .sub-part-3-bg{
    //    background: ${({ theme }) => theme.secondary};
    //    color: ${({ theme }) => theme.text};
    // }
    // .sub-part-4-bg{
    //    background: ${({ theme }) => theme.bg};
    //    color: ${({ theme }) => theme.text};
    // }
    // .sub-part-4-bg:hover{
    //    background: ${({ theme }) => theme.bg};
    //    color: ${({ theme }) => theme.text};
    // }
`;
export const lightTheme = (color) => ({
  body: "rgb(255, 255, 255)",
  header: "rgb(255, 255, 255)",
  text: "rgb(99, 115, 129)",
  title: "rgb(0, 0, 0)",
  primary: setColor.map((index) => {
    if (index.preset === color) {
      return index.primary;
    }
  }),
  secondary: setColor.map((index) => {
    if (index.preset === color) {
      return index.secondary;
    }
  }),
  secondaryColor: setColor.map((index) => {
    if (index.preset === color) {
      return index.color;
    }
  }),
  btn: ColorIcon,

  divider: "rgba(0, 0, 0, .1)",
  drawer: DrawerLight,
  drawerPermanent: DrawerLight,
  headerDrawer: "rgb(217, 217, 217)",
  hoverColor: "rgba(0, 0, 0, 0.1)",
});

export const darkTheme = (color) => ({
  body: "rgb(22, 28, 36)",
  header: "rgb(22, 28, 36)",
  text: "rgb(168, 176, 185)",
  title: "rgb(255, 255, 255)",
  primary: setColor.map((index) => {
    if (index.preset === color) {
      myC = index.secondary;
      return index.primary;
    }
  }),
  secondary: setColor.map((index) => {
    if (index.preset === color) {
      return index.secondary;
    }
  }),
  secondaryColor: setColor.map((index) => {
    if (index.preset === color) {
      return index.color;
    }
  }),
  btn: ColorIconDark,

  divider: "rgba(255, 255, 255, .1)",
  drawer: DrawerDark,
  drawerPermanent: DrawerPermanent(),
  headerDrawer: "rgb(18, 24, 30)",
  hoverColor: "rgba(255, 255, 255, 0.1)",
});

const setColor = [
  {
    preset: "primary",
    primary: "rgba(37, 102, 203, 1)",
    secondary: "rgba(39, 67, 111, 0.3)",
    color: "rgba(25, 118, 210, 0.5)",
    secondColor: "rgb(140, 186, 232)",
  },
  {
    preset: "secondary",
    primary: "rgba(117, 58, 213, 1)",
    secondary: "rgba(68, 49, 116, 0.3)",
    color: "rgba(156, 39, 176, 0.5)",
    secondColor: "rgb(205, 147, 215)",
  },
  {
    preset: "error",
    primary: "rgba(200, 49, 52, 1)",
    secondary: "rgba(120, 47, 51, 0.3)",
    color: "rgba(211, 47, 47, 0.5)",
    secondColor: "rgb(233, 151, 151)",
  },
  {
    preset: "success",
    primary: "rgba(11, 140, 80, 1)",
    secondary: "rgba(27, 95, 66, 0.3)",
    color: "rgba(46, 125, 50, 0.5)",
    secondColor: "rgb(150, 190, 152)",
  },
  {
    preset: "warning",
    primary: "rgba(200, 140, 50, 1)",
    secondary: "rgba(119, 92, 50, 0.3)",
    color: "rgba(237, 108, 2, 0.5)",
    secondColor: "rgb(246, 181, 128)",
  },
  {
    preset: "info",
    primary: "rgba(30, 164, 205, 1)",
    secondary: "rgba(37, 107, 129, 0.3)",
    color: "rgba(2, 136, 209, 0.5)",
    secondColor: "rgb(128, 195, 232)",
  },
];

export default GlobalStyles;
