import { ColorRing } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#fc8e3e", "#0198BA", "#fc8e3e", "##0198BA", "#fc8e3e"]}
      />
    </div>
  );
};

export default Spinner;
