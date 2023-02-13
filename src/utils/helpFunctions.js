export const errorBorder = {
  border: "1px solid red",
};
export const ClearStorage = () => {
  localStorage.clear();
};

export const DeleteItemLS = () => {
  localStorage.removeItem("temporaryInfromation");
  localStorage.removeItem("name");
  localStorage.removeItem("lastname");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");
  localStorage.removeItem("about");
};
