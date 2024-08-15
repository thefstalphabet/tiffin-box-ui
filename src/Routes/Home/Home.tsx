import { Footer,SearchKitchens, TopKitchens,Testimonials } from "../../Components";
import * as Styles from "./HomeStyle";
export default function Home() {
  return (
    <Styles.Container>
      <SearchKitchens />
      <TopKitchens />
      <Testimonials/>
      <Footer />
    </Styles.Container>
  );
}