import { useNavigate } from "react-router-dom";
import { TextView } from "../components/styled-components/BoxView.styles";
import { ColumnContainer } from "../components/styled-components/ColumnContainer.styles";
import { colors } from "../utililty/themeColor";

const SellerProductPage = () => {
  const navigate = useNavigate();

  return (
    <ColumnContainer>
      <TextView> My Products </TextView>
      <TextView
        padding="8px 12px"
        color={colors.neutral.base}
        cursor="pointer"
        backgroundColor={colors.primary.base}
        borderRadius={"12px"}
        position="absolute"
        right="30px"
        bottom="30px"
        onClick={() => {
          navigate("create-product");
        }}
      >
        +
      </TextView>
    </ColumnContainer>
  );
};

export default SellerProductPage;
