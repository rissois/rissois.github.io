import { TORTE } from "./Torte"
import { FLAGS } from "./Flags";

import FigmaIcon from './Figma';

export const CARDS = [
  { name: 'Torte', uri: 'Torte.jpeg', brief: 'The guest-centric restaurant point-of-sales' },
  { name: 'MuseAR (Figma)', uri: 'MuseAR.png', brief: 'Experience museums with augmented reality', link: 'https://www.figma.com/proto/0rVrFyt664ucXRY9L2iY8F/Muse?type=design&node-id=1-2&t=bjHZ0tAAHJikovgU-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design', Icon: FigmaIcon, },
  { name: 'Academic figures', uri: 'Academia.png', brief: 'A collection of scientific illustrations' },
  { name: 'Flags', uri: 'Flags.png', brief: 'Aka vexillography' },
  { name: 'Photography', uri: 'Photography.jpeg', brief: 'Nothing fancy, but I wanted to share' },
]

export const DETAILS = {
  Torte: TORTE,
  Flags: FLAGS,
}