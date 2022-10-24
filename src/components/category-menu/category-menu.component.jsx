import React from "react";
import { CategoryMenuContainer, ShirtIcon } from "./category-menu.styles";

const CategoryMenu = () => {
  const categories = [
    { name: "Acessories" },
    { name: "Supplements" },
    { name: "Furnitures" },
    { name: "Suplies" },
    // { name: "Acessories" },
    // { name: "Acessories" },
    // { name: "Acessories" },
  ];
  return (
    <CategoryMenuContainer>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
        </div>

        <ul className="sidebar-menu-category-list">
          {categories.map((category) => {
            return (
              <li key={`${category.name}`} className="sidebar-menu-category">
                <ShirtIcon />
                <p className="menu-title">{category.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </CategoryMenuContainer>
  );
};

export default CategoryMenu;
