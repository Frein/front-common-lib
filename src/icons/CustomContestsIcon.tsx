import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function CustomContestsIcon({ color }: { color: string }) {
  return (
    <SvgIcon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.97246 0C6.20303 0 3.13635 3.08418 3.13635 6.87517C3.13635 10.6446 6.20303 13.7113 9.97246 13.7113C13.7419 13.7113 16.8086 10.6446 16.8086 6.87517C16.8086 3.08418 13.7419 0 9.97246 0Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.76346 12.3889C5.19043 13.836 7.11841 14.7903 9.26397 14.9693L6.56276 19.6999C6.30483 20.1512 5.63172 20.0781 5.47625 19.5828L4.63018 16.9227L1.97328 17.4847C1.46811 17.5923 1.074 17.0492 1.33068 16.6026L3.76346 12.3889Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7207 14.9706C12.8674 14.7952 14.7971 13.8439 16.2264 12.3992L18.6527 16.6015C18.9108 17.0508 18.515 17.591 18.0116 17.4849L15.3538 16.9228L14.5075 19.5837C14.3527 20.0752 13.6797 20.1516 13.4208 19.6991L10.7207 14.9706Z"
        fill={color}
      />
    </SvgIcon>
  );
}
