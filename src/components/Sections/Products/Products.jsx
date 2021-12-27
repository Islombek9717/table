import { data } from "../../../data/data";
import { Wrap } from "../Trending/style";
import { Feature } from "../Trending/style";
import Prev from "../../../assets/icons/prev.svg";
import Next from "../../../assets/icons/next.svg";
import Like from "../../../assets/icons/like.svg";
import Shopping from "../../../assets/icons/shopping.svg";
import Refresh from "../../../assets/icons/refresh.svg";
import Eyes from "../../../assets/icons/eyes.svg";

const Products = () => {
  const data2 = data.splice(0, 8);
  return (
    <Wrap>
      <Wrap.Title>OUR PRODUCTS</Wrap.Title>
      <Wrap.Links>
        <Wrap.LinkTitle>All Products</Wrap.LinkTitle>
        <Wrap.LinkTitle>Best Sellers</Wrap.LinkTitle>
        <Wrap.LinkTitle>New Arrivals</Wrap.LinkTitle>
        <Wrap.LinkTitle>Todays Deals</Wrap.LinkTitle>
      </Wrap.Links>
      <Wrap.Items>
        {data2.map((value) => (
          <Wrap.Chairs key={value.id}>
            <img src={value.img} alt="" width={269} height={287} />
            <Wrap.New bgcolor={value.type}>{value.type}</Wrap.New>
            <Feature>
              <Feature.FeatureItems>
                <Feature.Icons src={Like} />
              </Feature.FeatureItems>
              <Feature.FeatureItems>
                <Feature.Icons src={Shopping} />
              </Feature.FeatureItems>
              <Feature.FeatureItems>
                <Feature.Icons src={Refresh} />
              </Feature.FeatureItems>
              <Feature.FeatureItems>
                <Feature.Icons src={Eyes} />
              </Feature.FeatureItems>
            </Feature>
            <Wrap.Type>{value.name}</Wrap.Type>
            <Wrap.ChairTitle>{value.title}</Wrap.ChairTitle>
            <Wrap.Prices>
              <Wrap.Cost>{value.price}</Wrap.Cost>
              <Wrap.Sale>{value.sale}</Wrap.Sale>
              <img src={value.rating} alt="" width={66} height={9} />
            </Wrap.Prices>
          </Wrap.Chairs>
        ))}
      </Wrap.Items>
      <Wrap.Pagination>
        <Wrap.NextPageBtn>Next Page →</Wrap.NextPageBtn>
        <Wrap.Text>Page</Wrap.Text>
        <Wrap.CountNum>1</Wrap.CountNum>
        <Wrap.Count>of 100</Wrap.Count>
        <Wrap.NextPrev>
          <img src={Prev} alt="Prev icon" />
          <img src={Next} alt="Next icon" />
        </Wrap.NextPrev>
      </Wrap.Pagination>
    </Wrap>
  );
};

export default Products;
