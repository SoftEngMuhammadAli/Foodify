// it is used to catch errors in async functions
export const catchAsyncHandler = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};
