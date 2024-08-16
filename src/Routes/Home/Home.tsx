import {
  Footer,
  SearchKitchens,
  TopKitchens,
  Testimonials,
  HowItWorks,
} from "../../Components";
import * as Styles from "./HomeStyle";
export default function Home() {
  return (
    <Styles.Container>
      <SearchKitchens />
      <TopKitchens />
      <Testimonials />
      <HowItWorks />
      <Footer />
    </Styles.Container>
  );
}
