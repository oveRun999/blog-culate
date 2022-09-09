import Link from "next/link";
import { blogUrl } from "@blogUrl";
import { getMemberPath } from "@src/utils/helper";

export const ScrollableblogUrl: React.FC = () => {
  return (
    <div className="scrollable-blogUrl">
      {blogUrl.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.id)}
          passHref
        >
          <a className="scrollable-member__link">
            <span className="scrollable-member__image">
              <img
                src={member.avatarSrc}
                alt={member.name}
                className="scrollable-member__img"
                width={80}
                height={80}
              />
            </span>
            <span className="scrollable-member__name">{member.name}</span>
            <span className="scrollable-member__role">{member.role}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};
