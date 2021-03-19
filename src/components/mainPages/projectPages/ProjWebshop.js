import React, { useLayoutEffect } from "react";
import HamburgerIcon from "../../pagesFragments/HamburgerIcon";
import SlidingProjectavigation from "../../pagesFragments/SlidingProjectavigation";
import MyLogo from "../../pagesFragments/Logo";
import Introduction from "../../landingPageChapters/Introduction";
import FlippingCard from "../../pagesFragments/FlippingCard";
import Footer from "../../pagesFragments/Footer";
import ScreenshotWebshop1 from "../../../img/projectpages/webshop/ScreenshotWebshop1.png";

const ProjWebshop = () => {
  const parentId = "projWebshop";
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ backgroundColor: "rgba(25,0,100,.1)" }}>
      <header>
        <MyLogo />
        <HamburgerIcon />
        <SlidingProjectavigation />
      </header>
      <Introduction parentId={parentId} />
      <div className="portfolio-item-individual">
        <h3>What is this project about?</h3>
        <p>
          I applied all my React/Redux knowledge to mimic how a webshop would
          track and manage it`s products lifecycle, from the background storage
          facility thru the online shop, where the user can select any items and
          place them into the shopping cart. From coding perspective my task was
          to figure out:
        </p>
        <ul>
          <li>
            How selling various products effects the inventory: if the user buys
            an item, that item should be deducted from the stock. If no items
            left (all sold), the online shop should not provide that product
            anymore.
          </li>
          <li>
            How to deal with changes in stock? If an item runs out of stock, the
            user should not see in in the shop anymore. If there is a new
            incoming shipment arrived (creating the effect with the plus
            buttons) the shop should automatically update the available
            quantity.
          </li>
          <li>
            How to deal with out-of-stock products? The App should immeadiately
            remove the item from the shop.
          </li>
          <li>
            How filter and search among different products: the user can filter
            them separately by name or by price range or use both filters
            together.
          </li>
          <li>How the user can select and put items into the shopping cart.</li>
          <li>How to delete/modify volume of an item in the shopping cart.</li>
          <li>How to generate an instant and up-to-date inventory list.</li>
        </ul>
        <FlippingCard
          linkToWebsite={"http://www.nagylajos.info/webshop_v2103/"}
          linkToGithub={
            "https://github.com/NagyLajos71/Webshop_DataFlow_Redux_Project"
          }
        />
        <h3>Why did I choose this particular layout?</h3>
        <p>
          I deliberately choosed this layout. This is not how a webshop would
          look like, I know. But arranging like this it is very easy to see the
          ongoing effects. This project is not about creating a fully functional
          webshop anyway, but a humble coding exercise to show that I can do
          CRUD (create, read, update, destroy) operations with React/Redux.
        </p>
        <img src={ScreenshotWebshop1} alt="app screenshot" />
        <h3>Why is the App in Hungarian?</h3>
        <p>
          There are a couple of shopping cart tutorials on Youtube, all of them
          are in English. Knowing this, I just wanted somehow diferentiate from
          them, and indicate that this App is not a clone of those by any means,
          but my very own creation. My intention with this project is to show
          the level of coding complexity I can cope with at this stage of my
          learning curve, and my knowledge about the underlying technologies. So
          whoever checks my portfolio, he can make an informed decision about my
          coding skills, and not about how well can I copy someone else`s code.
        </p>
        <h3>The code</h3>
        <p>
          The global data is stored in the Redux store, also I used React hooks
          like useState, useEffect, useRef. From the basic JavaScript concepts I
          used map(), filter(), and reduce() extensively, along with switch
          statements and ternary operators.
        </p>

        <h3>How does the App work?</h3>
        <p>
          The App has 3 main Components. The storage (Raktar) represents all the
          products our imaginary company is offering for sale. Just as in real
          life, sometimes the product is out-of-stock. A different color code
          represents those items. The user can mimic the incoming/outgoing
          volume changes by +/- buttons. Also we can add new products to the
          inventory in the header section.
          <br />
          The webshop contains all the products that are in stock (all those
          products are excluded where the volume is === 0). In the header the
          user can filter products by name and price range. Clicking on an item
          in the webshop adds the item to the shopping cart.
          <br />
          The Shopping cart (Kosar) contains all the products the user wants to
          purchase. By clicking on the purchase button the items will be
          deducted from the storage inventory.
          <br />
          It the quantity changes in the storage, it will autoatically update
          the webshop and the shopping cart informations as well. If there are
          more items in any of these components, a small 'scroll' text appears
          in the corner indicating that the user should scroll down to see the
          full list of the products.
        </p>
        <h3>Api request with Axios</h3>
        <p>
          On the first load the App makes an API request to
          "http://data.fixer.io/api/latest/" to retrieve information about the
          current EUR/HUF exchange rate, so the App can use it in a calculation
          to show the total payable in HUF as well. I deliberately choosed to
          show the prices in EUR at the first place so I couldld find a way to
          incorporate a real API request as well into this App.
        </p>
      </div>
      <Footer parentId={parentId} />
    </div>
  );
};

export default ProjWebshop;
/*COMPONENT DESCRIPTION
parent: App.js;
role: provide background information to a portfolio project (Webshop/ product tracking app)
*/