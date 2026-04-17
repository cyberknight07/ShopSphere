import { useState, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../utililty/themeColor";
import CartButtonIcon from "../../pages/CartButtonIcon";
import { Header } from "../styled-components/Header.styles";
import { RowContainer } from "../styled-components/RowContainer.styles";
import { LoginIcon } from "./SVGIcons";

const HeaderSection = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`products/search?q=${search}&page=1`);
  };

  return (
    <Header>
      <RowContainer>
        <span
          style={{ color: colors.primary.base, fontSize: 32, fontWeight: 800 }}
          onClick={() => {
            navigate("/");
          }}
        >
          Digital Atrium
        </span>
      </RowContainer>
      <RowContainer>
        <input
          type="text"
          placeholder="Search the desire"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          style={{
            backgroundColor: colors.neutral.shades[7],
            color: colors.neutral.shades[5],
            padding: "8px 12px",
          }}
        />

        <CartButtonIcon />

        <button>
          <LoginIcon size={24} />
        </button>
      </RowContainer>
    </Header>
  );
};

export default HeaderSection;
