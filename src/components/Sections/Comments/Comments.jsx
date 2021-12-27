import { Wrap } from "./style";
import Customer from "../../../assets/img/customer.png";
import PrevB from "../../../assets/img/PrevB.png";
import NextB from "../../../assets/img/NextB.png";

const Comments = () => {
  return (
    <Wrap>
      <Wrap.Title>What Our Customer Says</Wrap.Title>
      <img src={Customer} alt="Avatar" width={88} height={88} />
      <Wrap.CommentWrapper>
        <img src={PrevB} alt="Prev Btn" />

        <Wrap.Comments>
          <Wrap.Text>
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </Wrap.Text>
          <Wrap.UserName>Angelina Joly</Wrap.UserName>
          <Wrap.Status>Co-founder</Wrap.Status>
        </Wrap.Comments>

        <img src={NextB} alt="Next Btn" />
      </Wrap.CommentWrapper>
    </Wrap>
  );
};

export default Comments;
