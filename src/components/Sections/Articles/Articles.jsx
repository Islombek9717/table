import { Wrap } from "./style";
import Misc from "../../../assets/icons/misc.svg";

const Article = () => {
  return (
    <Wrap>
      <Wrap.Title>Our Latest Articles</Wrap.Title>
      <Wrap.Articles>
        <Wrap.Article bgImg="article1">
          <Wrap.Top>
            <Wrap.Misc>
              <img src={Misc} alt="Misc" width={13} height={13} />
              <Wrap.MiscTitle>Furniture</Wrap.MiscTitle>
            </Wrap.Misc>
            <Wrap.MiscDate>23 September 2022</Wrap.MiscDate>
          </Wrap.Top>
          <Wrap.Heading>Begineer guide buying minimal sofa</Wrap.Heading>
          <Wrap.ReadMore>Read more</Wrap.ReadMore>
        </Wrap.Article>
        <Wrap.Article bgImg="article2">
          <Wrap.Top>
            <Wrap.Misc>
              <img src={Misc} alt="Misc" width={13} height={13} />
              <Wrap.MiscTitle>Table</Wrap.MiscTitle>
            </Wrap.Misc>
            <Wrap.MiscDate>23 September 2022</Wrap.MiscDate>
          </Wrap.Top>
          <Wrap.Heading>Buying best minimal computer table</Wrap.Heading>
          <Wrap.ReadMore>Read more</Wrap.ReadMore>
        </Wrap.Article>
        <Wrap.Article bgImg="article3">
          <Wrap.Top>
            <Wrap.Misc>
              <img src={Misc} alt="Misc" width={13} height={13} />
              <Wrap.MiscTitle>Bench</Wrap.MiscTitle>
            </Wrap.Misc>
            <Wrap.MiscDate>23 March 2022</Wrap.MiscDate>
          </Wrap.Top>
          <Wrap.Heading>How to choose best modern bench</Wrap.Heading>
          <Wrap.ReadMore>Read more</Wrap.ReadMore>
        </Wrap.Article>
        <Wrap.Article bgImg="article4">
          <Wrap.Top>
            <Wrap.Misc>
              <img src={Misc} alt="Misc" width={13} height={13} />
              <Wrap.MiscTitle>Chair</Wrap.MiscTitle>
            </Wrap.Misc>
            <Wrap.MiscDate>23 March 2022</Wrap.MiscDate>
          </Wrap.Top>
          <Wrap.Heading>Best Summer Outfit Style in this Country</Wrap.Heading>
          <Wrap.ReadMore>Read more</Wrap.ReadMore>
        </Wrap.Article>
      </Wrap.Articles>
    </Wrap>
  );
};

export default Article;
