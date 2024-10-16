import { getDictionary } from "@/app/[lang]/dictionaries";
import HeaderComponent from "./header";
const Header = async ({ lang }) => {
  const t = await getDictionary(lang)



  return (

    <HeaderComponent t={t} />

  );
};

export default Header;
