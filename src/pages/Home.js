import React from "react";
import LinkCard from "../Components/LinkCard/LinkCard";
import SubmitNavigation from "../Components/SubmitNavigation/SubmitNavigation";
import { updateState } from "../Features/LinkSlice";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const { linkList } = useSelector((state) => state.links.value);
  const dispatch = useDispatch();
  return (
    <section className="o-container">
      <SubmitNavigation />
      <div className="o-container__cards">
        {linkList.map((linkItem) => (
          <LinkCard key={linkItem.name} link={linkItem} />
        ))}
      </div>
    </section>
  );
}

export default Home;
