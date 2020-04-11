import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import TabProduct from "../../wrappers/product/TabProduct";

const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Óticas Zanne</title>
        <meta
          name="description"
          content="Óticas Zanne"
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
