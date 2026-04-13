import { ColumnContainer } from "../components/styled-components/ColumnContainer.styles";
import { RowContainer } from "../components/styled-components/RowContainer.styles";
import { TextView } from "../components/styled-components/BoxView.styles";
import { CartIcon, StarFilledIcon } from "../components/ui-components/SVGIcons";
import { colors } from "../utililty/themeColor";
import user from "../assets/OIP.jpeg";
import { Image } from "../components/styled-components/Image.styles";

const ProductPage = () => {
  const data = {
    id: 152,
    title: "Penguin Atomic Habits Non-Fiction",
    description:
      "Buy the Penguin Atomic Habits Non-Fiction from Penguin. Non-Fiction engineered for quality and value. Ideal for books needs.",
    price: 16.04,
    category: "Books",
    rating: 1.9,
    stock: 88,
    brand: "Penguin",
    image: "",
    createdAt: "2025-08-31T05:00:05.452Z",
  };

  return (
    <ColumnContainer padding={"8px"}>
      <RowContainer alignItems={"start"}>
        <ColumnContainer flex={0.7} padding={"12px"}>
          <Image src={data.image} width={"70vw"} height={"700px"} />
          <RowContainer justifyContent="center">
            <Image src={data.image} width={"200px"} height={"100px"} />
            <Image src={data.image} width={"100px"} height={"100px"} />
            <Image src={data.image} width={"100px"} height={"100px"} />
          </RowContainer>
        </ColumnContainer>
        <ColumnContainer flex={0.3} padding={"20px"} position = {'sticky'}>
          <RowContainer justifyContent={"flex-start"}>
            <TextView
              padding={"4px 8px"}
              backgroundColor={colors.secondary.shades[7]}
              color={colors.secondary.shades[1]}
              size={15}
            >
              {data.brand}
            </TextView>
            <TextView
              size={15}
              borderRadius={"0px"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <StarFilledIcon color="yellow" />
              {data.rating}
            </TextView>
          </RowContainer>
          <TextView color={colors.neutral.shades[1]} size={50} fontWeight={500}>
            {data.title}
          </TextView>
          {/* // Seller Name Box */}
          <RowContainer padding={"30px 0px 0px 0px"}>
            <RowContainer>
              <img src={user} style={{ borderRadius: "50%", width: "35px" }} />
              <ColumnContainer>
                <TextView
                  color={colors.neutral.shades[5]}
                  size={14}
                  fontWeight={500}
                >
                  SOLD BY
                </TextView>
                <TextView
                  color={colors.primary.shades[1]}
                  size={16}
                  fontWeight={500}
                >
                  Studio Narrative
                </TextView>
              </ColumnContainer>
            </RowContainer>
            <TextView
              color={colors.neutral.shades[1]}
              size={40}
              fontWeight={600}
            >
              ${data.price}
            </TextView>
          </RowContainer>
          {/* Description */}
          <TextView
            padding={"30px 0px 0px 0px"}
            size={18}
            color={colors.neutral.shades[5]}
          >
            {data.description}
          </TextView>
          {/* Buttons */}
          <RowContainer padding={"30px 0px 0px 0px"}>
            <TextView
              flex={0.5}
              color={colors.neutral.base}
              backgroundColor={colors.primary.base}
              size={16}
              fontWeight={500}
              textAlign={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CartIcon /> <p>Add to Cart</p>
            </TextView>
            <TextView
              flex={0.5}
              color={colors.neutral.base}
              backgroundColor={colors.secondary.base}
              size={16}
              fontWeight={500}
              // textAlign={'center'}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <p>Buy Now</p>
            </TextView>
          </RowContainer>
          {/* Terms & Condition */}
          <RowContainer padding={"30px 0px 0px 0px"}>
            <RowContainer
              padding={"10px"}
              flex={0.5}
              borderRadius={"10px"}
              background={colors.neutral.shades[8]}
              justifyContent={"flex-start"}
            >
              <CartIcon />
              <ColumnContainer>
                <TextView
                  flex={0.5}
                  color={colors.neutral.shades[2]}
                  size={12}
                  fontWeight={500}
                  borderRadius={"0px"}
                >
                  Free Shipping
                </TextView>
                <TextView
                  flex={0.5}
                  color={colors.neutral.shades[4]}
                  size={12}
                  fontWeight={500}
                  borderRadius={"0px"}
                >
                  Over $200
                </TextView>
              </ColumnContainer>
            </RowContainer>
            <RowContainer
              padding={"10px"}
              flex={0.5}
              borderRadius={"10px"}
              background={colors.neutral.shades[8]}
              justifyContent={"flex-start"}
            >
              <CartIcon />
              <ColumnContainer>
                <TextView
                  flex={0.5}
                  color={colors.neutral.shades[2]}
                  size={12}
                  fontWeight={500}
                  borderRadius={"0px"}
                >
                  30-Day Returns
                </TextView>
                <TextView
                  flex={0.5}
                  color={colors.neutral.shades[4]}
                  size={12}
                  fontWeight={500}
                  borderRadius={"0px"}
                >
                  Easy exchange
                </TextView>
              </ColumnContainer>
            </RowContainer>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </ColumnContainer>
  );
};

export default ProductPage;
