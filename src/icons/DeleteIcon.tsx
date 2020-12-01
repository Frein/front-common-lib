import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function DeleteIcon({ color, classes }: { color: string; classes?: object }) {
  return (
    <SvgIcon
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      classes={classes}
    >
      <path
        d="M8.88889 0H5.33333C4.35289 0 3.55556 0.797333 3.55556 1.77778V2.66667H0V4.44444H1.77778V14.2222C1.77778 15.2027 2.57511 16 3.55556 16H10.6667C11.6471 16 12.4444 15.2027 12.4444 14.2222V4.44444H14.2222V2.66667H10.6667V1.77778C10.6667 0.797333 9.86933 0 8.88889 0ZM5.33333 1.77778H8.88889V2.66667H5.33333V1.77778ZM10.6667 14.2222H3.55556V4.44444H10.6667V14.2222Z"
        fill={color}
      />
      <path d="M4.66667 5.33333H6.44444V13.3333H4.66667V5.33333Z" fill={color} />
      <path d="M7.77778 5.33333H9.55556V13.3333H7.77778V5.33333Z" fill={color} />
    </SvgIcon>
  );
}
