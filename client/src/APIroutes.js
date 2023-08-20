// export const host = "http://localhost:8080";
export const host = "https://eazy-buy.onrender.com";

// auth Routes
export const loginRoute = `${host}/api/v1/auth/login/`;
export const registerRoute = `${host}/api/v1/auth/register/`;
export const forgotPasswordRoute = `${host}/api/v1/auth/forgot-password/`;
export const testRoute = `${host}/api/v1/auth/test/`;
export const userAuthRoute = `${host}/api/v1/auth/user-auth/`;
export const profileRoute = `${host}/api/v1/auth/profile/`;
export const ordersRoute = `${host}/api/v1/auth/orders/`;
export const allOrdersRoute = `${host}/api/v1/auth/all-orders/`;
export const orderStatusRoute = `${host}/api/v1/auth/order-status/`;
export const adminAuthRoute = `${host}/api/v1/auth/admin-auth/`;

//category Routes
export const createCatRoute = `${host}/api/v1/category/create-category/`;
export const updateCatRoute = `${host}/api/v1/category/update-category/`;
export const getAllCatRoute = `${host}/api/v1/category/get-category/`;
export const singleCatRoute = `${host}/api/v1/category/single-category/`;
export const deleteCatRoute = `${host}/api/v1/category/delete-category/`;

// product Routes
export const createProductRoute = `${host}/api/v1/product/create-product/`;
export const updateProductRoute = `${host}/api/v1/product/update-product/`;
export const getAllProductsRoute = `${host}/api/v1/product/get-product/`;
export const getSingleProductRoute = `${host}/api/v1/product/get-product/`;
export const getProductPhotoRoute = `${host}/api/v1/product/product-photo/`;
export const deleteProductRoute = `${host}/api/v1/product/delete-product/`;
export const filterProductRoute = `${host}/api/v1/product/product-filters/`;
export const productCountRoute = `${host}/api/v1/product/product-count/`;
export const productPerPageRoute = `${host}/api/v1/product/product-list/`;
export const searchProductRoute = `${host}/api/v1/product/search/`;
export const similarProductRoute = `${host}/api/v1/product/related-product/`;
export const categoryWiseProductRoute = `${host}/api/v1/product/product-category/`;

//Payment Token Routes
export const paymentTokenRoute = `${host}/api/v1/product/braintree/token/`;
export const paymentRoute = `${host}/api/v1/product/braintree/payment/`;
