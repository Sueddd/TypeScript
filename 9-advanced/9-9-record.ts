type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

// Record<Page, PageInfo> ➡️ Page와 PageInfo를 묶어주는 역할, 연결해주는
// Page를 key로 삼고, PageInfo를 value로 삼으면 된다.
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
