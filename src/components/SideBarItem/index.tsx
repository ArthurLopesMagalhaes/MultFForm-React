import { Link } from "react-router-dom";
import * as C from "./styles";
import profile from "../../svgs/profile.svg";
import book from "../../svgs/book.svg";
import mail from "../../svgs/mail.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SideBarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && <img src={profile} alt="profile" width={24} />}
          {icon === "book" && <img src={book} alt="book" width={24} />}
          {icon === "mail" && <img src={mail} alt="mail" width={24} />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
