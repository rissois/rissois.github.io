import { Link } from '@mui/material';

export const TORTE = {
  name: 'Torte',
  description: ['Slow checkouts and complex bill splitting were slowing business and creating bitter final impressions, yet restaurant software was not touching the guest experience. I started building a seamless payment interface to work across all restaurant platforms before the pandemic, but soon after pivoted to a complete point-of-sale system.',
    'Torte delivered mobile ordering and mobile payment with item-level bill splitting at three restaurants in the Boston area before I returned to finish my PhD.',
    <div>You can view the source code <Link href="https://github.com/rissois/Torte" target="_blank" rel="noopener noreferrer">here</Link>.</div>],
  photos: [
    { uri: '/thumbnails/Torte.jpeg', overrideSize: true, height: 200, width: 200, title: 'The Torte brand', text: 'When you make a tiered cake, you start by baking one tall sheet and then splitting that sheet into two or more evenly sized smaller layers. This is called "torting" a cake, which felt fitting for a restaurant payment app focused on bill splitting. The Torte logo also emphasizes splitting, and resembles a credit card reader and restaurant hightop table.' },
    { uri: '/torte/menus.mp4', height: 2014, width: 1066, title: 'Photo panels', text: 'Most systems use tiny thumbnails no one can see. Photo panels make items stand out, and are customizable to drive sales toward items with higher margins or limited shelf life.' },
    { uri: '/torte/filters.mp4', height: 2014, width: 1066, title: 'Dietary filters', text: 'Collaborative ordering is the only way to let each guest use their own phone and ensure the kitchen only receives one ticket per table.' },
    { uri: '/torte/ordering.mp4', height: 2014, width: 1066, title: 'Collaborative ordering', text: 'Collaborative ordering is the only way to let each guest use their own phone and ensure the kitchen only receives one ticket per table.' },
    { uri: '/torte/split.mp4', height: 2014, width: 1066, title: 'Bill splitting', text: 'Dining out is about sharing an experience, but calculators, multiple credit cards, and Venmo made sharing a headache for guests and staff. Torte was the first system to offer item-level bill splitting, allowing guests handle the bill any way they want.' },
    { uri: '/torte/payment.mp4', height: 2014, width: 1066, title: 'Mobile payments', text: 'Mobile payments were powered by Stripe, with the long-term goal of breaking restaurants free from high fees and surcharges imposed by point-of-sales company.' },
  ],
  component: 'rows',
  styles: {
    groupHeight: 400
  },
}