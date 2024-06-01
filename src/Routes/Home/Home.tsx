import { Footer, SearchKitchen, TopKitchens } from "../../Components";
import * as Styles from "./HomeStyle";
export default function Home() {
  return (
    <Styles.Container>
      <SearchKitchen />
      <TopKitchens />
      <Footer />
    </Styles.Container>
  );
}