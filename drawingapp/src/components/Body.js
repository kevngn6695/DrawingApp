import "../assets/styles/body.css";

function Body({ className, children }) {
  return <body className={className}>{children}</body>;
}

export default Body;
