import * as React from "react";
import { SVGProps } from "react";

const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    viewBox="0 0 18 15"
    aria-label="twitter"
    fill="currentColor"
    width="1em"
    {...props}
  >
    <path d="m18 1.684-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z" />
  </svg>
);

export default SvgTwitter;
