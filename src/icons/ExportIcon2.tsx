import React from 'react';

export default function ExportIcon2({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 4.25V0H2.75C2.33437 0 2 0.334375 2 0.75V15.25C2 15.6656 2.33437 16 2.75 16H13.25C13.6656 16 14 15.6656 14 15.25V5H9.75C9.3375 5 9 4.6625 9 4.25ZM11.3891 10.855L8.37594 13.8456C8.16813 14.0522 7.8325 14.0522 7.62469 13.8456L4.61156 10.855C4.29437 10.5403 4.51688 10 4.96312 10H7V7.5C7 7.22375 7.22375 7 7.5 7H8.5C8.77625 7 9 7.22375 9 7.5V10H11.0369C11.4831 10 11.7056 10.5403 11.3891 10.855ZM13.7812 3.28125L10.7219 0.21875C10.5813 0.078125 10.3906 0 10.1906 0H10V4H14V3.80938C14 3.6125 13.9219 3.42188 13.7812 3.28125Z"
        fill={color}
      />
    </svg>
  );
}