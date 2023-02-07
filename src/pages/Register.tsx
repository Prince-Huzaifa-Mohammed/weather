import MainLogo from "../components/MainLogo";
import Select from "../components/Select";
import { Content } from "../components/styled/Content";
import { PrimaryBox } from "../components/styled/PrimaryBox";
import { SecondaryBox } from "../components/styled/SecondaryBox";
import { Shell } from "../components/styled/Shell";
import { SmallContainer } from "../components/styled/SmallContainer";

const Register: React.FC = () => {
  return (
    <Shell>
      <SecondaryBox>
        <MainLogo />
      </SecondaryBox>
      <PrimaryBox></PrimaryBox>
      <Content>
        <SmallContainer>
          <Select />
        </SmallContainer>
      </Content>
    </Shell>
  );
};

export default Register;
