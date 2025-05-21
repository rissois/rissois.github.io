import { Link } from "@mui/material";

export const TORTE = {
  name: "Torte",
  description: [
    "I took a hiatus from my PhD at MIT to build a startup in the restaurant tech space despite having no prior experience in restaurants or software.",

    "I created the Guest POS, the first system that let customers collaboratively order and pay from multiple phones. I also introduced dietary menu filtering and new analytics, like item sharing, to help restaurants understand group behavior.",

    "I onboarded 4 restaurant partners and processed $8K in beta sales before returning to finish the PhD. Partners leveraged new analytics to optimize their menus and pricing, and servers saved 33% of their time-per-table allowing them to focus more on hospitality.",
    <div>
      You can view the source code{" "}
      <Link
        href="https://github.com/rissois/Torte"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0b3b9c",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        here
      </Link>
      .
    </div>,
  ],
  photos: [
    {
      uri: "/torte/menus.mp4",
      height: 2014,
      width: 1066,
      title: "Photo panels",
      text: "Most systems use tiny thumbnails no one can see. Photo panels make items stand out, and are customizable to drive sales toward items with higher margins or limited shelf life.",
    },
    {
      uri: "/torte/filters.mp4",
      height: 2014,
      width: 1066,
      title: "Dietary filters",
      text: "Dietary filters allows patrons to create custom menus and eliminates the need for servers to check with the kitchen, which interrupts service.",
    },
    {
      uri: "/torte/ordering.mp4",
      height: 2014,
      width: 1066,
      title: "Collaborative ordering",
      text: "Collaborative ordering is the only way to let each guest use their own phone and ensure the kitchen only receives one ticket per table.",
    },
    {
      uri: "/torte/split.mp4",
      height: 2014,
      width: 1066,
      title: "Bill splitting",
      text: "Dining out is about sharing an experience, but calculators, multiple credit cards, and Venmo made sharing a headache for guests and staff. Torte was the first system to offer item-level bill splitting, allowing guests handle the bill any way they want.",
    },
    {
      uri: "/torte/payment.mp4",
      height: 2014,
      width: 1066,
      title: "Mobile payments",
      text: "Mobile payments were powered by Stripe, with the long-term goal of breaking restaurants free from high fees and surcharges imposed by point-of-sales company.",
    },
    // {
    //   uri: "/thumbnails/Torte.jpeg",
    //   overrideSize: true,
    //   height: 200,
    //   width: 200,
    //   title: "The Torte brand",
    //   text: 'When you make a tiered cake, you start by baking one tall sheet and then splitting that sheet into two or more evenly sized smaller layers. This is called "torting" a cake, which felt fitting for a restaurant payment app focused on bill splitting. The Torte logo also emphasizes splitting, and resembles a credit card reader and restaurant hightop table.',
    // },
  ],
  component: "rows",
  styles: {
    groupHeight: 400,
  },
};
