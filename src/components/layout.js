import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="antialiased min-h-screen text-gray-900">
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
