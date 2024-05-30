import * as Styles from "./UserManagementStyle";
import { useParams } from "react-router-dom";
import { Kitchens, Users } from "../../Components";
import { ReactNode, useEffect, useState } from "react";
import PageNotFound from "../PageNotFound/PageNotFound";

export default function UserManagements() {
  const { type } = useParams();
  console.log(type);
  const [element, setElement] = useState<ReactNode>();
  useEffect(() => {
    switch (type) {
      case "users":
        setElement(<Users />);
        break;
      case "kitchens":
        setElement(<Kitchens />);
        break;
      default:
        setElement(<PageNotFound />);
        break;
    }
  }, [type]);

  return <Styles.Container className="container">{element}</Styles.Container>;
}
