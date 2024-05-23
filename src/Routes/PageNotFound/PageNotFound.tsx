import * as Styles from "./PageNotFoundStyle";
import { pageNotfoundImage } from "../../Assets";
export default function PageNotFound() {
  return (
    <Styles.Container>
      <img src={pageNotfoundImage} alt="Page Not Found"/>
    </Styles.Container>
  );
}
