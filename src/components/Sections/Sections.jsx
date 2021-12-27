import Suggestions from "./suggestions/Suggestion";
import Trending from "./Trending/Trending";
import Offer from "./Offers/Offers";
import Products from "./Products/Products";
import Comments from "./Comments/Comments";
import Article from "./Articles/Articles";

import { Wrap } from "../Sections/style";
const Sections = () => {
  return (
    <Wrap>
      <Suggestions />
      <Trending />
      <Offer />
      <Products />
      <Comments />
      <Article />
    </Wrap>
  );
};

export default Sections;
