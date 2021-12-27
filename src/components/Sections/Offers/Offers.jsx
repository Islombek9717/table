import { Wrap } from "./style";

const Offer = () => {
  return (
    <Wrap>
      <Wrap.Title>SPECIAL OFFER</Wrap.Title>
      <Wrap.Offers>
        <Wrap.OfferItemOne>
          <Wrap.OfferTitle>Living Room Furniture</Wrap.OfferTitle>
          <Wrap.OfferText>
            You don't have a chair. Are you ready for growth? Shop with us 40%
            discount!
          </Wrap.OfferText>
          <Wrap.Prices>
            <Wrap.Cost>$150</Wrap.Cost>
            <Wrap.Sale>$250</Wrap.Sale>
            <Wrap.Btn>Shop Now</Wrap.Btn>
          </Wrap.Prices>
          <Wrap.Time>
            <Wrap.Circle>
              <Wrap.Number>10</Wrap.Number>
              <Wrap.Times>Days</Wrap.Times>
            </Wrap.Circle>
            <Wrap.Circle>
              <Wrap.Number>15</Wrap.Number>
              <Wrap.Times>Hrs</Wrap.Times>
            </Wrap.Circle>
            <Wrap.Circle>
              <Wrap.Number>30</Wrap.Number>
              <Wrap.Times>Min</Wrap.Times>
            </Wrap.Circle>
            <Wrap.Circle>
              <Wrap.Number>22</Wrap.Number>
              <Wrap.Times>Secs</Wrap.Times>
            </Wrap.Circle>
          </Wrap.Time>
          <Wrap.SalePer>40% off</Wrap.SalePer>
        </Wrap.OfferItemOne>
        <Wrap.OfferItemTwo>
          <Wrap.OfferTitle>Modern chair</Wrap.OfferTitle>
          <Wrap.OfferText>
            Hot chairs of the modern era are now available in our stock.
          </Wrap.OfferText>
          <Wrap.Prices>
            <Wrap.Cost>$75</Wrap.Cost>
            <Wrap.Sale>$150</Wrap.Sale>
            <Wrap.Btn>Shop Now</Wrap.Btn>
          </Wrap.Prices>
          <Wrap.Time>
            <Wrap.Circle>
              <Wrap.Number>15</Wrap.Number>
              <Wrap.Times>Days</Wrap.Times>
            </Wrap.Circle>
            <Wrap.Circle>
              <Wrap.Number>08</Wrap.Number>
              <Wrap.Times>Hrs</Wrap.Times>
            </Wrap.Circle>
            <Wrap.Circle>
              <Wrap.Number>20</Wrap.Number>
              <Wrap.Times>Min</Wrap.Times>
            </Wrap.Circle>
            <Wrap.Circle>
              <Wrap.Number>12</Wrap.Number>
              <Wrap.Times>Secs</Wrap.Times>
            </Wrap.Circle>
          </Wrap.Time>
          <Wrap.SalePer>50% off</Wrap.SalePer>
        </Wrap.OfferItemTwo>
      </Wrap.Offers>
    </Wrap>
  );
};

export default Offer;
