import React, { Component } from "react";

const View = ({ link, icon, title, changePage }) => {
  return (
    <div
      className="menu-item-wrapper fullHover "
      onClick={() => changePage(link)}
    >
      <div className="menu-heading-wrapper fullHover">
        <span className="icon-wrapper fullHover"> {icon}</span>
        <span className="menu-heading fullHover">{title}</span>
      </div>
    </div>
  );
};

export default View;
