import Accordion from "./Accordion.client";

export default function ProductFAQs() {
  return (
    <ul>
      <li>
        <Accordion heading="Where was this board made?">
          <>
            <p>
              All our boards are designed in Canada by our Hydrogen design team.
            </p>
            <p>Materials are sourced from local manufacturers.</p>
            <p>
              Assembly is done by our skilled team on site in our brick and
              mortar shop.
            </p>
          </>
        </Accordion>
      </li>
      <li>
        <Accordion heading="What if I don't like it?">
          <>
            <p>
              The Hydrogen team stands by their products. We strive to delivery
              high quality boards that will last a lifetime and, importantly,
              make you happy.
            </p>
            <p>
              That said, if you don't like it, you can return it to us (free of
              cost!) and we'll reimburse you the money. Contact us directly for
              more details.
            </p>
          </>
        </Accordion>
      </li>
    </ul>
  );
}
