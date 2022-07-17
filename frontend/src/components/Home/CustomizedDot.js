import React from "react";

const CustomizedDot = (props) => {
  const { cx, cy, payload } = props;

 const color = () => {
    switch(payload.Species){
      case 'Smelt':
        return 'grey';
      case 'Pike':
        return 'red';
      case 'Perch':
        return 'pink';
      case 'Parkki':
        return 'blue';
      case 'Whitefish':
        return 'white';
      case 'Roach':
        return 'brown';
      case 'Bream':
        return 'yellow';
      default:
        return 'black'
    }
  }

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill={color()}
      viewBox="0 0 1024 1024"
    >
      <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
    </svg>
  );
};

export default CustomizedDot;
