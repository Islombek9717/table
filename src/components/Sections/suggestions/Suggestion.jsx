import { Wrap } from "./style";
import Delivery from "../../../assets/img/delivery.png";
import Gift from "../../../assets/img/gift.png";
import Wallet from "../../../assets/img/wallet.png";
import Support from "../../../assets/img/support.png";

const Suggestions = () => {
  return (
    <Wrap>
      <Wrap.ItemWrapper>
        <Wrap.Item>
          <img src={Delivery} alt="Delivery" width={58} height={58} />
          <Wrap.Title>
            <Wrap.Heading>Free Shipping</Wrap.Heading>
            <Wrap.Text>Orders over $100</Wrap.Text>
          </Wrap.Title>
        </Wrap.Item>
        <Wrap.Item>
          <img src={Gift} alt="Gift" width={58} height={58} />
          <Wrap.Title>
            <Wrap.Heading>Smart Gift Card</Wrap.Heading>
            <Wrap.Text>Buy $1000 to get card</Wrap.Text>
          </Wrap.Title>
        </Wrap.Item>
        <Wrap.Item>
          <img src={Wallet} alt="Wallet" width={58} height={58} />
          <Wrap.Title>
            <Wrap.Heading>Quick Payment</Wrap.Heading>
            <Wrap.Text>100% secure payment</Wrap.Text>
          </Wrap.Title>
        </Wrap.Item>
        <Wrap.Item>
          <img src={Support} alt="" width={58} height={58} />
          <Wrap.Title>
            <Wrap.Heading>24/7 Support</Wrap.Heading>
            <Wrap.Text>Quick support</Wrap.Text>
          </Wrap.Title>
        </Wrap.Item>
      </Wrap.ItemWrapper>
      <Wrap.Collections>
        <Wrap.Modern title="modern">
          <Wrap.ColTitle>Modern Furniture Collections</Wrap.ColTitle>
          <Wrap.Price>
            Starting from <b>$500</b>
          </Wrap.Price>
          <Wrap.ReadMore>Read More →</Wrap.ReadMore>
        </Wrap.Modern>
        <Wrap.CollectionLeft>
          <Wrap.Modern title="geometric">
            <Wrap.ColTitle>Geometric Bookcase</Wrap.ColTitle>
            <Wrap.Price>Up to 20% discount</Wrap.Price>
            <Wrap.ReadMore>Read More →</Wrap.ReadMore>
          </Wrap.Modern>
          <Wrap.Modern title="minimal">
            <Wrap.ColTitle>Minimal Sofa collections</Wrap.ColTitle>
            <Wrap.Price>Sale upto 40% discount</Wrap.Price>
            <Wrap.ReadMore>Read More →</Wrap.ReadMore>
          </Wrap.Modern>
        </Wrap.CollectionLeft>
      </Wrap.Collections>
    </Wrap>
  );
};

export default Suggestions;
