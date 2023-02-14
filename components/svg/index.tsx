import React from "react";

export type Booleanish = boolean | "true" | "false";

export interface PropsSVG {
  className?: string | undefined;
  fill?: string | undefined;
  viewBox?: string | undefined;
  ariaHidden?: Booleanish | undefined;
  stroke?: string;
  title?: string;
}

export const Account = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
    </svg>
  );
};

export const Email = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  );
};

export const Calendar = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z"></path>
    </svg>
  );
};

export const Sex = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"></path>
    </svg>
  );
};

export const Telephone = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
      ></path>
    </svg>
  );
};

export const Key = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
      ></path>
    </svg>
  );
};

export const Eye = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    </svg>
  );
};

export const EyeSlash = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
    </svg>
  );
};

export const User = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Menu = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const RowDown = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const SearchRound = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      stroke="currentColor"
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
};

export const SearchEvenodd = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      fill={initial.fill}
      viewBox={initial.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={initial.ariaHidden}
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Facebook = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Ebene 1"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="#1877f2"
        d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
      />
      <path
        fill="#fff"
        d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
      />
    </svg>
  );
};

export const Line = (initial: PropsSVG) => {
  return (
    <svg
      className={initial.className}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        d="M13.78,9.46h0a.38.38,0,0,0-.38.38v1.67L12,9.65a.4.4,0,0,0-.33-.19h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h0a.38.38,0,0,0,.38-.38V11l1.39,1.91,0,0h0a.27.27,0,0,0,.15.11.32.32,0,0,0,.14,0h0A.33.33,0,0,0,14,13l.1-.07h0a.39.39,0,0,0,.11-.27V9.84A.38.38,0,0,0,13.78,9.46ZM9.2,12.27H8.14V9.84a.38.38,0,0,0-.38-.38h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38H9.2a.39.39,0,0,0,.39-.38v0A.39.39,0,0,0,9.2,12.27Zm1.11-2.81h0a.39.39,0,0,0-.39.38v2.84a.39.39,0,0,0,.39.38h0a.38.38,0,0,0,.38-.38V9.84A.38.38,0,0,0,10.31,9.46ZM17.91,2H6.09A4.1,4.1,0,0,0,2,6.09V17.91A4.1,4.1,0,0,0,6.09,22H17.91A4.1,4.1,0,0,0,22,17.91V6.09A4.1,4.1,0,0,0,17.91,2Zm.31,12.28a1.55,1.55,0,0,1-.13.17h0a5.5,5.5,0,0,1-.8.8c-2,1.87-5.36,4.11-5.81,3.76s.64-1.76-.53-2a1,1,0,0,1-.25,0h0c-3.44-.48-6-2.89-6-5.78,0-3.25,3.29-5.88,7.34-5.88s7.34,2.63,7.34,5.88A5,5,0,0,1,18.22,14.28ZM16.51,9.47H15a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h1.48a.38.38,0,0,0,.38-.38v0a.38.38,0,0,0-.38-.38H15.45v-.6h1.06a.39.39,0,0,0,.38-.39v0a.38.38,0,0,0-.38-.38H15.45v-.61h1.06a.38.38,0,0,0,.38-.38v0A.38.38,0,0,0,16.51,9.47Z"
        fill="#34a853"
        className="color000000 svgShape"
      ></path>
    </svg>
  );
};

export const Star = (initial: PropsSVG) => {
  return (
    <svg
      aria-hidden="true"
      className={initial.className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{initial.title}</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Account,
  Email,
  Calendar,
  Sex,
  Telephone,
  Key,
  User,
  Menu,
  RowDown,
  SearchRound,
  SearchEvenodd,
  Facebook,
  Line,
  Eye,
  EyeSlash,
  Star,
};
