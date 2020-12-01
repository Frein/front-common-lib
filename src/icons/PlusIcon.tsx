import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function PlusIcon() {
  return (
    <SvgIcon
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill="#175FC0" />
      <path
        d="M21.8571 13.2857H16.7143V8.14286C16.7143 7.51179 16.2025 7 15.5714 7H14.4286C13.7975 7 13.2857 7.51179 13.2857 8.14286V13.2857H8.14286C7.51179 13.2857 7 13.7975 7 14.4286V15.5714C7 16.2025 7.51179 16.7143 8.14286 16.7143H13.2857V21.8571C13.2857 22.4882 13.7975 23 14.4286 23H15.5714C16.2025 23 16.7143 22.4882 16.7143 21.8571V16.7143H21.8571C22.4882 16.7143 23 16.2025 23 15.5714V14.4286C23 13.7975 22.4882 13.2857 21.8571 13.2857Z"
        fill="white"
      />
    </SvgIcon>
  );
}
