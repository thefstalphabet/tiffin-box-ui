import { Footer,SearchKitchens, TopKitchens } from "../../Components";
import * as Styles from "./HomeStyle";
export default function Home() {
  return (
    <Styles.Container>
      <SearchKitchens />
      <TopKitchens />
      <Footer />
    </Styles.Container>
  );
}