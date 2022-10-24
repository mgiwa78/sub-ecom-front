import { createSelector } from "reselect";

const selectProductReducer = (state) => state.products;

export const selectAllProductsbyVendor = createSelector(
  [selectProductReducer],
  (selectProductReducer) => selectProductReducer.allProductsByVendor
);
// export const selectProductNotes = createSelector(
//   [selectProductReducer],
//   (selectProductReducer) => {
//     return selectProductReducer.notes && Object.values(selectProductReducer.notes);
//   }
// );
