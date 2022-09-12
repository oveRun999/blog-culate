/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { PostItem } from "@src/types";
import { getFaviconSrcFromOrigin } from "@src/utils/helper";

dayjs.extend(relativeTime);

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { title, isoDate, link, dateMiliSeconds, content } = props.item;
  const member = props.item;
  if (!member) return null;

  const { hostname, origin } = new URL(link);

  return (
    <article className="post-link">
      <a href={link} className="post-link__main-link">
        {(content && (
          <div
            className="post-link__imgwrapper"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        )) || (
          <div className="post-link__imgwrapper">
            <img src="https://placehold.jp/d0d3fb/ffffff/300x200.jpg?text=no%20image&css=%7B%22background%22%3A%22%20-webkit-gradient(linear%2C%20left%20top%2C%20left%20bottom%2C%20from(%239499e6)%2C%20to(%23d0d3fb))%22%2C%22font-size%22%3A%2214px%22%7D" />
          </div>
        )}
        <div className="post-link__wrapper">
          <h2 className="post-link__title">{title}</h2>
          <time dateTime={isoDate} className="post-link__date">
            {dayjs(isoDate).fromNow()}
          </time>
          {hostname && (
            <div className="post-link__site">
              <img
                src={getFaviconSrcFromOrigin(origin)}
                width={14}
                height={14}
                className="post-link__site-favicon"
                alt={hostname}
              />
              {hostname}
            </div>
          )}
        </div>
      </a>
      {dateMiliSeconds && dateMiliSeconds > Date.now() - 86400000 * 3 && (
        <div className="post-link__new-label">NEW</div>
      )}
    </article>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(32);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className="post-list-empty">No posts yet</div>;
  }

  return (
    <>
      <div className="post-list">
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </div>
      {canLoadMore && (
        <div className="post-list-load">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount + 32)}
            className="post-list-load__button"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
