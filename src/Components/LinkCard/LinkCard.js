import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

const LinkCard = ({ ...props }) => {
  return (
    <article className="c-card">
      <div className="c-card__vote-box">
        <strong>{props.link.votes}</strong>
        <span>votes</span>
      </div>
      <div className="c-card__container">
        <div className="c-card__info">
          <h4>{props.link.name}</h4>
          <a href={props.link.url} target="_blank" rel="noreferrer">
            ({props.link.url})
          </a>
        </div>

        <div className="c-card__vote">
          <div onClick={() => props.upvote(props.link.id)}>
            <FontAwesomeIcon icon={faArrowUp} /> Up Vote
          </div>
          <div onClick={() => props.downvote(props.link.id)}>
            <FontAwesomeIcon icon={faArrowDown} /> Down Vote
          </div>
        </div>
        <div
          className="c-card__delete"
          onClick={() => props.modal(props.link.name, props.link.id)}
        >
          <FontAwesomeIcon
            icon={faCircleMinus}
            size="2x"
            style={{ color: "#ac1d1d" }}
          />
        </div>
      </div>
    </article>
  );
};

export default LinkCard;
